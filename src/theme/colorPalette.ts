export const colorPalette = {
    blue_50: '#F5FBFF',
    blue_100: '#DCF0FE',
    blue_200: '#C5E7FD',
    blue_300: '#7EC8FC',
    blue_400: '#1A9BF6',
    blue_500: '#0484DF',
    blue_600: '#1875B6',
    blue_700: '#105B8F',
    blue_800: '#102541',
    blue_900: '#061324',
    gray_50: '#FEFEFF',
    gray_100: '#FBFBFB',
    gray_200: '#EEF2F6',
    gray_300: '#DBDFE3',
    gray_400: '#C6CDD4',
    gray_500: '#8899AA',
    gray_600: '#5D7184',
    gray_700: '#3E4F5F',
    gray_800: '#29323D',
    // Between 800 and 900: the dark chrome plane, one quiet step off the page it frames.
    gray_850: '#232B35',
    gray_900: '#1E252D',
    red_50: '#FFE3E3',
    red_100: '#FFBDBD',
    red_200: '#FF9B9B',
    red_300: '#F86A6A',
    red_400: '#EF4E4E',
    red_500: '#E12D39',
    red_600: '#CF1124',
    red_700: '#AB091E',
    red_800: '#8A041A',
    red_900: '#610316',
    teal_50: '#EFFCF6',
    teal_100: '#C6F7E2',
    teal_200: '#8EEDC7',
    teal_300: '#65D6AD',
    teal_400: '#3EBD93',
    teal_500: '#27AB83',
    teal_600: '#199473',
    teal_700: '#147D64',
    teal_800: '#0C6B58',
    teal_900: '#014D40',
    pink_50: '#FFE3EC',
    pink_100: '#FFB8D2',
    pink_200: '#FF8CBA',
    pink_300: '#F364A2',
    pink_400: '#E8368F',
    pink_500: '#DA127D',
    pink_600: '#BC0A6F',
    pink_700: '#A30664',
    pink_800: '#870557',
    pink_900: '#620042',
    yellow_50: '#FFFBEA',
    yellow_100: '#FFF3C4',
    yellow_200: '#FCE588',
    yellow_300: '#FADB5F',
    yellow_400: '#F7C948',
    yellow_500: '#F0B429',
    yellow_600: '#DE911D',
    yellow_700: '#CB6E17',
    yellow_800: '#B44D12',
    yellow_900: '#8D2B0B',
    purple_50: '#F0EDFD',
    purple_100: '#DED8FC',
    purple_200: '#B9ABFE',
    purple_300: '#A998FF',
    purple_400: '#826CF4',
    purple_500: '#5D44DF',
    purple_600: '#381DBF',
    purple_700: '#20099C',
    purple_800: '#250388',
    purple_900: '#1B0166',
    orange_50: '#FEF1EC',
    orange_100: '#FDE2D7',
    orange_200: '#FDD2C0',
    orange_300: '#FCC6AF',
    orange_400: '#F99B72',
    orange_500: '#F76F35',
    orange_600: '#F24E09',
    orange_700: '#C63F05',
    orange_800: '#A33404',
    orange_900: '#6B2406',
    mint_50: '#ECFEFA',
    mint_100: '#DBFEF7',
    mint_200: '#CEFCF3',
    mint_300: '#9DFAE7',
    mint_400: '#71FDE1',
    mint_500: '#29FBD1',
    mint_600: '#08CBA4',
    mint_700: '#07E9BC',
    mint_800: '#07A988',
    mint_900: '#04765F',
    /* extra */
    white: 'hsla(0, 100%, 100%, 1)',
    black: 'hsla(0, 0%, 0%, 1)',
    /*
     * Scrims — a wash OVER whatever a control happens to sit on, rather than a colour of its own.
     * That is what lets a selected or hovered control read against a row which is itself already
     * tinted, and it is why these are not palette steps: no single grey works on both a plain row
     * and a selected one. Themes name these instead of restating the rgba literal (they used to,
     * fourteen times over).
     */
    scrimSelected: 'rgba(0, 0, 0, 0.3)',
    /** hover on a LIGHT surface — a darkening */
    scrimHoverOnLight: 'rgba(0, 0, 0, 0.1)',
    /** hover on a DARK surface — a lightening */
    scrimHoverOnDark: 'rgba(255, 255, 255, 0.05)',
    /**
     * The wash under a NON-MODAL details panel: it says the page is underneath, not that it is
     * disabled, so it is a third of a modal backdrop and lets every click through. A modal panel
     * keeps MUI's own backdrop, which is a statement about what may be touched.
     */
    scrimPanelCover: 'rgba(0, 0, 0, 0.18)',
    /* grey */
    grey_50: 'hsla(220, 35%, 97%, 1)',
    grey_100: 'hsla(220, 30%, 94%, 1)',
    grey_200: 'hsla(220, 20%, 80%, 1)',
    grey_300: 'hsla(220, 20%, 72%, 1)',
    grey_400: 'hsla(220, 20%, 65%, 1)',
    grey_500: 'hsla(220, 20%, 42%, 1)',
    grey_600: 'hsla(220, 20%, 35%, 1)',
    grey_700: 'hsla(220, 20%, 25%, 1)',
    grey_800: 'hsla(220, 30%, 6%, 1)',
    grey_900: 'hsla(220, 35%, 3%, 1)'
}

/** A palette color at partial opacity — for tints and hovers, so themes never restate a hex as rgba. */
export const withAlpha = (hex: string, alpha: number): string => {
    const r = parseInt(hex.slice(1, 3), 16)
    const g = parseInt(hex.slice(3, 5), 16)
    const b = parseInt(hex.slice(5, 7), 16)
    return `rgba(${r}, ${g}, ${b}, ${alpha})`
}
