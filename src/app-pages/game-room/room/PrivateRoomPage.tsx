import React from 'react';

import { Button, Card, CircularProgress, Stack, Typography } from '@mui/material';

import { GameRoom } from '@/models';
import { useRoomState } from '@/hooks/useRoomState';
import RoomRoleBasedRender from '@/components/auth/RoomRoleBasedRender';

import RoomHeader from './RoomHeader';
import QuizManagement from './QuizManagementSection';
import QuestionPreview from './QuestionPreviewSection';
import PlayersSection from './PlayersSection';

const ManagerContent = () => (
    <Stack flex="1" spacing={2}>
        <QuizManagement />
        <QuestionPreview />
    </Stack>
);

const PlayerContent = () => (
    <Stack flex="1" spacing={2}>
        <Card>
            <Typography variant="h6">Waiting for other players to start the quiz...</Typography>
            <Typography variant="h6">You can play Random Quiz for warm-up</Typography>
            <Stack spacing={2} padding={2} alignItems="flex-start">
                <Button variant="contained" size="large">
                    Random Quiz
                </Button>
            </Stack>
        </Card>
    </Stack>
);

const PrivateRoomPage = ({ roomUuid }: GameRoom) => {
    const { isUserManager, participants, roomManager, isLoading, error, isConnected } = useRoomState(roomUuid);

    if (!isConnected)
        return (
            <Stack alignSelf="center">
                <CircularProgress />
            </Stack>
        );
    if (error)
        return (
            <Stack>
                <Typography variant="h4" color="error">
                    {error}
                </Typography>
            </Stack>
        );

    return (
        <Stack spacing={2}>
            <RoomHeader roomUuid={roomUuid} />
            <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" spacing={2}>
                <RoomRoleBasedRender roomRole="roomManager" isRoomManager={isUserManager} fallback={<PlayerContent />}>
                    <ManagerContent />
                </RoomRoleBasedRender>
                <Stack flex="0.5">
                    {isLoading ? (
                        <Card>
                            <Stack spacing={2} padding={2} alignSelf="center" alignItems="center">
                                <CircularProgress />
                            </Stack>
                        </Card>
                    ) : (
                        <PlayersSection
                            participants={participants}
                            roomManager={roomManager}
                            isUserManager={isUserManager}
                        />
                    )}
                </Stack>
            </Stack>
        </Stack>
    );
};

export default PrivateRoomPage;
