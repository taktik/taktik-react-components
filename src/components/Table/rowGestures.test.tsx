import { useState } from 'react'
import { act, fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { ThemeProvider } from 'styled-components'
import EditRoundedIcon from '@mui/icons-material/EditRounded'
import { DataGrid } from '../DataGrid/DataGrid'
import { defaultTableTheme as lightTheme } from '../../theme/tableTheme'
import { CrudTable } from './CrudTable'
import { rowActionsColumn } from './rowActions'
import { COPY_DWELL_MS, useRowGestures } from './useRowGestures'

/**
 * Whether the pointer is on a value's GLYPHS is a measurement jsdom cannot make — `hoveredLine`'s own
 * spec pins that rule, negative cases included. What is pinned here is the COMPOSITION: given an
 * answer, what a resting pointer arms and what the click that follows does.
 *
 * The stub resolves from the element the test last hovered, which stands in for the point: `undefined`
 * means the pointer came to rest on something that is not a value.
 */
const { hoveredText, lastHovered } = vi.hoisted(() => ({
    hoveredText: { value: undefined as string | undefined },
    lastHovered: { element: undefined as Element | undefined }
}))
vi.mock('../DataGrid/copy', async (importOriginal) => ({
    ...(await importOriginal<typeof import('../DataGrid/copy')>()),
    hoveredLineAt: () =>
        hoveredText.value !== undefined && lastHovered.element
            ? { element: lastHovered.element, text: hoveredText.value }
            : undefined
}))

const writeText = vi.fn<(value: string) => Promise<void>>()

/**
 * The two gestures a grid row answers: a click runs its primary action immediately, a right-click
 * opens its own actions at the pointer. What this pins is mostly the guard rails — the cells that
 * answer for themselves (the checkbox, the chevron, the kebab, a control inside a cell) must not
 * also act on the row.
 *
 * ⚠ These mount the REAL library grid, so they need the gesture seam that ships in
 * `taktik-react-components` — a stale vendored copy of the library fails them.
 */

interface Row {
    id: string
    name: string
}
const rows: Row[] = [
    { id: 'a', name: 'Alpha' },
    { id: 'b', name: 'Bravo' }
]

const actionsColumn = (onEdit = vi.fn()) =>
    rowActionsColumn<Row>({
        label: (row) => `Actions for ${row.name}`,
        items: () => [
            { id: 'edit', name: 'edit', icon: <EditRoundedIcon />, onClick: onEdit },
            { id: 'copy', name: 'copy', icon: <EditRoundedIcon />, onClick: vi.fn() }
        ]
    })

const columns = (withActions: boolean) => [
    { key: 'name', name: 'Name' },
    {
        key: 'link',
        name: 'Link',
        renderCell: () => <button type='button'>Open</button>
    },
    ...(withActions ? [actionsColumn()] : [])
]

interface HostProps {
    selectable?: boolean
    /** Adds the master-detail feature, whose click-to-expand is the row's primary action. */
    expandable?: boolean
    withActions?: boolean
    onRowPrimaryAction?: (row: Row) => void
}

const Host = ({ selectable, expandable, withActions = true, onRowPrimaryAction }: HostProps) => {
    const [selectedIds, setSelectedIds] = useState<string[]>([])
    const [expandedIds, setExpandedIds] = useState<string[]>([])
    return (
        <ThemeProvider theme={lightTheme}>
            <span data-testid='selection'>{selectedIds.join(',')}</span>
            <span data-testid='expansion'>{expandedIds.join(',')}</span>
            <CrudTable<Row>
                columnVisibilityKey='rowGesturesTest'
                rows={rows}
                columns={columns(withActions)}
                selectable={selectable}
                selection={{ mode: 'ids', ids: selectedIds, onChange: setSelectedIds }}
                onRowPrimaryAction={onRowPrimaryAction}
                expandable={
                    expandable
                        ? {
                              expandedIds,
                              onExpandedChange: setExpandedIds,
                              renderDetail: (row: Row) => <span>details of {row.name}</span>,
                              labels: { expand: 'Show details', collapse: 'Hide details' }
                          }
                        : undefined
                }
            />
        </ThemeProvider>
    )
}

/** A drawer-style table: the click opens the record instead of expanding the row (recordings). */
const DrawerHost = () => {
    const [selectedIds, setSelectedIds] = useState<string[]>([])
    const [openedId, setOpenedId] = useState('')
    const cols = columns(true)
    const { gridProps, menu } = useRowGestures<Row>({
        columns: cols,
        onRowPrimaryAction: (row) => setOpenedId(row.id)
    })
    return (
        <ThemeProvider theme={lightTheme}>
            <span data-testid='opened'>{openedId}</span>
            <DataGrid<Row>
                rows={rows}
                columns={cols}
                selectedRows={selectedIds}
                onSelectedRowsChange={setSelectedIds}
                {...gridProps}
            />
            {menu}
        </ThemeProvider>
    )
}

const firstRow = () => screen.getAllByRole('row')[1] as HTMLElement
const cellsOfFirstRow = () => within(firstRow()).getAllByRole('gridcell')
const selection = () => screen.getByTestId('selection').textContent
const expansion = () => screen.getByTestId('expansion').textContent
const opened = () => screen.getByTestId('opened').textContent

const rightClick = async (target: HTMLElement): Promise<void> => {
    await userEvent.pointer({ keys: '[MouseRight]', target })
}

/**
 * Stand in for a mouse-drag selection over `container` (nothing selected when null). jsdom's own
 * Selection is not faithful enough to drive `containsNode` through real Ranges, so the guard's
 * contract is pinned against a stub shaped like the browser's.
 */
const stubSelection = (container: HTMLElement | null): void => {
    vi.spyOn(window, 'getSelection').mockReturnValue({
        isCollapsed: container === null,
        containsNode: (node: Node) => !!container && container.contains(node)
    } as unknown as Selection)
}

beforeEach(() => {
    // No value under the pointer unless a test says otherwise, so nothing is ever armed
    hoveredText.value = undefined
    lastHovered.element = undefined
    writeText.mockReset()
    writeText.mockResolvedValue(undefined)
    Object.assign(navigator, { clipboard: { writeText } })
})

afterEach(() => {
    vi.restoreAllMocks()
})

describe('clicking a row', () => {
    it('expands it immediately', async () => {
        render(<Host expandable />)
        await userEvent.click(screen.getByText('Alpha'))
        expect(expansion()).toBe('a')
        expect(screen.getByText('details of Alpha')).toBeInTheDocument()
    })

    it('opens the record on a drawer-style table', async () => {
        render(<DrawerHost />)
        await userEvent.click(screen.getByText('Alpha'))
        expect(opened()).toBe('a')
    })

    // The same knob through CrudTable, for the day one of its tables shows a record in a drawer
    it('opens the record on a CrudTable given a primary action', async () => {
        const onRowPrimaryAction = vi.fn()
        render(<Host onRowPrimaryAction={onRowPrimaryAction} />)
        await userEvent.click(screen.getByText('Alpha'))
        expect(onRowPrimaryAction).toHaveBeenCalledWith(expect.objectContaining({ id: 'a' }))
    })

    // The checkbox cell already answers a click; acting on the row too would also expand it
    it('leaves the selection cell to the checkbox that lives there', async () => {
        render(<Host expandable />)
        await userEvent.click(cellsOfFirstRow()[0] as HTMLElement)
        expect(expansion()).toBe('')
        expect(selection()).toBe('')
    })

    // The kebab does not fill its cell, so this lands beside the button rather than on it
    it('leaves the row-actions cell alone', async () => {
        render(<Host expandable />)
        const cells = cellsOfFirstRow()
        await userEvent.click(cells[cells.length - 1] as HTMLElement)
        expect(expansion()).toBe('')
    })

    it('leaves a control inside a cell to that control', async () => {
        render(<Host expandable />)
        await userEvent.click(within(firstRow()).getByRole('button', { name: 'Open' }))
        expect(expansion()).toBe('')
    })

    // The chevron is the deliberate, discoverable way in
    it('still expands from the chevron itself', async () => {
        render(<Host expandable />)
        await userEvent.click(within(firstRow()).getByRole('button', { name: 'Show details' }))
        expect(expansion()).toBe('a')
    })

    // The click that ends a text-selection drag must not run the action: expanding rebuilds the
    // row and destroys the selection before the browser's Copy could be reached. fireEvent, not
    // userEvent: the latter simulates the pointer press, which collapses the selection first —
    // in a real drag-to-select the selection exists WHEN the click lands.
    it('leaves a row alone when the click ends a text selection', () => {
        render(<Host expandable />)
        const cell = screen.getByText('Alpha')
        stubSelection(cell)
        fireEvent.click(cell)
        expect(expansion()).toBe('')
    })
})

describe('resting on a row’s text', () => {
    // The dwell is a timer, so this block drives it rather than waiting on it
    beforeEach(() => {
        vi.useFakeTimers()
    })
    afterEach(() => {
        vi.useRealTimers()
    })

    const cue = () => screen.queryByText('Click to copy')
    /** Bring the pointer to rest on `target` and let the dwell run out. */
    const rest = (target: HTMLElement): void => {
        lastHovered.element = target
        fireEvent.mouseOver(target)
        act(() => {
            vi.advanceTimersByTime(COPY_DWELL_MS)
        })
    }
    /** Move the pointer without leaving the element — a slide across one cell. */
    const slideTo = (value: string | undefined): void => {
        hoveredText.value = value
        fireEvent.mouseMove(firstRow())
        act(() => {
            vi.advanceTimersByTime(COPY_DWELL_MS)
        })
    }
    const clickIt = async (target: HTMLElement): Promise<void> => {
        await act(async () => {
            fireEvent.click(target)
        })
    }

    it('arms the line with a hint that says what a click will do', () => {
        hoveredText.value = 'aa:bb:cc:00:11:22'
        render(<Host />)
        rest(screen.getByText('Alpha'))
        expect(cue()).toBeInTheDocument()
    })

    // The line's own cursor is the second cue, and the reason the click may change meaning at all
    it('marks the armed line with the copy cursor, and puts it back on disarm', () => {
        hoveredText.value = 'Alpha'
        render(<Host />)
        const line = screen.getByText('Alpha')
        rest(line)
        expect(line.style.cursor).toBe('copy')
        fireEvent.mouseLeave(firstRow())
        expect(line.style.cursor).toBe('')
    })

    // Passing over a value is not resting on one — a reader scanning a table arms nothing
    it('arms nothing before the dwell is up', () => {
        hoveredText.value = 'Alpha'
        render(<Host />)
        fireEvent.mouseOver(screen.getByText('Alpha'))
        act(() => {
            vi.advanceTimersByTime(COPY_DWELL_MS - 50)
        })
        expect(cue()).not.toBeInTheDocument()
    })

    it('copies the line when the armed click lands, and says so', async () => {
        hoveredText.value = 'aa:bb:cc:00:11:22'
        render(<Host />)
        const line = screen.getByText('Alpha')
        rest(line)
        await clickIt(line)
        expect(writeText).toHaveBeenCalledWith('aa:bb:cc:00:11:22')
        expect(screen.getByRole('status')).toHaveTextContent('Copied to the clipboard')
    })

    // The cue promised a copy, so the click must do exactly that and nothing else
    it('does not run the row’s action on the armed click', async () => {
        hoveredText.value = 'Alpha'
        render(<Host />)
        const line = screen.getByText('Alpha')
        rest(line)
        await clickIt(line)
        expect(selection()).toBe('')
    })

    // …once. The promise is spent, the line disarms, and the next click is the row's again
    it('promises exactly one copy', async () => {
        hoveredText.value = 'Alpha'
        render(<Host />)
        const line = screen.getByText('Alpha')
        rest(line)
        await clickIt(line)
        expect(cue()).not.toBeInTheDocument()
        await clickIt(line)
        expect(writeText).toHaveBeenCalledTimes(1)
        expect(selection()).toBe('a')
    })

    // A click that never waited is an ordinary click
    it('leaves an unarmed click meaning what it always meant', async () => {
        hoveredText.value = 'Alpha'
        render(<Host />)
        const line = screen.getByText('Alpha')
        fireEvent.mouseOver(line)
        await clickIt(line)
        expect(writeText).not.toHaveBeenCalled()
        expect(selection()).toBe('a')
    })

    // The armed line is armed, and its neighbours are not
    it('leaves a click elsewhere in the row to the row', async () => {
        hoveredText.value = 'Alpha'
        render(<Host />)
        rest(screen.getByText('Alpha'))
        await clickIt(cellsOfFirstRow()[1] as HTMLElement)
        expect(writeText).not.toHaveBeenCalled()
    })

    // Padding, a value's empty tail, a header: `hoveredLine` answers nothing and so does the machine
    it('arms nothing where the pointer is not on a value', () => {
        render(<Host />)
        rest(screen.getByText('Alpha'))
        expect(cue()).not.toBeInTheDocument()
    })

    it('arms nothing on a control inside a cell', () => {
        hoveredText.value = 'Open'
        render(<Host />)
        rest(within(firstRow()).getByRole('button', { name: 'Open' }))
        expect(cue()).not.toBeInTheDocument()
    })

    it('arms nothing in the kebab column', () => {
        hoveredText.value = 'Alpha'
        render(<Host />)
        const cells = cellsOfFirstRow()
        rest(cells[cells.length - 1] as HTMLElement)
        expect(cue()).not.toBeInTheDocument()
    })

    it('arms nothing in the checkbox cell', () => {
        hoveredText.value = 'Alpha'
        render(<Host />)
        rest(cellsOfFirstRow()[0] as HTMLElement)
        expect(cue()).not.toBeInTheDocument()
    })

    /**
     * The order that used to break it: the line arms while nothing is selected, then the reader
     * presses and drags across it to take three characters. A move disarms nothing, so the click
     * ending that drag was still the armed one and Ctrl+C came away with the whole line.
     */
    it('leaves the armed click alone when it ends a text selection', async () => {
        hoveredText.value = 'aa:bb:cc:00:11:22'
        render(<Host />)
        const line = screen.getByText('Alpha')
        rest(line)
        expect(cue()).toBeInTheDocument()
        stubSelection(line)
        await clickIt(line)
        expect(writeText).not.toHaveBeenCalled()
        // The promise was never spent, so the line is still armed for a click that means it
        expect(cue()).toBeInTheDocument()
    })

    // Text the reader selected themselves is theirs — the browser's own Copy is that gesture
    it('arms nothing over a selection the reader made', () => {
        hoveredText.value = 'Alpha'
        render(<Host />)
        const line = screen.getByText('Alpha')
        stubSelection(line)
        rest(line)
        expect(cue()).not.toBeInTheDocument()
    })

    it('arms nothing where the browser has no clipboard', () => {
        hoveredText.value = 'Alpha'
        Object.assign(navigator, { clipboard: undefined })
        render(<Host />)
        rest(screen.getByText('Alpha'))
        expect(cue()).not.toBeInTheDocument()
    })

    it('disarms when the pointer leaves the row', () => {
        hoveredText.value = 'Alpha'
        render(<Host />)
        rest(screen.getByText('Alpha'))
        fireEvent.mouseLeave(firstRow())
        expect(cue()).not.toBeInTheDocument()
    })

    // A small move that is still on the same value keeps the arm — and keeps the very same hint, so
    // nothing flickers or re-anchors under a resting hand
    it('stays armed while the pointer moves along the same value', () => {
        hoveredText.value = 'Alpha'
        render(<Host />)
        const line = screen.getByText('Alpha')
        rest(line)
        slideTo('Alpha')
        expect(cue()).toBeInTheDocument()
    })

    /**
     * A value's box spans its whole cell, so sliding from the value onto the blank half of that cell
     * enters and leaves NOTHING. Only re-asking on rest can tell, and it must let go.
     */
    it('disarms when the pointer slides off the glyphs within one cell', () => {
        hoveredText.value = 'Alpha'
        render(<Host />)
        rest(screen.getByText('Alpha'))
        expect(cue()).toBeInTheDocument()
        slideTo(undefined)
        expect(cue()).not.toBeInTheDocument()
    })

    // …and the other way round: sliding from the blank half onto the value arms, with no entry event
    it('arms when the pointer slides onto the glyphs within one cell', () => {
        render(<Host />)
        rest(screen.getByText('Alpha'))
        expect(cue()).not.toBeInTheDocument()
        slideTo('Alpha')
        expect(cue()).toBeInTheDocument()
    })

    // The rows move out from under a pointer that has not, so a standing promise would be about
    // whatever slid beneath it
    it('disarms on a scroll', () => {
        hoveredText.value = 'Alpha'
        render(<Host />)
        rest(screen.getByText('Alpha'))
        act(() => {
            fireEvent.scroll(window)
        })
        expect(cue()).not.toBeInTheDocument()
    })

    // A press that became a drag was never a click — and the drag must not be held back by any of this
    it('disarms when a drag starts', () => {
        hoveredText.value = 'Alpha'
        render(<Host />)
        const line = screen.getByText('Alpha')
        rest(line)
        fireEvent.dragStart(line)
        expect(cue()).not.toBeInTheDocument()
    })

    it('says nothing when the clipboard refuses', async () => {
        hoveredText.value = 'Alpha'
        writeText.mockRejectedValue(new Error('denied'))
        render(<Host />)
        const line = screen.getByText('Alpha')
        rest(line)
        await clickIt(line)
        expect(writeText).toHaveBeenCalled()
        expect(screen.queryByRole('status')).not.toBeInTheDocument()
    })
})

describe('right-clicking a row', () => {
    it('opens that row’s actions where the pointer is', async () => {
        render(<Host />)
        await rightClick(screen.getByText('Alpha'))

        const menu = await screen.findByRole('menu')
        expect(within(menu).getByRole('menuitem', { name: 'edit' })).toBeInTheDocument()
        expect(within(menu).getByRole('menuitem', { name: 'copy' })).toBeInTheDocument()
    })

    it('runs the action the menu names', async () => {
        render(<DrawerHost />)
        await rightClick(screen.getByText('Alpha'))
        await userEvent.click(await screen.findByRole('menuitem', { name: 'edit' }))
        expect(screen.queryByRole('menu')).not.toBeInTheDocument()
    })

    // Nothing to offer, so the browser's own menu is what the user gets — as anywhere else on the page
    it('leaves a table without row actions alone', async () => {
        render(<Host withActions={false} />)
        await rightClick(screen.getByText('Alpha'))
        expect(screen.queryByRole('menu')).not.toBeInTheDocument()
    })

    it('leaves the cells that answer for themselves alone', async () => {
        render(<Host />)
        await rightClick(cellsOfFirstRow()[0] as HTMLElement)
        expect(screen.queryByRole('menu')).not.toBeInTheDocument()
    })

    // A right-click is not a row gesture on the column that already carries the same menu
    it('leaves the row-actions cell to its kebab', async () => {
        render(<Host />)
        const cells = cellsOfFirstRow()
        await rightClick(cells[cells.length - 1] as HTMLElement)
        expect(screen.queryByRole('menu')).not.toBeInTheDocument()
    })

    // Right-clicking SELECTED text is the user reaching for the browser's Copy — the row's menu
    // stands aside (Olivier, 2026-08-14). fireEvent: a real right-click on a selection keeps it,
    // which userEvent's simulated press would not.
    it('leaves selected text to the browser menu', () => {
        render(<Host />)
        const cell = screen.getByText('Alpha')
        stubSelection(cell)
        fireEvent.contextMenu(cell)
        expect(screen.queryByRole('menu')).not.toBeInTheDocument()
    })

    // …but only where the selection actually is: a stale selection elsewhere must not swallow
    // the gesture on the row being right-clicked
    it('still opens the row menu when the selection is elsewhere', async () => {
        render(<Host />)
        stubSelection(screen.getByText('Bravo'))
        fireEvent.contextMenu(screen.getByText('Alpha'))
        expect(await screen.findByRole('menu')).toBeInTheDocument()
    })
})
