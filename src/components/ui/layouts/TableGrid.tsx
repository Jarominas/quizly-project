import React from 'react';

import Grid from '@mui/material/Grid2';

const TableGrid = ({ children }: Readonly<{ children: React.ReactNode }>) => (
    <Grid container spacing={2} columns={12}>
        <Grid size={12}>{children}</Grid>
    </Grid>
);

export default TableGrid;
