import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import userEvent, { type UserEvent } from '@testing-library/user-event'
import { useState, type ReactNode, type RefObject } from 'react'
import { ThemeProvider } from 'styled-components'
import { describe, expect, it, vi, type Mock } from 'vitest'
import { defaultTableTheme as lightTheme } from '../../../theme/tableTheme'
import { renderWithTable } from '../../../testUtils/renderWithTable'
import { required } from '../../../testUtils/required'
import { asTextFilter, asTextTerm, QUICK_SEARCH_KEY, type FilterValue } from '../../../filterValue'
import type { FilterDraft, ValueSuggestions } from '../../../valueSuggestions'
import {
    anyFilterActive,
    asRange,
    asValues,
    FilterBar,
    FilterDefinition,
    isFilterValueActive,
    PinnedFilter,
    seedFilters,
    toggleValue
} from './FilterBar'

/**
 * The open chip's own text field. It is a `combobox` rather than a bare textbox: it drives the list
 * of values offered under it, exactly as the cross-column type-ahead above does.
 */
const chipEditor = (): HTMLElement => screen.getByRole('combobox', { name: /^Edit the .+ filter$/ })

const DEFINITIONS: FilterDefinition[] = [
    { key: 'name', label: 'Name' },
    { key: 'channel', label: 'Channel' },
    {
        key: 'type',
        label: 'Type',
        kind: 'select',
        options: [
            { value: 'OTT', label: 'OTT' },
            { value: 'FILE', label: 'FILE' }
        ]
    },
    { key: 'duration', label: 'Duration', kind: 'range', rangeType: 'number' }
]

// A tiny controlled host mirrors how a grid drives the bar (values in parent state).
const Host = ({
    initial = {},
    definitions = DEFINITIONS,
    primaryKey,
    pinned,
    resettable,
    suggestions,
    onDraftChange
}: {
    initial?: Record<string, FilterValue | undefined>
    definitions?: FilterDefinition[]
    primaryKey?: string
    pinned?: PinnedFilter[]
    resettable?: boolean
    suggestions?: ValueSuggestions
    onDraftChange?: (draft: FilterDraft) => void
}): ReactNode => {
    const [values, setValues] = useState<Record<string, FilterValue | undefined>>(initial)
    return (
        <ThemeProvider theme={lightTheme}>
            <FilterBar
                definitions={definitions}
                rawValues={values}
                onChange={(key, value) => setValues((prev) => ({ ...prev, [key]: value }))}
                primaryKey={primaryKey}
                pinned={pinned}
                onReset={resettable ? () => setValues({}) : undefined}
                suggestions={suggestions}
                onDraftChange={onDraftChange}
            />
        </ThemeProvider>
    )
}

/** The two text columns of DEFINITIONS, declared as fields whose values the page can offer. */
const SUGGESTABLE: FilterDefinition[] = [
    { key: 'name', label: 'Name', suggestable: true },
    { key: 'channel', label: 'Channel', suggestable: true },
    required(DEFINITIONS[2], 'the Type definition'),
    required(DEFINITIONS[3], 'the Duration definition')
]

/**
 * One value row, by the id it carries. The row's TEXT is the interpolated sentence, and the test
 * i18n hands back the bare key — so the id is where the value is legible here. The id is prefixed
 * by the BAR's own (two bars are mounted at once by design) and its whitespace is collapsed, so the
 * row is found by that suffix.
 */
const valueRow = (key: string, value: string): HTMLElement => {
    const suffix = `${key}-value-${value.replace(/\s+/g, '_')}`
    const row = Array.from(document.querySelectorAll('[role="option"]')).find((node) =>
        node.id.endsWith(suffix)
    )
    return required(row as HTMLElement | undefined, `${key} row for ${value}`)
}

/** What a page hands back for the cross-column type-ahead. */
const offered = (
    values: ValueSuggestions['values'],
    extra: Partial<ValueSuggestions> = {}
): ValueSuggestions => ({ term: 'rtbf', values, loading: false, ...extra })

