'use client';

import React from 'react';

import {
    Button,
    Card,
    CircularProgress,
    Container,
    OutlinedInput,
    Stack,
    Typography,
    alpha,
    useTheme,
} from '@mui/material';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { Users, KeyRound, Share2, Sparkles } from 'lucide-react';

import { axiosInstance } from '@/configs/axiosInstance';
import { TOAST_MESSAGES } from '@/constants/toastMessages';
import { useAuth } from '@/hooks/useAuth';

const styles = {
    card: {
        padding: '24px',
        background: alpha('#fff', 0.1),
        backdropFilter: 'blur(10px)',
        borderColor: alpha('#fff', 0.2),
        boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.1)',
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
    const { user } = useAuth();
    const theme = useTheme();
    const router = useRouter();
    const [roomName, setRoomName] = React.useState<string>('');
    const [roomCode, setRoomCode] = React.useState<string>('');
    const [loadingCreate, setLoadingCreate] = React.useState<boolean>(false);
    const [loadingConnect, setLoadingConnect] = React.useState<boolean>(false);

    const handleCreateRoom = async () => {
        if (!user) {
            toast.error(TOAST_MESSAGES.ERROR.AUTH_REQUIRED);

            return;
        }
        setLoadingCreate(true);
        try {
            const response = await axiosInstance.post('/game-room/create', {
                name: roomName,
            });

            if (!response.data.roomUuid) {
                toast.error(TOAST_MESSAGES.ERROR.ROOM_CREATED);
                setLoadingCreate(false);
            }

            router.push(`/game-room/${response.data.roomUuid}`);
            toast.success(TOAST_MESSAGES.SUCCESS.ROOM_CREATED);
            setLoadingCreate(false);
        } catch (error) {
            toast.error(TOAST_MESSAGES.ERROR.ROOM_CREATED);
        }
    };

    const handleConnectToRoom = async () => {
        if (!user) {
            toast.error(TOAST_MESSAGES.ERROR.AUTH_REQUIRED);

            return;
        }
        setLoadingConnect(true);
        try {
            const response = await axiosInstance.post(`/game-room/connect/${roomCode}`);

            if (!response.data.roomUuid) {
                toast.error(TOAST_MESSAGES.ERROR.ROOM_CONNECTED);
                setLoadingConnect(false);
            }

            router.push(`/game-room/${response.data.roomUuid}`);
            toast.success(TOAST_MESSAGES.SUCCESS.ROOM_CONNECTED);
            setLoadingConnect(false);
        } catch (error) {
            toast.error(TOAST_MESSAGES.ERROR.ROOM_CONNECTED);
            setLoadingConnect(false);
        }
    };

    return (
        <Container maxWidth="md">
            <Stack spacing={2} alignSelf="center" textAlign="left">
                <Stack direction="row" alignItems="center" alignSelf="center" spacing={2}>
                    <Users size={48} color={theme.palette.primary.main} />
                    <Typography variant="h4">Play Quiz Games with Friends</Typography>
                </Stack>
                <Typography alignSelf="center" variant="h6">
                    Challenge your friends in exciting quiz games! Create a private room or join an existing one.
                </Typography>

                <Card sx={styles.card}>
                    <Stack spacing={2}>
                        <Stack direction="row" alignItems="center" spacing={2}>
                            <KeyRound size={36} color={theme.palette.primary.main} />
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
                                startIcon={loadingCreate ? <CircularProgress size={24} /> : <Sparkles />}
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
                                        startIcon={loadingConnect ? <CircularProgress size={24} /> : <Share2 />}
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
