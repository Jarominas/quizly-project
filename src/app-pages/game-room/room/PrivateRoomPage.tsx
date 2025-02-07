import React from 'react';

import { Stack } from '@mui/material';

import { GameRoom } from '@/models';

import RoomHeader from './RoomHeader';
import QuizManagement from './QuizManagementSection';
import QuestionPreview from './QuestionPreviewSection';
import PlayersSection from './PlayersSection';

const PrivateRoomPage = ({ roomUuid }: GameRoom) => (
    <Stack spacing={2}>
        <RoomHeader roomUuid={roomUuid} />
        <Stack direction="row" justifyContent="space-between" spacing={2}>
            <Stack flex="1" spacing={2}>
                <QuizManagement />
                <QuestionPreview />
            </Stack>
            <Stack flex="0.5">
                <PlayersSection />
            </Stack>
        </Stack>
    </Stack>
);

export default PrivateRoomPage;
