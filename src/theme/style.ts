export const fontSize = {
    smaller: '10px',
    small: '12px',
    normal: '13px',
    big: '16px',
    bigger: '24px'
}

export const borderRadius = {
    xs: '2px',
    sm: '4px',
    md: '6px',
    lg: '8px',
    xl: '12px',
    /** A shape whose ends are semicircles whatever its height — a status pill, a count badge. */
    full: '999px'
}

/**
 * An icon's own size, which is a different scale from text: `font-size` on an MUI `SvgIcon` is what
 * sizes it, so an icon set from `fontSize.normal` would be 13px — a number that means nothing to an
 * icon. `sm` for an icon riding inside a chip or a dense cell, `nav` for the mark that labels a
 * navigation row (the shell's main menu; a section's own denser column drops back to `sm`), `md`
 * for the one inside a control — a button, a menu item, a checkbox, an input adornment, by far the
 * common case — and `lg` for a standalone icon that IS the control. A deliberately over- or
 * under-sized mark stays off the scale and says so where it is written.
 */
export const iconSize = {
    sm: '16px',
    nav: '18px',
    md: '20px',
    lg: '24px'
}

export const fontFamily = {
    fontFamilyMain: `'Inter', sans-serif`,
    /** for values meant to be read character by character — a token, an id, a cell reference */
    fontFamilyMono: `'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace`,
    /** the Material Symbols ligature font: the glyph IS the text content */
    fontFamilyIcon: `'Material Symbols Rounded', sans-serif`
}

export const shadowElevation = {
    '0': 'none',
    '1':
        'rgba(0, 0, 0,.20) 0 2px 1px -1px, ' +
        'rgba(0, 0, 0,.14) 0 1px 1px 0, ' +
        'rgba(0, 0, 0,.12) 0 1px 3px 0',
    '2':
        'rgba(0, 0, 0,.20) 0 3px 1px -2px, ' +
        'rgba(0, 0, 0,.14) 0 2px 2px 0, ' +
        'rgba(0, 0, 0,.12) 0 1px 5px 0',
    '3':
        'rgba(0, 0, 0,.20) 0 3px 3px -2px, ' +
        'rgba(0, 0, 0,.14) 0 3px 4px 0, ' +
        'rgba(0, 0, 0,.12) 0 1px 8px 0',
    '4':
        'rgba(0, 0, 0,.20) 0 2px 4px -1px, ' +
        'rgba(0, 0, 0,.14) 0 4px 5px 0, ' +
        'rgba(0, 0, 0,.12) 0 1px 10px 0',
    '6':
        'rgba(0, 0, 0,.20) 0 3px 5px -1px, ' +
        'rgba(0, 0, 0,.14) 0 6px 10px 0, ' +
        'rgba(0, 0, 0,.12) 0 1px 18px 0',
    '8':
        'rgba(0, 0, 0,.20) 0 5px 5px -3px, ' +
        'rgba(0, 0, 0,.14) 0 8px 10px 1px, ' +
        'rgba(0, 0, 0,.12) 0 3px 14px 2px',
    '12':
        'rgba(0, 0, 0,.20) 0 7px 8px -4px, ' +
        'rgba(0, 0, 0,.14) 0 12px 17px 2px, ' +
        'rgba(0, 0, 0,.12) 0 5px 22px 4px',
    '16':
        'rgba(0, 0, 0,.20) 0 8px 10px -5px, ' +
        'rgba(0, 0, 0,.14) 0 16px 24px 2px, ' +
        'rgba(0, 0, 0,.12) 0 6px 30px 5px',
    '24':
        'rgba(0, 0, 0,.20) 0 11px 15px -7px, ' +
        'rgba(0, 0, 0,.14) 0 24px 38px 3px, ' +
        'rgba(0, 0, 0,.12) 0 9px 46px 8px'
}
