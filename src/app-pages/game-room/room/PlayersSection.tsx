import React from 'react';

import { Button, Card, Chip, Stack, Typography } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const PlayersSection = () => (
    <Card>
        <Stack spacing={2}>
            <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Stack direction="row" alignItems="center" spacing={2}>
                    <PeopleIcon color="primary" />
                    <Typography variant="h6">Players</Typography>
                </Stack>
                <Chip size="medium" color="primary" label="2 online" />
            </Stack>
            <Stack alignSelf="flex-end">
                <Button size="small" variant="contained">
                    Room Queue
                </Button>
            </Stack>
            <Stack spacing={2}>
                <Card sx={{ backgroundColor: 'lightslategray' }}>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <AccountCircleIcon />
                        <Typography>Player 1</Typography>
                    </Stack>
                </Card>
            </Stack>
        </Stack>
    </Card>
);

export default PlayersSection;
