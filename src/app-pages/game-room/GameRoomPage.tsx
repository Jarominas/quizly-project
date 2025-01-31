import React from 'react';

import { Button, Stack, Typography } from '@mui/material';

const GameRoomPage = () => (
    <Stack spacing={2} alignSelf="center" textAlign="center">
        <Typography variant="h4">Game Room</Typography>
        <Typography variant="h6">Here you can play Quiz Games with you friends</Typography>
        <Stack alignSelf="center">
            <Button variant="contained">Create Room</Button>
        </Stack>
    </Stack>
);

export default GameRoomPage;
