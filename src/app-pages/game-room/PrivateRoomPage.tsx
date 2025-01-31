import React from 'react';

import { Stack } from '@mui/material';

import { PrivateRoomPageProps } from './types';

const PrivateRoomPage = ({ room }: PrivateRoomPageProps) => <Stack>This is room number {room}</Stack>;

export default PrivateRoomPage;
