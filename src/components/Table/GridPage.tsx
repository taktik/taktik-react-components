import styled from 'styled-components'
import { gridFocus } from './gridFocus'
import { gridPager } from './gridPager'

/**
 * The shell every grid page renders inside: a full-height column holding the toolbar, then the grid
 * in a `GridPageBody`. Children must stretch — an `align-items` other than the default stops the
 * toolbar filling the row, and its right-aligned actions lose the edge they align against.
 *
 * It hosts a pager too, so that a grid a consumer nests inside itself rather than filling with
 * (several stacked relation tables, say) is themed by virtue of being in the shell.
 */
export const GridPage = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;
    box-sizing: border-box;
    overflow: hidden;
    padding: 24px 24px 0;

    ${gridPager};
`

/**
 * The area the grid fills under the toolbar. `min-width`/`min-height: 0` let it shrink inside the
 * flex column, and the `.rdg` sizing keeps a column widened past the viewport scrolling INSIDE
 * the grid instead of overflowing the page.
 *
 * This is the ONLY wrapper a grid needs: `DataGrid` already renders a full-height flex column of
 * its own, so the `> div` rule below sizes it directly. A grid placed in here takes no fill wrapper
 * of its own.
 */
export const GridPageBody = styled.div`
    ${gridPager};
    ${gridFocus};

    width: 100%;
    flex: 1 1 auto;
    min-height: 0;
    min-width: 0;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    > div {
        height: 100%;
        width: 100%;
        min-width: 0;
    }

    .rdg {
        block-size: 100%;
        inline-size: 100%;
    }
`
