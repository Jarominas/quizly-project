import React from 'react';

import { Button, Card, Chip, Stack, Typography } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import RoomRoleBasedRender from '@/components/auth/RoomRoleBasedRender';
import useRoomParticipants from '@/hooks/useRoomParticipants';

interface PlayersSectionProps {
    roomUuid: string;
}

const PlayersSection = ({ roomUuid }: PlayersSectionProps) => {
    const { roomManager, regularParticipants, onlineCount, userRole } = useRoomParticipants(roomUuid);

    return (
        <Card>
            <Stack spacing={2}>
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Stack direction="row" alignItems="center" spacing={2}>
                        <PeopleIcon color="primary" />
                        <Typography variant="h6">Participants</Typography>
                    </Stack>
                    <Chip size="medium" color="primary" label={`${onlineCount} online`} />
                </Stack>
                <RoomRoleBasedRender allowedRoles={['roomManager']} userRole={userRole}>
                    <Stack alignSelf="flex-end">
                        <Button size="small" variant="contained">
                            Room Queue
                        </Button>
                    </Stack>
                </RoomRoleBasedRender>

                <Stack spacing={2}>
                    <Typography variant="subtitle1">Room Manager</Typography>
                    {roomManager ? (
                        <Card sx={{ backgroundColor: 'lightslategray', p: 1 }}>
                            <Stack direction="row" spacing={2} alignItems="center">
                                <AccountCircleIcon />
                                <Typography>{roomManager.name}</Typography>
                            </Stack>
                        </Card>
                    ) : (
                        <Typography color="text.secondary">No room manager</Typography>
                    )}
                </Stack>

                <Stack spacing={2}>
                    <Typography variant="subtitle1">Players</Typography>
                    {regularParticipants.length > 0 ? (
                        regularParticipants.map(participant => (
                            <Card key={participant.id} sx={{ backgroundColor: 'lightslategray', p: 1 }}>
                                <Stack direction="row" spacing={2} alignItems="center">
                                    <AccountCircleIcon />
                                    <Typography>{participant.name}</Typography>
                                </Stack>
                            </Card>
                        ))
                    ) : (
                        <Typography color="text.secondary">No players</Typography>
                    )}
                </Stack>
            </Stack>
        </Card>
    );
};

export default PlayersSection;
