import styled from '@emotion/styled'

export const Container = styled.div`
    width: 100%;
    height: 100%;

    .rdg {
        border: none;
    }

    * {
        font-weight: var(--rdg-font-weight);
        line-height: var(--rdg-line-height);
        font-family: var(--rdg-font-family);

        border: none;
    }

    .rdg-header-row {
        color: var(--rdg-header-color);
    }

    .rdg-cell {
        padding: var(--rdg-cell-padding) !important;
    }

    .rdg-cell-resizable {
        > div {
            width: 5px;
            cursor: col-resize;
            background-color: var(--rdg-border-color);
            opacity: 0;
            transition: opacity 0.2s ease;
            position: absolute;
            top: 0;
            right: -2.5px;
            bottom: 0;

            &:hover {
                opacity: 0.5;
            }
        }
    }

    .rdg-row {
        &.first-row {
            .rdg-cell {
                border-top: solid var(--rdg-border-size) var(--rdg-border-color);
            }

            .rdg-cell:first-child {
                border-top-left-radius: var(--rdg-border-radius-container);
            }

            .rdg-cell:last-child {
                border-top-right-radius: var(--rdg-border-radius-container);
            }
        }

        &.last-row {
            .rdg-cell:first-child {
                border-bottom-left-radius: var(--rdg-border-radius-container);
            }

            .rdg-cell:last-child {
                border-bottom-right-radius: var(--rdg-border-radius-container);
            }
        }

        .rdg-cell {
            border-bottom: solid var(--rdg-border-size) var(--rdg-border-color);

            &:first-child {
                border-left: solid var(--rdg-border-size) var(--rdg-border-color);
            }

            &:last-child {
                border-right: solid var(--rdg-border-size) var(--rdg-border-color);
            }
        }
    }

    //.rdg-row-even {
    //
    //    .rdg-cell {
    //        border-top: solid var(--rdg-border-size) var(--rdg-border-color);
    //        border-bottom: solid var(--rdg-border-size) var(--rdg-border-color);
    //
    //        &:first-child {
    //            border-left: solid var(--rdg-border-size) var(--rdg-border-color);
    //        }
    //
    //        &:last-child {
    //            border-right: solid var(--rdg-border-size) var(--rdg-border-color);
    //        }
    //    }
    //}
`
