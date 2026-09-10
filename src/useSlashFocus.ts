import { RefObject, useEffect } from 'react'

/**
 * The fields "/" may land in, in mount order. The LAST one wins: with a page's filter bar behind an
 * open picker dialog, the dialog is what the reader is looking at, and it unregisters on close so
 * the page's bar takes the shortcut back.
 *
 * It is ONE stack for the whole page rather than one per feature, which is the only way the rule
 * holds between two DIFFERENT kinds of field: a page with no table has some other field claiming
 * the key, and a table's bar mounted after it takes the key back — with two stacks both would answer
 * the same press. That is also why a consumer with a searchable field of its own reads this hook
 * rather than keeping a second one beside it.
 */
const slashTargets: RefObject<HTMLInputElement | null>[] = []

const typesItsOwnText = (target: EventTarget | null): boolean => {
    if (!(target instanceof HTMLElement)) return false
    if (target.isContentEditable) return true
    return ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName)
}

// globalThis: the DOM event, not React's synthetic one
const onSlashKeyDown = (event: globalThis.KeyboardEvent): void => {
    // Shift is deliberately allowed: "/" is a shifted key on the AZERTY and QWERTZ layouts, so
    // requiring a bare press would put the shortcut out of those readers' reach entirely.
    if (event.key !== '/' || event.ctrlKey || event.metaKey || event.altKey) return
    if (typesItsOwnText(event.target)) return
    const input = slashTargets[slashTargets.length - 1]?.current
    if (!input) return
    event.preventDefault()
    input.focus()
}

/**
 * "/" from anywhere on the page lands in this field, the way it does on GitHub — unless focus is
 * already in a field of its own, or a ctrl/meta/alt modifier is held.
 *
 * Registering is what claims the key; the last field to mount is the one that gets it.
 */
export const useSlashFocus = (ref: RefObject<HTMLInputElement | null>): void => {
    useEffect(() => {
        slashTargets.push(ref)
        if (slashTargets.length === 1) document.addEventListener('keydown', onSlashKeyDown)
        return () => {
            const index = slashTargets.lastIndexOf(ref)
            if (index >= 0) slashTargets.splice(index, 1)
            if (!slashTargets.length) document.removeEventListener('keydown', onSlashKeyDown)
        }
    }, [ref])
}
