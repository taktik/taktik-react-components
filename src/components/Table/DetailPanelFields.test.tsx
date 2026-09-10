import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { ThemeProvider } from 'styled-components'
import { defaultTableTheme as lightTheme } from '../../theme/tableTheme'
import { DetailPanelFields, DetailPanelFieldsProps } from './DetailPanelFields'

const renderFields = (props: DetailPanelFieldsProps) =>
    render(
        <ThemeProvider theme={lightTheme}>
            <DetailPanelFields {...props} />
        </ThemeProvider>
    )

describe('DetailPanelFields', () => {
    it('puts each label over its value', () => {
        renderFields({
            fields: [
                { key: 'id', label: 'License ID', value: 'lic-1' },
                { key: 'origin', label: 'Origin', value: 'Odoo' }
            ]
        })
        expect(screen.getByText('License ID')).toBeInTheDocument()
        expect(screen.getByText('lic-1')).toBeInTheDocument()
        expect(screen.getByText('Origin')).toBeInTheDocument()
    })

    it('renders a value that is not text as it is', () => {
        renderFields({
            fields: [{ key: 'generated', label: 'Generated', value: <em>3 days ago</em> }]
        })
        expect(screen.getByText('3 days ago')).toBeInTheDocument()
    })

    it('says a field is empty rather than leaving a gap under its label', () => {
        renderFields({
            fields: [
                { key: 'replaces', label: 'Replaces' },
                { key: 'blank', label: 'Blank', value: '' }
            ],
            emptyLabel: 'None'
        })
        expect(screen.getAllByText('None')).toHaveLength(2)
    })

    it('exposes a long value as a hover title, since the column clips it', () => {
        renderFields({
            fields: [{ key: 'tenant', label: 'Tenant ID', value: 'a-very-long-tenant-uuid' }]
        })
        expect(screen.getByTitle('a-very-long-tenant-uuid')).toBeInTheDocument()
    })

    // The FIELD rides along with the value: a panel showing two copyable ids has to know which one
    // was taken, and the license drawer used to work it out by comparing the value against the row
    it('copies through the page, which owns the toast, and says which field it was', async () => {
        const onCopy = vi.fn()
        const field = {
            key: 'id',
            label: 'License ID',
            value: 'lic-1',
            copyValue: 'lic-1-full-value',
            copyTooltipText: 'Copy license id'
        }
        renderFields({ fields: [field], onCopy })
        await userEvent.click(screen.getByRole('button', { name: 'Copy license id' }))
        expect(onCopy).toHaveBeenCalledWith('lic-1-full-value', field)
    })

    /**
     * ONE answer to "copyable but empty", and it is the same one `DetailSections` gives: `value`
     * decides what the field READS, `copyValue` decides whether there is a button. Printing the copy
     * value in its place would have a field the record left empty claim to hold its own id.
     */
    it('says a copyable field is empty, and still hands over what it has', async () => {
        const onCopy = vi.fn()
        renderFields({
            fields: [
                {
                    key: 'id',
                    label: 'License ID',
                    copyValue: 'lic-1-full-value',
                    copyTooltipText: 'Copy license id'
                }
            ],
            emptyLabel: 'None',
            onCopy
        })
        expect(screen.getByText('None')).toBeInTheDocument()
        expect(screen.queryByText('lic-1-full-value')).not.toBeInTheDocument()
        await userEvent.click(screen.getByRole('button', { name: 'Copy license id' }))
        expect(onCopy).toHaveBeenCalledWith(
            'lic-1-full-value',
            expect.objectContaining({ key: 'id' })
        )
    })

    // The value is the field's own, whatever the clipboard gets — a copy button never stands in for
    // what the field renders, which is the only way a non-text value survives beside one
    it('keeps a value that is not text beside its copy button', () => {
        renderFields({
            fields: [
                {
                    key: 'generated',
                    label: 'Generated',
                    value: <em>3 days ago</em>,
                    copyValue: '2026-08-01T10:00:00Z',
                    copyTooltipText: 'Copy timestamp'
                }
            ],
            onCopy: vi.fn()
        })
        expect(screen.getByText('3 days ago')).toBeInTheDocument()
        expect(screen.getByRole('button', { name: 'Copy timestamp' })).toBeInTheDocument()
    })

    // A copy button the page cannot service, or one with no words on it, is not offered at all
    it('offers no copy button without both an onCopy and a tooltip', () => {
        const { rerender } = renderFields({
            fields: [{ key: 'id', label: 'License ID', copyValue: 'lic-1' }],
            onCopy: vi.fn()
        })
        expect(screen.queryByRole('button')).not.toBeInTheDocument()
        rerender(
            <ThemeProvider theme={lightTheme}>
                <DetailPanelFields
                    fields={[
                        {
                            key: 'id',
                            label: 'License ID',
                            copyValue: 'lic-1',
                            copyTooltipText: 'Copy license id'
                        }
                    ]}
                />
            </ThemeProvider>
        )
        expect(screen.queryByRole('button')).not.toBeInTheDocument()
    })

    it('lays the fields out in wrapping columns of the asked-for width', () => {
        const { container } = renderFields({
            fields: [{ key: 'id', label: 'License ID', value: 'lic-1' }],
            minColumnWidth: 240
        })
        const layout = container.firstElementChild as HTMLElement
        expect(window.getComputedStyle(layout).gridTemplateColumns).toContain('minmax(240px, 1fr)')
    })
})
