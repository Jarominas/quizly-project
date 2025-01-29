import React from 'react';

import { DataGrid } from '@mui/x-data-grid';
import useSWR from 'swr';

import { axiosInstance } from '@/configs/axiosInstance';
import { Quiz } from '@/models/quiz';

import ErrorMessage from './ErrorMessage';
import LoadingSpinner from './LoadingSpinner';

interface ApiResponse {
    data: Quiz[];
}

interface MuiDataGridProps {
    fetchUrl: string;
    columns: any[];
    rowsMapper: (_data: any) => any[];
    onRowClick: (_params: any) => void;
}

const MuiDataGrid = ({ fetchUrl, columns, rowsMapper, onRowClick }: MuiDataGridProps) => {
    const { data, error, isLoading } = useSWR<ApiResponse>(fetchUrl, axiosInstance.get);

    const rows = data?.data ? rowsMapper(data.data) : [];

    if (error) return <ErrorMessage text="Failed to fetch data" />;
    if (isLoading) return <LoadingSpinner />;

    return (
        <DataGrid
            rows={rows}
            columns={columns}
            onRowClick={onRowClick}
            getRowClassName={params => (params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd')}
            initialState={{
                pagination: { paginationModel: { pageSize: 25 } },
            }}
            pageSizeOptions={[10, 20, 50]}
            disableColumnFilter
            disableColumnMenu
            disableColumnSorting
            disableColumnResize
            density="compact"
            slotProps={{
                filterPanel: {
                    filterFormProps: {
                        logicOperatorInputProps: {
                            variant: 'outlined',
                            size: 'small',
                        },
                        columnInputProps: {
                            variant: 'outlined',
                            size: 'small',
                            sx: { mt: 'auto' },
                        },
                        operatorInputProps: {
                            variant: 'outlined',
                            size: 'small',
                            sx: { mt: 'auto' },
                        },
                        valueInputProps: {
                            InputComponentProps: {
                                variant: 'outlined',
                                size: 'small',
                            },
                        },
                    },
                },
            }}
        />
    );
};

export default MuiDataGrid;