describe('FilterBar', () => {
    it('renders a chip per active value and offers only inactive fields in the add menu', async () => {
        const user = userEvent.setup()
        render(<Host initial={{ name: 'news' }} />)

        expect(screen.getByText('Name')).toBeInTheDocument()
        expect(screen.getByText('news')).toBeInTheDocument()

        await user.click(screen.getByRole('button', { name: 'Add filter' }))
        // Channel is inactive → offered; Name is active → not in the menu
        expect(screen.getByRole('menuitem', { name: 'Channel' })).toBeInTheDocument()
        expect(screen.queryByRole('menuitem', { name: 'Name' })).not.toBeInTheDocument()
    })

    it('adds a filter from the menu and opens it for typing', async () => {
        const user = userEvent.setup()
        render(<Host />)

        await user.click(screen.getByRole('button', { name: 'Add filter' }))
        await user.click(screen.getByRole('menuitem', { name: 'Channel' }))

        const input = chipEditor()
        await user.type(input, 'RTBF')
        expect(screen.getByDisplayValue('RTBF')).toBeInTheDocument()
    })

    it('removing a freshly-added empty filter on blur (no value committed)', async () => {
        const user = userEvent.setup()
        render(<Host />)

        await user.click(screen.getByRole('button', { name: 'Add filter' }))
        await user.click(screen.getByRole('menuitem', { name: 'Channel' }))
        expect(chipEditor()).toBeInTheDocument()

        fireEvent.blur(chipEditor())
        // empty commit removes the chip → the field is offered again
        await user.click(screen.getByRole('button', { name: 'Add filter' }))
        expect(screen.getByRole('menuitem', { name: 'Channel' })).toBeInTheDocument()
    })

    it('the chip ✕ clears the value', async () => {
        const user = userEvent.setup()
        render(<Host initial={{ channel: 'RTBF' }} />)

        expect(screen.getByText('RTBF')).toBeInTheDocument()
        await user.click(screen.getByRole('button', { name: /^Remove the .+ filter$/ }))
        expect(screen.queryByText('RTBF')).not.toBeInTheDocument()
    })

    it('a chip opens for editing from the keyboard', async () => {
        const user = userEvent.setup()
        render(<Host initial={{ channel: 'RTBF' }} />)

        const chip = screen.getByRole('button', { name: /^Edit the .+ filter$/ })
        chip.focus()
        await user.keyboard('{Enter}')
        expect(screen.getByDisplayValue('RTBF')).toBeInTheDocument()
    })

    it('Escape closes the editor without dropping a committed value', async () => {
        const user = userEvent.setup()
        render(<Host initial={{ channel: 'RTBF' }} />)

        await user.click(screen.getByRole('button', { name: /^Edit the .+ filter$/ }))
        await user.keyboard('{Escape}')
        expect(screen.getByText('RTBF')).toBeInTheDocument()
    })

    it('a select filter offers its options and applies the chosen one', async () => {
        const user = userEvent.setup()
        render(<Host />)

        await user.click(screen.getByRole('button', { name: 'Add filter' }))
        await user.click(screen.getByRole('menuitem', { name: 'Type' }))
        // the options menu opens on add; its options are toggles, so they carry the checkbox role
        await user.click(screen.getByRole('menuitemcheckbox', { name: 'FILE' }))
        await user.keyboard('{Escape}')

        expect(screen.getByText('Type')).toBeInTheDocument()
        expect(screen.getByText('FILE')).toBeInTheDocument()
    })

    // "type = tizen OR webos" is the question a single value could not ask. Two clicks, not four:
    // the menu stays open so a second value costs one more click rather than a reopen.
    it('a select filter accumulates the values it is toggled onto', async () => {
        const user = userEvent.setup()
        render(<Host />)

        await user.click(screen.getByRole('button', { name: 'Add filter' }))
        await user.click(screen.getByRole('menuitem', { name: 'Type' }))
        await user.click(screen.getByRole('menuitemcheckbox', { name: 'OTT' }))
        // the menu is still open, so the second value is one click away
        await user.click(screen.getByRole('menuitemcheckbox', { name: 'FILE' }))
        expect(screen.getByRole('menuitemcheckbox', { name: 'OTT' })).toHaveAttribute(
            'aria-checked',
            'true'
        )

        await user.keyboard('{Escape}')
        expect(screen.getByText('OTT · FILE')).toBeInTheDocument()
    })

    it('toggling a chosen value off takes it back out of the set', async () => {
        const user = userEvent.setup()
        render(<Host initial={{ type: ['OTT', 'FILE'] }} />)

        await user.click(screen.getByRole('button', { name: /^Edit the .+ filter$/ }))
        await user.click(screen.getByRole('menuitemcheckbox', { name: 'OTT' }))
        await user.keyboard('{Escape}')

        expect(screen.getByText('FILE')).toBeInTheDocument()
        expect(screen.queryByText('OTT · FILE')).not.toBeInTheDocument()
    })

    // Without a way back to "no value", comparing two options means removing the chip and adding
    // it again — the neutral state exists (an empty set) but the menu never offered it.
    it('a select filter can go back to matching anything without being removed', async () => {
        const user = userEvent.setup()
        render(<Host initial={{ type: ['FILE'] }} />)
        expect(screen.getByText('FILE')).toBeInTheDocument()

        // Any is the one entry that closes the menu: it says "done, and I want everything"
        await user.click(screen.getByRole('button', { name: /^Edit the .+ filter$/ }))
        await user.click(screen.getByRole('menuitem', { name: 'Any' }))

        // the chip is still there, and now says it narrows nothing
        expect(screen.getByText('Type')).toBeInTheDocument()
        expect(screen.getByText('Any')).toBeInTheDocument()
        expect(screen.queryByText('FILE')).not.toBeInTheDocument()
        expect(screen.queryByRole('menuitemcheckbox')).not.toBeInTheDocument()
    })

    // A page may hand a select chip a single value rather than a set (a seed from elsewhere, a
    // restored setting); it has to read as a set of one rather than as an unlabelled value
    it('reads a bare string on a select chip as a set of one', () => {
        render(<Host initial={{ type: 'FILE' }} />)
        expect(screen.getByText('FILE')).toBeInTheDocument()
    })

    it('shows a seeded select as matching anything rather than as an unset value', () => {
        render(<Host initial={seedFilters(['type'], DEFINITIONS)} />)
        expect(screen.getByText('Any')).toBeInTheDocument()
    })

    // A chip whose option set is empty — a zone chip in an organisation with no zones — could only
    // ever say "Any", so it is not on offer at all
    const zoneDefinition = (options: { value: string; label: string }[]): FilterDefinition[] => [
        ...DEFINITIONS,
        { key: 'zone', label: 'Zone', kind: 'select', options }
    ]

    it('does not offer a select field whose options are empty', async () => {
        const user = userEvent.setup()
        render(<Host definitions={zoneDefinition([])} />)

        await user.click(screen.getByRole('button', { name: 'Add filter' }))
        expect(screen.queryByRole('menuitem', { name: 'Zone' })).not.toBeInTheDocument()
        // the other select is untouched, so this is not the menu failing to render
        expect(screen.getByRole('menuitem', { name: 'Type' })).toBeInTheDocument()
    })

    it('offers the same select field as soon as it has an option', async () => {
        const user = userEvent.setup()
        render(<Host definitions={zoneDefinition([{ value: 'z1', label: 'Room 101' }])} />)

        await user.click(screen.getByRole('button', { name: 'Add filter' }))
        expect(screen.getByRole('menuitem', { name: 'Zone' })).toBeInTheDocument()
    })

    // Withdrawing an offer is not withdrawing a filter: a chip on the bar keeps filtering even if
    // its options stop arriving, or a link's filter state would vanish under the user
    it('keeps a chip whose options went empty on the bar', () => {
        render(<Host definitions={zoneDefinition([])} initial={{ zone: ['z1'] }} />)
        expect(screen.getByText('Zone')).toBeInTheDocument()
        expect(screen.getByText('z1')).toBeInTheDocument()
    })

    // An empty chip is normally dropped when its editor closes, which would take "Any" with it on
    // the next Esc — undoing the round trip the option exists to remove
    it('keeps a chip set to Any when its editor is closed again', async () => {
        const user = userEvent.setup()
        render(<Host initial={{ type: ['FILE'] }} />)

        await user.click(screen.getByRole('button', { name: /^Edit the .+ filter$/ }))
        await user.click(screen.getByRole('menuitem', { name: 'Any' }))
        // reopen and dismiss without choosing anything
        await user.click(screen.getByRole('button', { name: /^Edit the .+ filter$/ }))
        await user.keyboard('{Escape}')

        expect(screen.getByText('Type')).toBeInTheDocument()
        expect(screen.getByText('Any')).toBeInTheDocument()
    })
})

