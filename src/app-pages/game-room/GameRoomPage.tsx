'use client';

import React from 'react';

import { Button, Card, CircularProgress, Container, OutlinedInput, Stack, Typography, alpha } from '@mui/material';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import PolylineIcon from '@mui/icons-material/Polyline';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

import { axiosInstance } from '@/configs/axiosInstance';
import { TOAST_MESSAGES } from '@/constants/toastMessages';

const styles = {
    card: {
        padding: '24px',
        background: alpha('#fff', 0.1),
        backdropFilter: 'blur(10px)',
        border: '1px solid',
        borderColor: alpha('#fff', 0.2),
        borderRadius: 2,
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    },
    button: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderColor: 'transparent',

        '&:hover': {
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            opacity: 0.9,
        },
    },
};

const GameRoomPage = () => {
    const router = useRouter();
    const [roomName, setRoomName] = React.useState<string>('');
    const [roomCode, setRoomCode] = React.useState<string>('');
    const [loadingCreate, setLoadingCreate] = React.useState<boolean>(false);
    const [loadingConnect, setLoadingConnect] = React.useState<boolean>(false);

    const handleCreateRoom = async () => {
        setLoadingCreate(true);
        try {
            const response = await axiosInstance.post('/game-room/create', {
                name: roomName,
            });

            if (!response.data.roomUuid) {
                toast.error(TOAST_MESSAGES.ERROR.ROOM_CREATED);
                setLoadingCreate(false);

                return null;
            }

            router.push(`/game-room/${response.data.roomUuid}`);
            toast.success(TOAST_MESSAGES.SUCCESS.ROOM_CREATED);
            setLoadingCreate(false);
        } catch (error) {
            toast.error(TOAST_MESSAGES.ERROR.ROOM_CREATED);
        }

        return null;
    };

    const handleConnectToRoom = async () => {
        setLoadingConnect(true);
        try {
            const response = await axiosInstance.post(`/game-room/connect/${roomCode}`);

            if (!response.data.roomUuid) {
                toast.error(TOAST_MESSAGES.ERROR.ROOM_CONNECTED);
                setLoadingConnect(false);

                return null;
            }

            router.push(`/game-room/${response.data.roomUuid}`);
            toast.success(TOAST_MESSAGES.SUCCESS.ROOM_CONNECTED);
            setLoadingConnect(false);
        } catch (error) {
            toast.error(TOAST_MESSAGES.ERROR.ROOM_CONNECTED);
            setLoadingConnect(false);
        }

        return null;
    };

    return (
        <Container maxWidth="md">
            <Stack spacing={2} alignSelf="center" textAlign="left">
                <Stack direction="row" alignItems="center" alignSelf="center" spacing={2}>
                    <PeopleAltOutlinedIcon color="primary" />
                    <Typography variant="h4">Play Quiz Games with Friends</Typography>
                </Stack>
                <Typography alignSelf="center">
                    Challenge your friends in exciting quiz games! Create a private room or join an existing one.
                </Typography>

                <Card sx={styles.card}>
                    <Stack spacing={2}>
                        <Stack direction="row" alignItems="center" spacing={2}>
                            <VpnKeyOutlinedIcon color="primary" />
                            <Typography variant="h6">Become a Room Administrator</Typography>
                        </Stack>
                        <Stack maxWidth={300}>
                            <OutlinedInput
                                type="text"
                                placeholder="Enter Room Name"
                                value={roomName}
                                onChange={e => setRoomName(e.target.value)}
                            />
                        </Stack>
                        <Stack alignSelf="flex-start" width={{ xs: '100%', sm: 'auto' }}>
                            <Button
                                size="large"
                                variant="contained"
                                onClick={handleCreateRoom}
                                disabled={loadingCreate}
                                startIcon={loadingCreate ? <CircularProgress size={24} /> : <AutoAwesomeOutlinedIcon />}
                            >
                                Create Room
                            </Button>
                        </Stack>
                    </Stack>
                </Card>
                <Card sx={styles.card}>
                    <Stack spacing={2}>
                        <Typography variant="h6">Join as Player</Typography>
                        <Stack justifyContent="space-between">
                            <Stack direction={{ xs: 'column', sm: 'row' }} alignItems="center" spacing={2}>
                                <OutlinedInput
                                    type="text"
                                    value={roomCode}
                                    fullWidth
                                    placeholder="Enter Room Code"
                                    onChange={e => setRoomCode(e.target.value)}
                                />
                                <Stack width={{ xs: '100%', sm: 'auto' }}>
                                    <Button
                                        size="large"
                                        variant="contained"
                                        onClick={handleConnectToRoom}
                                        disabled={loadingConnect}
                                        startIcon={loadingConnect ? <CircularProgress size={24} /> : <PolylineIcon />}
                                        sx={styles.button}
                                    >
                                        Connect
                                    </Button>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                </Card>
            </Stack>
        </Container>
    );
};

export default GameRoomPage;
