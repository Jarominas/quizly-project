import React from 'react';

import { Button, Stack, Typography } from '@mui/material';

import RoomRoleBasedRender from '@/components/auth/RoomRoleBasedRender';
import useRoomParticipants from '@/hooks/useRoomParticipants';

import RoomHeader from './RoomHeader';
import QuizManagement from './QuizManagementSection';
import QuestionPreview from './QuestionPreviewSection';
import PlayersSection from './PlayersSection';

interface PrivateRoomPageProps {
    roomUuid: string;
}

const ManagerContent = ({ roomUuid }: PrivateRoomPageProps) => (
    <Stack flex="1" spacing={2}>
        <QuizManagement roomUuid={roomUuid} />
        <QuestionPreview roomUuid={roomUuid} />
    </Stack>
);

const PlayerContent = ({ roomUuid }: PrivateRoomPageProps) => (
    <Stack flex="0.5" spacing={1}>
        <Typography variant="h6">Questions will appear here once the quiz starts</Typography>
        <Typography variant="h6">You can play random quiz for warm-up</Typography>
        <Stack alignSelf="flex-start">
            <Button
                variant="contained"
                size="large"
                color="primary"
                onClick={() => {
                    // playRandomQuiz();
                }}
            >
                Play Random Quiz
            </Button>
        </Stack>
    </Stack>
);

const PrivateRoomPage = ({ roomUuid }: PrivateRoomPageProps) => {
    const { userRole } = useRoomParticipants(roomUuid);

    return (
        <Stack spacing={2}>
            <RoomHeader roomUuid={roomUuid} />
            <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" spacing={2}>
                <RoomRoleBasedRender allowedRoles={['roomManager']} userRole={userRole}>
                    <ManagerContent roomUuid={roomUuid} />
                </RoomRoleBasedRender>
                <RoomRoleBasedRender allowedRoles={['participant']} userRole={userRole}>
                    <PlayerContent roomUuid={roomUuid} />
                </RoomRoleBasedRender>

                <Stack flex="0.5">
                    <PlayersSection roomUuid={roomUuid} />
                </Stack>
            </Stack>
        </Stack>
    );
};

export default PrivateRoomPage;
