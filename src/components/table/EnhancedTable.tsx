import * as React from 'react';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Tooltip from '@mui/material/Tooltip';
import { visuallyHidden } from '@mui/utils';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';

interface Data {
    id: number;
    country: string;
    recovered: number;
    cases: number;
    deaths: number;
}

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof Data>(
    order: Order,
    orderBy: Key
): (
    a: { [key in Key]: number | string },
    b: { [key in Key]: number | string }
) => number {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(
    array: readonly T[],
    comparator: (a: T, b: T) => number
) {
    const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
    disablePadding: boolean;
    id: keyof Data;
    label: string;
    numeric: boolean;
}

const headCells: readonly HeadCell[] = [
    {
        id: 'country',
        numeric: false,
        disablePadding: true,
        label: 'Countries',
    },
    {
        id: 'recovered',
        numeric: true,
        disablePadding: false,
        label: 'Recovered',
    },
    {
        id: 'cases',
        numeric: true,
        disablePadding: false,
        label: 'Cases',
    },
    {
        id: 'deaths',
        numeric: true,
        disablePadding: false,
        label: 'Deaths',
    },
];

interface EnhancedTableProps {
    data: Data[] | undefined;
    numSelected?: number;
    onRequestSort?: (
        event: React.MouseEvent<unknown>,
        property: keyof Data
    ) => void;
    onSelectAllClick?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    order?: Order;
    orderBy?: string;
    rowCount?: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
    const { order, orderBy, onRequestSort } = props;
    const isMobile = useMediaQuery('(max-width:600px)');
    const createSortHandler =
        (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
            if (onRequestSort) {
                onRequestSort(event, property);
            }
        };

    return (
        <TableHead>
            <TableRow>
                <TableCell padding='checkbox'>
                    <></>
                </TableCell>
                {headCells.map((headCell) =>
                    !isMobile ||
                    (headCell.id !== 'recovered' &&
                        headCell.id !== 'cases' &&
                        headCell.id !== 'deaths') ? (
                        <TableCell
                            key={headCell.id}
                            align={headCell.numeric ? 'right' : 'left'}
                            padding={
                                headCell.disablePadding ? 'none' : 'normal'
                            }
                            sortDirection={
                                orderBy === headCell.id ? order : false
                            }
                        >
                            <TableSortLabel
                                active={orderBy === headCell.id}
                                direction={
                                    orderBy === headCell.id ? order : 'asc'
                                }
                                onClick={createSortHandler(headCell.id)}
                            >
                                {headCell.label}
                                {orderBy === headCell.id ? (
                                    <Box component='span' sx={visuallyHidden}>
                                        {order === 'desc'
                                            ? 'sorted descending'
                                            : 'sorted ascending'}
                                    </Box>
                                ) : null}
                            </TableSortLabel>
                        </TableCell>
                    ) : null
                )}{' '}
            </TableRow>
        </TableHead>
    );
}

interface EnhancedTableToolbarProps {
    numSelected: number;
}

function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
    const { numSelected } = props;

    return (
        <Toolbar
            sx={{
                pl: { sm: 2 },
                pr: { xs: 1, sm: 1 },
                ...(numSelected > 0 && {
                    bgcolor: (theme) =>
                        alpha(
                            theme.palette.primary.main,
                            theme.palette.action.activatedOpacity
                        ),
                }),
            }}
        >
            {numSelected > 0 ? (
                <Tooltip title='Delete'>
                    <></>
                </Tooltip>
            ) : (
                <Tooltip title='Filter list'>
                    <></>
                </Tooltip>
            )}
        </Toolbar>
    );
}
export default function EnhancedTable({ data }: EnhancedTableProps) {
    const navigate = useNavigate();

    const [order, setOrder] = React.useState<Order>('asc');
    const [orderBy, setOrderBy] = React.useState<keyof Data>('recovered');
    const [selected, setSelected] = React.useState<readonly number[]>([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleRequestSort = (
        _event: React.MouseEvent<unknown>,
        property: keyof Data
    ) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        if (event.target.checked) {
            const newSelected = data?.map((n) => n.id);
            setSelected(newSelected || []);
            return;
        }
        setSelected([]);
    };

    const handleChangePage = (_event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const emptyRows =
        page > 0 && data
            ? Math.max(0, (1 + page) * rowsPerPage - data.length)
            : 0;

    const visibleRows = React.useMemo(
        () =>
            stableSort(data || [], getComparator(order, orderBy)).slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
            ),
        [order, orderBy, page, rowsPerPage, data]
    );
    const isMobile = useMediaQuery('(max-width:600px)');

    return (
        <Box sx={{ width: '100%' }}>
            <Paper
                sx={{ width: '100%', mb: 2, borderRadius: '0' }}
                elevation={0}
            >
                <EnhancedTableToolbar numSelected={selected.length} />
                <TableContainer>
                    <Table
                        sx={{
                            minWidth: { xs: '100%', lg: 750 },
                            minHeight: { xs: '50vh', lg: 'auto' },
                        }}
                        aria-labelledby='tableTitle'
                    >
                        <EnhancedTableHead
                            data={data}
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={data?.length}
                        />
                        <TableBody>
                            {visibleRows.map((row, index) => {
                                const labelId = `enhanced-table-checkbox-${index}`;
                                return (
                                    <TableRow
                                        hover
                                        tabIndex={-1}
                                        key={row.id}
                                        sx={{ cursor: 'pointer' }}
                                        onClick={() =>
                                            navigate(
                                                `/statistics/${row.country}`
                                            )
                                        }
                                    >
                                        <TableCell padding='checkbox'>
                                            <></>
                                        </TableCell>
                                        <TableCell
                                            component='th'
                                            id={labelId}
                                            scope='row'
                                            padding='none'
                                        >
                                            {row.country}
                                        </TableCell>
                                        {!isMobile && (
                                            <>
                                                <TableCell align='right'>
                                                    {row.recovered}
                                                </TableCell>
                                                <TableCell align='right'>
                                                    {row.cases}
                                                </TableCell>
                                                <TableCell align='right'>
                                                    {row.deaths}
                                                </TableCell>
                                            </>
                                        )}
                                    </TableRow>
                                );
                            })}
                            {emptyRows > 0 && (
                                <TableRow>
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component='div'
                    count={Number(data?.length)}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </Box>
    );
}
