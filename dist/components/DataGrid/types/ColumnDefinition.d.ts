import { Column } from 'react-data-grid';
import { RowDefinition } from './RowDefinition';
import { ColumnType } from './ColumnType';
import { FilterType } from './FilterType';
export type ColumnDefinition<Row extends RowDefinition = RowDefinition> = Column<Row> & {
    type?: ColumnType;
    filterType?: FilterType;
    filterOptions?: {
        label: string;
        value: string;
    }[];
    sortComparator?: (a: unknown, b: unknown) => number;
    filterComparator?: (value: unknown, valueToMatch: unknown) => boolean;
    filterEnabled?: boolean;
    dateOptions?: {
        formatDate?: string;
        timeZone?: string;
    };
};