// A just-added chip is seeded empty ('' / {}) and stays rendered, but must not count as an active
// filter — otherwise an empty table wrongly reads "no results match your filters".
describe('type-ahead', () => {
    const typeAhead = (): HTMLElement => screen.getByRole('combobox')

    it('ranks a matching select option above the text columns, which a plain cap would bury', async () => {
        const user = userEvent.setup()
        render(<Host />)

        // two text columns come before Type in DEFINITIONS, so column order alone would hide this
        await user.type(typeAhead(), 'OTT')
        expect(screen.getAllByRole('option')[0]).toHaveTextContent('Type: OTT')
    })

    it('offers a column whose own name matches, so a range is reachable by typing', async () => {
        const user = userEvent.setup()
        render(<Host />)

        await user.type(typeAhead(), 'Durat')
        expect(screen.getByRole('option', { name: 'Duration…' })).toBeInTheDocument()
    })

    // Suggesting a column with no options opens an empty menu, which is the same furniture the
    // "Add filter" menu leaves out
    it('does not suggest a select column whose options are empty', async () => {
        const user = userEvent.setup()
        render(
            <Host
                definitions={[
                    ...DEFINITIONS,
                    { key: 'zone', label: 'Zone', kind: 'select', options: [] }
                ]}
            />
        )

        await user.type(typeAhead(), 'Zon')
        expect(screen.queryByRole('option', { name: 'Zone…' })).not.toBeInTheDocument()
    })

    /**
     * The per-column "contains" rank is GONE (B-5 S3, ruled 2026-08-24). Only the PRIMARY column
     * offers one: on a table with twelve text columns that rank could fill the whole list with lines
     * all saying the same word, and a value row does its job better on every axis.
     */
    it('offers the primary column its "contains" line and no other text column', async () => {
        const user = userEvent.setup()
        render(<Host primaryKey='name' />)

        await user.type(typeAhead(), 'rtbf')
        const suggestions = screen.getAllByRole('option', { name: /contains/ })
        expect(suggestions).toHaveLength(1)
        expect(suggestions[0]?.id).toMatch(/-name-text$/)
    })

    // with no primary column declared there is nothing to offer for a term that names no column
    it('offers nothing at all where a table declares no primary column', async () => {
        const user = userEvent.setup()
        render(<Host />)

        await user.type(typeAhead(), 'rtbf')
        expect(screen.queryByRole('option')).not.toBeInTheDocument()
    })

    it('Enter commits the primary column, so type-then-Enter needs no column pick', async () => {
        const user = userEvent.setup()
        render(<Host primaryKey='channel' />)

        await user.type(typeAhead(), 'rtbf{Enter}')
        // the Channel chip now carries the typed text, and the input is cleared
        expect(screen.getByText('Channel')).toBeInTheDocument()
        expect(screen.getByText('rtbf')).toBeInTheDocument()
        expect(typeAhead()).toHaveValue('')
    })

    it('suggests a select option when its label matches, and commits the option value', async () => {
        const user = userEvent.setup()
        render(<Host />)

        await user.type(typeAhead(), 'FILE')
        await user.click(screen.getByRole('option', { name: 'Type: FILE' }))
        expect(screen.getByText('Type')).toBeInTheDocument()
        expect(screen.getByText('FILE')).toBeInTheDocument()
    })

    // Typing a second option reads as "either", not as replacing the first — the same accumulation
    // the chip's own menu does, so the two ways of choosing agree
    it('a matched option joins what the chip already narrows to', async () => {
        const user = userEvent.setup()
        render(<Host initial={{ type: ['OTT'] }} />)

        await user.type(typeAhead(), 'FILE')
        await user.click(screen.getByRole('option', { name: 'Type: FILE' }))
        expect(screen.getByText('OTT · FILE')).toBeInTheDocument()
    })

    it('shows no suggestions for an empty query', () => {
        render(<Host />)
        expect(screen.queryByRole('option')).not.toBeInTheDocument()
    })

    it('arrow keys move the commit target', async () => {
        const user = userEvent.setup()
        render(
            <Host
                definitions={SUGGESTABLE}
                primaryKey='name'
                suggestions={offered([{ key: 'channel', value: 'rtbf 1', count: 1 }])}
            />
        )

        await user.type(typeAhead(), 'rtbf')
        await user.keyboard('{ArrowDown}{Enter}')
        // the second line is the offered VALUE, which commits its own column
        expect(screen.getByText('Channel')).toBeInTheDocument()
        expect(screen.getByText('rtbf 1')).toBeInTheDocument()
        expect(screen.queryByText('Name')).not.toBeInTheDocument()
    })

    /**
     * A GHOST hover must not move the commit target. Chromium re-dispatches hover on the element that
     * appears under a stationary pointer, so the list rendered by a keystroke fired an enter on
     * whichever line landed under the mouse — AFTER the keystroke had reset the highlight — and Enter
     * committed a column the reader never picked (measured on the device list: "Location is not
     * <version>" where the selected line read "Quick search does not contain <version>").
     */
    it('a hover with no pointer movement behind it does not move what Enter commits', async () => {
        const user = userEvent.setup()
        render(
            <Host
                definitions={SUGGESTABLE}
                primaryKey='name'
                suggestions={offered([{ key: 'channel', value: 'rtbf 1', count: 1 }])}
            />
        )

        await user.type(typeAhead(), 'rtbf')
        const [first, second] = screen.getAllByRole('option')
        expect(second).toBeDefined()
        // the ghost: an enter event with no mousemove, exactly as a relayout dispatches it
        if (second) fireEvent.mouseEnter(second)

        // the list still says the first line is the one, and Enter agrees with it
        expect(first).toHaveAttribute('aria-selected', 'true')
        expect(second).toHaveAttribute('aria-selected', 'false')

        await user.keyboard('{Enter}')
        expect(screen.getByText('Name')).toBeInTheDocument()
        expect(screen.queryByText('Channel')).not.toBeInTheDocument()
    })

    // A genuine hover still picks its line — the guard is about movement, not about the mouse
    it('a real pointer move over a line makes it the commit target', async () => {
        const user = userEvent.setup()
        render(
            <Host
                definitions={SUGGESTABLE}
                primaryKey='name'
                suggestions={offered([{ key: 'channel', value: 'rtbf 1', count: 1 }])}
            />
        )

        await user.type(typeAhead(), 'rtbf')
        const [, second] = screen.getAllByRole('option')
        expect(second).toBeDefined()
        if (second) fireEvent.mouseMove(second)
        expect(second).toHaveAttribute('aria-selected', 'true')

        await user.keyboard('{Enter}')
        expect(screen.getByText('Channel')).toBeInTheDocument()
        expect(screen.getByText('rtbf 1')).toBeInTheDocument()
        expect(screen.queryByText('Name')).not.toBeInTheDocument()
    })

    it('reopening an already-valued chip keeps its value', async () => {
        const user = userEvent.setup()
        render(<Host initial={{ duration: { from: 2, to: 4 } }} />)

        await user.type(typeAhead(), 'Durat')
        await user.click(screen.getByRole('option', { name: 'Duration…' }))
        // the range editor opens on the existing bounds rather than wiping them
        expect(screen.getByDisplayValue('2')).toBeInTheDocument()
        expect(screen.getByDisplayValue('4')).toBeInTheDocument()
    })

    it('a seeded chip survives being opened and dismissed', async () => {
        const user = userEvent.setup()
        render(<Host initial={seedFilters(['channel'])} />)

        await user.click(screen.getByRole('button', { name: /^Edit the .+ filter$/ }))
        await user.keyboard('{Escape}')
        // a just-added empty chip is dropped here; a seeded one is part of the table's layout
        expect(screen.getByText('Channel')).toBeInTheDocument()
    })
})

