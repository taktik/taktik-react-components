import React from 'react';
import { ColumnDefinition, RowDefinition } from './types';
/** Width the toggle adds to the leading cell it shares with the selection checkbox. */
export declare const EXPANDER_WIDTH = 40;
export declare const DEFAULT_DETAIL_HEIGHT = 200;
/** Marks the row whose detail is open, so the accent bar can run down both of them. */
export declare const EXPANDED_ROW_CLASS = "rdg-row-expanded";
export declare const DETAIL_ROW_CLASS = "rdg-detail-row";
export interface DataGridExpandable<Row extends RowDefinition> {
    /** Ids of the rows whose detail is open. The consumer owns this state. */
    expandedIds: string[];
    onExpandedChange: (expandedIds: string[]) => void;
    /** What the open row shows underneath itself, spanning the grid's width. */
    renderDetail: (row: Row) => React.ReactNode;
    /**
     * Height of the detail row in pixels — a function of the row when its content varies.
     *
     * The grid needs a definite height per row, so one fixed number is wrong somewhere: sized for the
     * fullest row it leaves a band of nothing under a short one, sized for the usual row it makes a
     * full one scroll. A function gives each detail the height its own content asks for.
     */
    detailHeight?: number | ((row: Row) => number);
    /**
     * Accessible names for the toggle — required, because the button is an icon: the consumer owns
     * the wording and the language, and there is no English default worth shipping.
     */
    labels: {
        expand: string;
        collapse: string;
    };
}
export declare const detailParent: <Row extends RowDefinition>(row: Row) => Row | undefined;
export declare const isDetailRow: <Row extends RowDefinition>(row: Row) => boolean;
/** Each open row followed by its detail. Parents keep the order they arrived in. */
export declare const withDetailRows: <Row extends RowDefinition>(rows: Row[], expandedIds: string[]) => Row[];
/**
 * The toggle, for the leading cell it shares with the selection checkbox.
 *
 * It cannot be a column of its own ahead of the checkbox: react-data-grid sorts its select column to
 * index 0 unconditionally (`if (aKey === SELECT_COLUMN_KEY) return -1`), before any frozen/order
 * logic. Riding inside that cell puts the chevron first while leaving rdg's selection wiring —
 * shift-click range select included — untouched.
 */
export declare const ExpanderToggle: <Row extends RowDefinition>({ row, expandable }: {
    row: Row;
    expandable: DataGridExpandable<Row>;
}) => React.JSX.Element;
/** Open the row if it is closed, close it if it is open. */
export declare const toggleExpanded: <Row extends RowDefinition>(expandable: DataGridExpandable<Row>, id: string) => void;
/**
 * Whether a click here is the ROW's — the whole row is the target of a row-wide gesture, not just a
 * 40px chevron on a row a thousand pixels wide.
 *
 * Three clicks are not the row's: one on a detail row (the result, not a handle), one in the leading
 * cell (the checkbox and the chevron are already there, and would act twice), one on a control of its
 * own. `excludedColumns` adds the columns only the consumer can name — a row-actions column whose
 * kebab does not fill its cell, where a click beside the button is still that column's, not the row's.
 */
export declare const clickBelongsToRow: <Row extends RowDefinition>(row: Row, columnKey: string, target: EventTarget | null, excludedColumns?: string[]) => boolean;
/** The leading cell's layout: toggle, then whatever the selection column renders. */
export declare const LeadingCell: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: React.ElementType;
}, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
/** Reserves the toggle's width in the header, so the select-all box lines up with the boxes below. */
export declare const LeadingHeaderSpacer: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: React.ElementType;
}, React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {}>;
export declare const SELECTION_COLUMN_KEY = "rdg-select-column";
export declare const EXPANDER_COLUMN_KEY = "rdg-expander-column";
/**
 * The toggle as a column of its own — for a grid that has no selection column for it to share.
 *
 * Pinned and injected first, which IS first here: there is no select column to outrank it. A grid
 * with selection uses {@link ExpanderToggle} inside the leading cell instead.
 */
export declare const expanderColumn: <Row extends RowDefinition>(expandable: DataGridExpandable<Row>) => ColumnDefinition<Row>;
/**
 * Turn the computed columns into ones that also render a detail row: the first column that can span
 * (a PINNED column cannot) draws the detail across the unfrozen band, and EVERY pinned column draws
 * nothing on a detail row — a detail row is not selectable, a checkbox there would report a
 * selection the grid's own rows do not contain, and a row-actions menu there would act on a
 * synthetic row rather than a real one.
 *
 * ⚠ The geometry is computed in RENDER order, not declaration order: react-data-grid sorts columns
 * into three bands — start-frozen, unfrozen, end-frozen — stable within each. A grid declaring a
 * frozen column after unfrozen ones would otherwise get a span one track too wide and keep that
 * column rendering inside its own detail rows.
 *
 * ⚠ The span STOPS at the end-frozen band rather than covering it: react-data-grid rejects an
 * unfrozen column's `colSpan` outright once it reaches an end-frozen column, and a rejected span
 * renders the whole detail inside one narrow track. So a detail row stops short of the pinned
 * actions column, which renders nothing there.
 */
export declare const withDetailRendering: <Row extends RowDefinition>(columns: ColumnDefinition<Row>[], renderDetail: (row: Row) => React.ReactNode) => ColumnDefinition<Row>[];
/**
 * The height a row occupies: its detail's when it is one, the grid's rhythm otherwise.
 *
 * A per-row `detailHeight` is asked about the row the detail belongs to, never the synthetic carrier:
 * the consumer can measure its own record and knows nothing about ours.
 */
export declare const detailAwareRowHeight: <Row extends RowDefinition>(rowHeight: number | ((row: Row) => number) | null | undefined, fallback: number, detailHeight: number | ((row: Row) => number)) => ((row: Row) => number);
/**
 * A detail row is the continuation of the row above it, not a row of its own. The parent is marked
 * too, so one accent bar runs down the pair when several are open at once.
 */
export declare const detailRowClass: <Row extends RowDefinition>(row: Row, expandedIds?: string[]) => string;