/**
 * A host listens for Escape too — a details panel beside the grid closes on it. A key this bar
 * ANSWERS is spent here; one it does not answer travels on.
 */
describe('Escape', () => {
    const hostEscapes = (): Mock => {
        const heard = vi.fn()
        render(
            <div
                onKeyDown={(event) => {
                    if (event.key === 'Escape') heard()
                }}>
                <Host initial={seedFilters(['channel'])} />
            </div>
        )
        return heard
    }
    const typeAhead = (): HTMLElement => screen.getAllByRole('combobox')[0] as HTMLElement

    it('is kept by the type-ahead while it holds a draft', async () => {
        const user = userEvent.setup()
        const heard = hostEscapes()

        await user.type(typeAhead(), 'rtbf')
        await user.keyboard('{Escape}')

        expect(heard).not.toHaveBeenCalled()
    })

    it('travels on from an empty type-ahead', async () => {
        const user = userEvent.setup()
        const heard = hostEscapes()

        await user.click(typeAhead())
        await user.keyboard('{Escape}')

        expect(heard).toHaveBeenCalled()
    })

    it('is kept by an open chip editor, which it closes', async () => {
        const user = userEvent.setup()
        const heard = hostEscapes()

        await user.click(screen.getByRole('button', { name: /^Edit the .+ filter$/ }))
        await user.keyboard('{Escape}')

        expect(heard).not.toHaveBeenCalled()
        expect(screen.queryByRole('combobox', { name: /^Edit the .+ filter$/ })).toBeNull()
    })
})

/**
 * The VALUE rows (B-5 S3): the values the page's own fields actually hold for what is being typed.
 * The bar renders what the page hands it and asks for nothing itself — the page owns the request.
 */
describe('value suggestions', () => {
    const typeAhead = (): HTMLElement => screen.getByRole('combobox')

    it('offers the values under the primary column, naming the field each belongs to', async () => {
        const user = userEvent.setup()
        render(
            <Host
                definitions={SUGGESTABLE}
                primaryKey='name'
                suggestions={offered([
                    { key: 'channel', value: 'rtbf 1', count: 4 },
                    { key: 'name', value: 'rtbf news', count: 1 }
                ])}
            />
        )

        await user.type(typeAhead(), 'rtbf')
        const rows = screen.getAllByRole('option')
        // rank 1 keeps the top: it is the only line that can search for a term matching nothing yet
        expect(rows[0]?.id).toMatch(/-name-text$/)
        expect(rows[1]?.id).toMatch(/-channel-value-rtbf_1$/)
        expect(rows[1]).toHaveTextContent(/ is "/)
        expect(rows[2]?.id).toMatch(/-name-value-rtbf_news$/)
    })

    // the count is the ranking signal, and it says nothing on a value carried by one record
    it('prints the count only past one', async () => {
        const user = userEvent.setup()
        render(
            <Host
                definitions={SUGGESTABLE}
                primaryKey='name'
                suggestions={offered([
                    { key: 'channel', value: 'rtbf 1', count: 4 },
                    { key: 'name', value: 'rtbf news', count: 1 }
                ])}
            />
        )

        await user.type(typeAhead(), 'rtbf')
        expect(valueRow('channel', 'rtbf 1')).toHaveTextContent('4')
        expect(valueRow('name', 'rtbf news')).not.toHaveTextContent('1')
    })

    /**
     * Picking a value commits THAT value, not a substring of it. `*rtbf 1*` would also find
     * `rtbf 10`, which is the lie a reader notices the first time two values share a prefix — so the
     * chip carries the exact flag, and says "is" to show it holds a whole value.
     */
    it('commits the exact value the reader picked', async () => {
        const user = userEvent.setup()
        render(
            <Host
                definitions={SUGGESTABLE}
                primaryKey='name'
                suggestions={offered([{ key: 'channel', value: 'rtbf 1', count: 4 }])}
            />
        )

        await user.type(typeAhead(), 'rtbf')
        fireEvent.mouseDown(valueRow('channel', 'rtbf 1'))

        expect(screen.getByText('Channel')).toBeInTheDocument()
        expect(screen.getByText('is')).toBeInTheDocument()
        expect(screen.getByText('rtbf 1')).toBeInTheDocument()
        expect(typeAhead()).toHaveValue('')
    })

    // the typed `!` and the picked value compose: "Channel is not rtbf 1"
    it('commits an excluding exact chip for a negated query', async () => {
        const user = userEvent.setup()
        render(
            <Host
                definitions={SUGGESTABLE}
                primaryKey='name'
                suggestions={offered([{ key: 'channel', value: 'rtbf 1', count: 4 }])}
            />
        )

        await user.type(typeAhead(), '!rtbf')
        const row = valueRow('channel', 'rtbf 1')
        expect(row).toHaveTextContent(/ is not "/)
        fireEvent.mouseDown(row)

        expect(screen.getByText('is not')).toBeInTheDocument()
        expect(screen.getByText('rtbf 1')).toBeInTheDocument()
    })

    // a value for a field the bar does not know is not a row: the label a row needs comes from the
    // definitions, and a page whose chips changed under a standing answer must not crash
    it('ignores a value whose field is not on the bar', async () => {
        const user = userEvent.setup()
        render(
            <Host
                definitions={SUGGESTABLE}
                primaryKey='name'
                suggestions={offered([{ key: 'gone', value: 'rtbf 1', count: 4 }])}
            />
        )

        await user.type(typeAhead(), 'rtbf')
        expect(screen.getAllByRole('option')).toHaveLength(1)
    })

    // a row rather than a spinner in the field, so the list does not jump as the answers land
    it('says it is still asking while nothing has arrived', async () => {
        const user = userEvent.setup()
        render(
            <Host
                definitions={SUGGESTABLE}
                primaryKey='name'
                suggestions={offered([], { loading: true })}
            />
        )

        await user.type(typeAhead(), 'rtbf')
        expect(screen.getByText('Searching…')).toBeInTheDocument()
    })

    /**
     * ⚠ The report is DEBOUNCED, and the timer is the bar's own: the live value stays local so typing
     * runs at 60fps, and the page — a grid, a band, a rail — re-renders once the typing settles
     * rather than once per letter. It is also the only timer in the chain, so the page's read takes
     * this value as it stands.
     */
    it('reports what is being typed, once the typing settles', async () => {
        const user = userEvent.setup()
        const drafts: FilterDraft[] = []
        render(
            <Host
                definitions={SUGGESTABLE}
                primaryKey='name'
                onDraftChange={(draft) => drafts.push(draft)}
            />
        )

        await user.type(typeAhead(), 'rt')
        // nothing per keystroke: the first report is the empty draft the bar mounted with
        expect(drafts.at(-1)).toEqual({ key: undefined, term: '' })
        await waitFor(() => expect(drafts.at(-1)).toEqual({ key: undefined, term: 'rt' }))
        // one settled report, not one per letter
        expect(drafts.filter((draft) => draft.term === 'r')).toHaveLength(0)
    })

    describe('under an open chip', () => {
        const chipDraft = async (
            initial: Record<string, FilterValue>
        ): Promise<{ user: UserEvent; drafts: FilterDraft[] }> => {
            const user = userEvent.setup()
            const drafts: FilterDraft[] = []
            render(
                <Host
                    definitions={SUGGESTABLE}
                    initial={initial}
                    onDraftChange={(draft) => drafts.push(draft)}
                />
            )
            await user.click(screen.getByRole('button', { name: /^Edit the .+ filter$/ }))
            return { user, drafts }
        }

        // Olivier's own repro: typing 43 in the Model chip should offer 43um…
        it('reports the chip it belongs to, so the page scopes the read to that field', async () => {
            const { user, drafts } = await chipDraft({ channel: 'rt' })
            await user.type(chipEditor(), 'b')
            await waitFor(() => expect(drafts.at(-1)).toEqual({ key: 'channel', term: 'rtb' }))
        })

        // a chip whose values the page cannot offer asks nothing at all
        it('reports no chip for a field that is not suggestable', async () => {
            const user = userEvent.setup()
            const drafts: FilterDraft[] = []
            render(<Host initial={{ channel: 'rt' }} onDraftChange={(d) => drafts.push(d)} />)
            await user.click(screen.getByRole('button', { name: /^Edit the .+ filter$/ }))
            await waitFor(() => expect(drafts.length).toBeGreaterThan(0))
            expect(drafts.at(-1)?.key).toBeUndefined()
        })

        it('offers the field-scoped values and sets the chip to the one picked', async () => {
            const user = userEvent.setup()
            render(
                <Host
                    definitions={SUGGESTABLE}
                    initial={{ channel: 'rt' }}
                    suggestions={{
                        term: 'rt',
                        key: 'channel',
                        values: [{ value: 'rtbf 1', count: 4 }].map((v) => ({
                            key: 'channel',
                            ...v
                        })),
                        loading: false
                    }}
                />
            )

            await user.click(screen.getByRole('button', { name: /^Edit the .+ filter$/ }))
            // the value alone: the chip beside it already names the field
            const row = screen.getByRole('option')
            expect(row).toHaveTextContent('4')
            fireEvent.mouseDown(row)

            expect(screen.getByText('is')).toBeInTheDocument()
            expect(screen.getByText('rtbf 1')).toBeInTheDocument()
        })

        // the answer names the chip it is for, so an answer for another chip is not rendered
        it('does not show one chip values that answer another', async () => {
            const user = userEvent.setup()
            render(
                <Host
                    definitions={SUGGESTABLE}
                    initial={{ channel: 'rt' }}
                    suggestions={{
                        term: 'rt',
                        key: 'name',
                        values: [{ key: 'name', value: 'rtbf 1', count: 4 }],
                        loading: false
                    }}
                />
            )

            await user.click(screen.getByRole('button', { name: /^Edit the .+ filter$/ }))
            expect(screen.queryByRole('option')).not.toBeInTheDocument()
        })

        // Enter still means "I am done" until the reader steps into the list with the arrows
        it('keeps Enter closing the editor until a value is highlighted', async () => {
            const user = userEvent.setup()
            render(
                <Host
                    definitions={SUGGESTABLE}
                    initial={{ channel: 'rt' }}
                    suggestions={{
                        term: 'rt',
                        key: 'channel',
                        values: [{ key: 'channel', value: 'rtbf 1', count: 4 }],
                        loading: false
                    }}
                />
            )

            await user.click(screen.getByRole('button', { name: /^Edit the .+ filter$/ }))
            await user.keyboard('{Enter}')
            // the typed value stands, as a substring match: nothing was picked
            expect(screen.getByText('rt')).toBeInTheDocument()
            expect(screen.queryByText('is')).not.toBeInTheDocument()

            await user.click(screen.getByRole('button', { name: /^Edit the .+ filter$/ }))
            await user.keyboard('{ArrowDown}{Enter}')
            expect(screen.getByText('rtbf 1')).toBeInTheDocument()
            expect(screen.getByText('is')).toBeInTheDocument()
        })

        // typing again makes the value the reader's own, so it goes back to being a substring
        it('drops the exactness as soon as the reader edits the value', async () => {
            const user = userEvent.setup()
            render(
                <Host
                    definitions={SUGGESTABLE}
                    initial={{ channel: { text: 'rtbf 1', exact: true } }}
                />
            )

            expect(screen.getByText('is')).toBeInTheDocument()
            await user.click(screen.getByRole('button', { name: /^Edit the .+ filter$/ }))
            await user.type(chipEditor(), '0')
            await user.keyboard('{Enter}')
            expect(screen.getByText('rtbf 10')).toBeInTheDocument()
            expect(screen.queryByText('is')).not.toBeInTheDocument()
        })

        // flipping the operator keeps it, though: "not exactly this" is a state the reader asked for
        it('keeps the exactness when the operator is flipped', async () => {
            const user = userEvent.setup()
            render(
                <Host
                    definitions={SUGGESTABLE}
                    initial={{ channel: { text: 'rtbf 1', exact: true } }}
                />
            )

            await user.click(screen.getByRole('button', { name: /^Edit the .+ filter$/ }))
            fireEvent.mouseDown(screen.getByRole('button', { name: 'is' }))
            await user.keyboard('{Escape}')
            expect(screen.getByText('is not')).toBeInTheDocument()
            expect(screen.getByText('rtbf 1')).toBeInTheDocument()
        })
    })
})

// Negation is the chip's own state — visible, editable and removable like any other — and the typed
// `!` is only the accelerant that commits it (B-5 S2).
describe('exclusion', () => {
    const typeAhead = (): HTMLElement => screen.getByRole('combobox')
    const operator = (): HTMLElement => screen.getByRole('button', { name: 'is' })
    const notOperator = (): HTMLElement => screen.getByRole('button', { name: 'is not' })

    it('writes "is not" on an excluding chip, and nothing on a matching one', () => {
        render(<Host initial={{ name: { text: 'news', negated: true } }} />)
        expect(screen.getByText('is not')).toBeInTheDocument()
        expect(screen.getByText('news')).toBeInTheDocument()
    })

    it('offers the operator as a toggle while the chip is open, and flips it both ways', async () => {
        const user = userEvent.setup()
        render(<Host initial={{ name: 'news' }} />)

        await user.click(screen.getByRole('button', { name: /^Edit the .+ filter$/ }))
        expect(operator()).toHaveAttribute('aria-pressed', 'false')

        // mousedown, not click: the input's blur would otherwise close the editor first
        fireEvent.mouseDown(operator())
        expect(notOperator()).toHaveAttribute('aria-pressed', 'true')
        // the input keeps the value and the focus, so the reader can go on typing
        expect(screen.getByDisplayValue('news')).toHaveFocus()

        fireEvent.mouseDown(notOperator())
        expect(operator()).toHaveAttribute('aria-pressed', 'false')
    })

    it('keeps the exclusion while the value is edited', async () => {
        const user = userEvent.setup()
        render(<Host initial={{ name: { text: 'news', negated: true } }} />)

        await user.click(screen.getByRole('button', { name: /^Edit the .+ filter$/ }))
        await user.type(chipEditor(), 'cast')
        await user.keyboard('{Enter}')
        expect(screen.getByText('is not')).toBeInTheDocument()
        expect(screen.getByText('newscast')).toBeInTheDocument()
    })

    // a page that cannot ask its server for a complement offers no toggle at all
    it('offers no operator on a chip that cannot be negated', async () => {
        const user = userEvent.setup()
        render(
            <Host
                definitions={[{ key: 'plain', label: 'Plain', kind: 'text', negatable: false }]}
                initial={{ plain: 'news' }}
            />
        )
        await user.click(screen.getByRole('button', { name: /^Edit the .+ filter$/ }))
        expect(screen.queryByRole('button', { name: 'is' })).not.toBeInTheDocument()
    })

    it('a typed ! commits a visibly excluding chip', async () => {
        const user = userEvent.setup()
        render(<Host primaryKey='name' />)

        await user.type(typeAhead(), '!rtbf')
        // the primary column leads the list, and its line says what the query will do
        expect(screen.getAllByRole('option', { name: /does not contain/ })[0]?.id).toMatch(
            /-name-text$/
        )
        await user.keyboard('{Enter}')

        expect(screen.getByText('Name')).toBeInTheDocument()
        expect(screen.getByText('is not')).toBeInTheDocument()
        expect(screen.getByText('rtbf')).toBeInTheDocument()
    })

    // Olivier's acceptance test carries hyphens and dots: the token is never split on its own
    // punctuation, so the whole version lands in one chip
    it('keeps a hyphenated version whole when it is excluded', async () => {
        const user = userEvent.setup()
        render(<Host primaryKey='name' />)

        await user.type(typeAhead(), '!6.2.501-g23d9e3373b{Enter}')
        expect(screen.getByText('6.2.501-g23d9e3373b')).toBeInTheDocument()
        expect(screen.getByText('is not')).toBeInTheDocument()
    })

    // `!!foo` is the escape — the literal `!foo`, matched rather than excluded
    it('reads a doubled ! as the literal character', async () => {
        const user = userEvent.setup()
        render(<Host primaryKey='name' />)

        await user.type(typeAhead(), '!!rtbf{Enter}')
        expect(screen.getByText('!rtbf')).toBeInTheDocument()
        expect(screen.queryByText('is not')).not.toBeInTheDocument()
    })

    // The cross-column chip has no operator of its own: its text is an expression whose words carry
    // the exclusions, and an operator on top would be a second grammar on one string
    it('offers no operator on the cross-column chip', async () => {
        const user = userEvent.setup()
        render(
            <Host
                definitions={[{ key: QUICK_SEARCH_KEY, label: 'Quick search', kind: 'text' }]}
                initial={{ [QUICK_SEARCH_KEY]: 'lobby' }}
            />
        )
        await user.click(screen.getByRole('button', { name: /^Edit the .+ filter$/ }))
        expect(screen.queryByRole('button', { name: 'is' })).not.toBeInTheDocument()
    })

    // … and its typed `!` stays in the text, where the query builder's per-word grammar reads it.
    // The LINE still says what the query will do, so the reader is told either way.
    it('keeps a typed ! in the cross-column chip text', async () => {
        const user = userEvent.setup()
        render(
            <Host
                definitions={[{ key: QUICK_SEARCH_KEY, label: 'Quick search', kind: 'text' }]}
                primaryKey={QUICK_SEARCH_KEY}
            />
        )

        await user.type(typeAhead(), '!lobby')
        expect(screen.getAllByRole('option')[0]).toHaveTextContent(/does not contain/)
        await user.keyboard('{Enter}')

        expect(screen.getByText('!lobby')).toBeInTheDocument()
        expect(screen.queryByText('is not')).not.toBeInTheDocument()
    })

    // Quick search's `!` belongs to the word it precedes, so a multi-word query commits the raw text
    // and the query builder's per-word grammar answers for it
    it('leaves a multi-word quick search raw rather than negating the whole chip', async () => {
        const user = userEvent.setup()
        render(
            <Host
                definitions={[
                    { key: QUICK_SEARCH_KEY, label: 'Quick search', kind: 'text' },
                    ...DEFINITIONS
                ]}
                primaryKey={QUICK_SEARCH_KEY}
            />
        )

        await user.type(typeAhead(), 'tizen !lobby{Enter}')
        expect(screen.getByText('tizen !lobby')).toBeInTheDocument()
        expect(screen.queryByText('is not')).not.toBeInTheDocument()
    })

    // A chip that cannot be negated keeps the `!` in its value, so the reader sees exactly what they
    // typed instead of a filter that means the opposite of the line they picked
    it('commits the ! literally where the chip cannot be negated', async () => {
        const user = userEvent.setup()
        render(
            <Host
                definitions={[{ key: 'plain', label: 'Plain', kind: 'text', negatable: false }]}
                primaryKey='plain'
            />
        )

        await user.type(typeAhead(), '!rtbf')
        expect(screen.getByRole('option', { name: /contains/ })).toBeInTheDocument()
        await user.keyboard('{Enter}')
        expect(screen.getByText('!rtbf')).toBeInTheDocument()
    })

    // Only a text column can answer an exclusion: a select holds a set whose neutral state is "Any",
    // and offering its option here would commit the opposite of what was asked
    it('offers no select option or column opener for an excluding query', async () => {
        const user = userEvent.setup()
        render(<Host />)

        await user.type(typeAhead(), '!OTT')
        expect(screen.queryByRole('option', { name: 'Type: OTT' })).not.toBeInTheDocument()
        await user.clear(typeAhead())
        await user.type(typeAhead(), '!Durat')
        expect(screen.queryByRole('option', { name: 'Duration…' })).not.toBeInTheDocument()
    })

    it('shows no suggestions for a bare !', async () => {
        const user = userEvent.setup()
        render(<Host primaryKey='name' />)
        await user.type(typeAhead(), '!')
        expect(screen.queryByRole('option')).not.toBeInTheDocument()
    })
})

/**
 * The bar offers its type-ahead as a landing place for the host's search shortcut ("/", the way
 * GitHub does it) and takes the offer back when it goes. The KEY is the host's: a page may also hold
 * a command palette and a picker dialog's own bar, only one of them may answer a press, and a stack
 * kept in here could not see the two that are not tables. So what is pinned below is the offer.
 */
describe('the host’s search field', () => {
    /** Returns false when a handler called preventDefault, i.e. when it took the keystroke. */
    const pressSlash = (target: Element = document.body, init: object = {}): boolean =>
        fireEvent.keyDown(target, { key: '/', ...init })

    it('offers its type-ahead to the host, and withdraws it on unmount', () => {
        const offered: RefObject<HTMLInputElement | null>[] = []
        const unregister = vi.fn()
        const { unmount } = renderWithTable(
            <FilterBar definitions={DEFINITIONS} rawValues={{}} onChange={vi.fn()} />,
            {
                registerSearchField: (field) => {
                    offered.push(field)
                    return unregister
                }
            }
        )

        expect(offered).toHaveLength(1)
        expect(required(offered[0]).current).toBe(screen.getByRole('combobox'))

        unmount()
        expect(unregister).toHaveBeenCalledTimes(1)
    })

    // A host with no such shortcut must not find one taken: a table claiming a global key of its
    // own would fight the application's own field for it, and neither would win predictably.
    it('claims no key at all where the host offers no registration', () => {
        render(<Host />)
        expect(pressSlash()).toBe(true)
        expect(screen.getByRole('combobox')).not.toHaveFocus()
    })
})

describe('pinned filters', () => {
    const PINNED: PinnedFilter[] = [
        {
            key: 'scope',
            label: 'Organisation',
            value: 'own',
            onChange: () => undefined,
            options: [
                { value: 'own', label: 'This org' },
                { value: 'children', label: 'This org and below' }
            ]
        }
    ]

    it('renders the current option and offers no remove button', () => {
        render(<Host pinned={PINNED} />)
        expect(screen.getByText('Organisation')).toBeInTheDocument()
        expect(screen.getByText('This org')).toBeInTheDocument()
        expect(
            screen.queryByRole('button', { name: /^Remove the .+ filter$/ })
        ).not.toBeInTheDocument()
    })

    it('opens its options on click', async () => {
        const user = userEvent.setup()
        render(<Host pinned={PINNED} />)

        await user.click(screen.getByRole('button', { name: /^Edit the .+ filter$/ }))
        expect(screen.getByRole('menuitem', { name: 'This org and below' })).toBeInTheDocument()
    })
})

describe('seedFilters', () => {
    it('seeds each key with the empty value of its kind', () => {
        const seeded = seedFilters(['name', 'type', 'duration'], DEFINITIONS)
        expect(seeded).toEqual({ name: '', type: [], duration: {} })
        expect(anyFilterActive(seeded)).toBe(false)
    })

    // A key the definitions do not cover cannot be given a kind, and text is the bar's default
    it('seeds an unknown key as text', () => {
        expect(seedFilters(['name', 'status'])).toEqual({ name: '', status: '' })
    })
})

describe('isFilterValueActive / anyFilterActive', () => {
    it('treats a seeded-empty chip as inactive', () => {
        expect(isFilterValueActive(undefined)).toBe(false)
        expect(isFilterValueActive('')).toBe(false)
        expect(isFilterValueActive('   ')).toBe(false)
        expect(isFilterValueActive({})).toBe(false)
        expect(isFilterValueActive({ from: '', to: '' })).toBe(false)
    })

    // A select chip parked at "Any" holds an empty set: rendered, but narrowing nothing
    it('treats an empty select set as inactive', () => {
        expect(isFilterValueActive([])).toBe(false)
        expect(isFilterValueActive(['', '  '])).toBe(false)
    })

    it('treats a filled chip as active', () => {
        expect(isFilterValueActive('coco')).toBe(true)
        expect(isFilterValueActive(['OTT'])).toBe(true)
        expect(isFilterValueActive(['OTT', 'FILE'])).toBe(true)
        expect(isFilterValueActive({ from: 5 })).toBe(true)
        expect(isFilterValueActive({ to: '2026-01-01' })).toBe(true)
        expect(isFilterValueActive({ from: 0 })).toBe(true) // 0 is a valid numeric bound
    })

    it('anyFilterActive is true only when at least one chip is filled', () => {
        expect(anyFilterActive({ name: '', type: [], date: {} })).toBe(false)
        expect(anyFilterActive({ name: '', date: { from: 1 } })).toBe(true)
        expect(anyFilterActive({ name: '', type: ['OTT'] })).toBe(true)
    })
})

describe('asTextTerm / asTextFilter / asValues / asRange', () => {
    it('asTextTerm trims and drops empty/undefined', () => {
        expect(asTextTerm(undefined)).toBeUndefined()
        expect(asTextTerm('')).toBeUndefined()
        expect(asTextTerm('   ')).toBeUndefined()
        expect(asTextTerm('  news  ')).toBe('news')
    })

    it('asTextTerm does not read a select set as text', () => {
        expect(asTextTerm(['OTT'])).toBeUndefined()
    })

    // What the reader typed, whether the chip matches it or excludes it — for display, and for the
    // pages that cannot negate at all
    it('asTextTerm reads an excluding chip as its term', () => {
        expect(asTextTerm({ text: '  news  ', negated: true })).toBe('news')
    })

    // What a QUERY needs: the term plus the answer to "match or exclude"
    it('asTextFilter answers the term and its direction', () => {
        expect(asTextFilter(undefined)).toBeUndefined()
        expect(asTextFilter('   ')).toBeUndefined()
        expect(asTextFilter({ text: '  ', negated: true })).toBeUndefined()
        expect(asTextFilter('news')).toEqual({ term: 'news', negated: false })
        expect(asTextFilter({ text: 'news', negated: true })).toEqual({
            term: 'news',
            negated: true
        })
    })

    it('an excluding chip counts as an active filter', () => {
        expect(isFilterValueActive({ text: 'news', negated: true })).toBe(true)
        expect(isFilterValueActive({ text: '  ', negated: true })).toBe(false)
    })

    // asRange must not read an excluding text value as a pair of bounds: both are objects
    it('asRange does not mistake an excluding text chip for a range', () => {
        expect(asRange({ text: 'news', negated: true })).toEqual({})
    })

    it('asValues returns the chosen set, empty when the chip matches everything', () => {
        expect(asValues(undefined)).toEqual([])
        expect(asValues([])).toEqual([])
        expect(asValues('')).toEqual([])
        expect(asValues(['OTT', 'FILE'])).toEqual(['OTT', 'FILE'])
        expect(asValues({ from: 1 })).toEqual([])
    })

    // A page seeding or restoring a single value should not have to wrap it
    it('asValues reads a bare string as a set of one', () => {
        expect(asValues('OTT')).toEqual(['OTT'])
    })

    it('toggleValue adds a value that is absent and removes one that is present', () => {
        expect(toggleValue([], 'OTT')).toEqual(['OTT'])
        expect(toggleValue(['OTT'], 'FILE')).toEqual(['OTT', 'FILE'])
        expect(toggleValue(['OTT', 'FILE'], 'OTT')).toEqual(['FILE'])
    })

    it('asRange returns the range object, or {} for a non-range/absent value', () => {
        expect(asRange(undefined)).toEqual({})
        expect(asRange('text')).toEqual({})
        expect(asRange(['OTT'])).toEqual({})
        expect(asRange({ from: 1, to: 2 })).toEqual({ from: 1, to: 2 })
    })
})

describe('FilterBar reset', () => {
    // one chip filtering or several, the control is the same one — found by what it says it clears
    const RESET = /^Clear the/

    it('offers no reset while nothing is actually filtering', () => {
        // a chip present but empty filters nothing, so there is nothing to clear
        render(<Host initial={{ name: '' }} resettable />)
        expect(screen.queryByRole('button', { name: RESET })).not.toBeInTheDocument()
    })

    it('offers a reset as soon as one chip carries a value', () => {
        render(<Host initial={{ name: 'news', channel: '' }} resettable />)
        expect(screen.getByRole('button', { name: RESET })).toBeInTheDocument()
    })

    it('clears every value when used, and stops offering itself', async () => {
        const user = userEvent.setup()
        render(<Host initial={{ name: 'news', type: 'OTT' }} resettable />)
        expect(screen.getByText('news')).toBeInTheDocument()

        await user.click(screen.getByRole('button', { name: RESET }))

        expect(screen.queryByText('news')).not.toBeInTheDocument()
        expect(screen.queryByRole('button', { name: RESET })).not.toBeInTheDocument()
    })

    it('renders nothing extra when a page does not offer a reset', () => {
        render(<Host initial={{ name: 'news' }} />)
        expect(screen.queryByRole('button', { name: RESET })).not.toBeInTheDocument()
    })
})

/**
 * The other half of a range chip: two DATE bounds rather than two numbers, edited through whatever
 * date field the consumer injected — the MUI-based native one here.
 *
 * The day is the LOCAL one at every step: what the reader picks, what the chip reads, and what the
 * bound leaves as. A bound read as UTC would name the day before east of Greenwich.
 */
describe('a date range chip', () => {
    const DATE_DEFINITIONS: FilterDefinition[] = [
        { key: 'lastSeen', label: 'Last seen', kind: 'range', rangeType: 'date' }
    ]

    const FROM = new Date(2026, 8, 10).toISOString()
    const TO = new Date(2026, 8, 20).toISOString()

    /** Adds the chip from the menu, or reopens the one the bar was rendered with. */
    const openTheChip = async (
        initial?: Record<string, FilterValue | undefined>
    ): Promise<UserEvent> => {
        const user = userEvent.setup()
        render(<Host definitions={DATE_DEFINITIONS} initial={initial} />)
        if (initial) {
            await user.click(screen.getByRole('button', { name: /^Edit the .+ filter$/ }))
        } else {
            await user.click(screen.getByRole('button', { name: 'Add filter' }))
            await user.click(screen.getByRole('menuitem', { name: 'Last seen' }))
        }
        return user
    }

    it('edits its bounds as dates — From and To, not Min and Max', async () => {
        await openTheChip()
        expect(screen.getByLabelText('From')).toHaveAttribute('type', 'date')
        expect(screen.getByLabelText('To')).toHaveAttribute('type', 'date')
    })

    it('reads back the day that was picked', async () => {
        await openTheChip()

        fireEvent.change(screen.getByLabelText('From'), { target: { value: '2026-09-10' } })

        expect(screen.getByLabelText('From')).toHaveValue('2026-09-10')
        // the chip's own compact form of the same day
        expect(screen.getByText('10-09-26 – …')).toBeInTheDocument()
    })

    it('opens on the bounds the chip already carries', async () => {
        await openTheChip({ lastSeen: { from: FROM, to: TO } })

        expect(screen.getByLabelText('From')).toHaveValue('2026-09-10')
        expect(screen.getByLabelText('To')).toHaveValue('2026-09-20')
    })

    // Either bound closes the other's range, so the pair can never cross
    it('never offers a To before the From, nor a From after the To', async () => {
        await openTheChip({ lastSeen: { from: FROM, to: TO } })

        expect(screen.getByLabelText('From')).toHaveAttribute('max', '2026-09-20')
        expect(screen.getByLabelText('To')).toHaveAttribute('min', '2026-09-10')
    })

    it('empties a bound the reader cleared and keeps the other', async () => {
        await openTheChip({ lastSeen: { from: FROM, to: TO } })

        fireEvent.change(screen.getByLabelText('From'), { target: { value: '' } })

        expect(screen.getByLabelText('From')).toHaveValue('')
        expect(screen.getByText('… – 20-09-26')).toBeInTheDocument()
    })
})

/**
 * A bar inside a dialog: the dialog's paper IS a form and its accept button is that form's submit,
 * so an Enter no field prevented reaches it and saves the dialog. No control inside a
 * dialog-hosted table may fire the accept.
 */
describe('inside a dialog form', () => {
    const typeAhead = (): HTMLElement => screen.getByRole('combobox')

    const renderInForm = (
        props: Parameters<typeof Host>[0] = {}
    ): { submitted: Mock; user: UserEvent } => {
        const submitted = vi.fn()
        render(
            <form
                onSubmit={(event) => {
                    event.preventDefault()
                    submitted()
                }}>
                <Host {...props} />
                <button type='submit'>Save</button>
            </form>
        )
        return { submitted, user: userEvent.setup() }
    }

    it('keeps Enter in an EMPTY type-ahead off the accept', async () => {
        const { submitted, user } = renderInForm()

        await user.type(typeAhead(), '{Enter}')

        expect(submitted).not.toHaveBeenCalled()
    })

    it('keeps Enter on a TYPED type-ahead off the accept, and still commits the chip', async () => {
        const { submitted, user } = renderInForm()

        await user.type(typeAhead(), 'OTT{Enter}')

        expect(submitted).not.toHaveBeenCalled()
        expect(screen.getByText('OTT')).toBeInTheDocument()
    })

    // The chip's own field answers Enter by closing the editor, which detaches the input before
    // anything can submit through it. Pinned so a chip that starts staying open owes the same guard
    // the type-ahead carries.
    it('keeps Enter in an open chip off the accept', async () => {
        const { submitted, user } = renderInForm({ initial: { name: 'news' } })

        await user.click(screen.getByRole('button', { name: /^Edit the .+ filter$/ }))
        await user.type(chipEditor(), 'cast{Enter}')

        expect(submitted).not.toHaveBeenCalled()
    })
})
