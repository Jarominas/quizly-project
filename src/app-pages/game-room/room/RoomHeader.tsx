import React from 'react';

import { IconButton, Stack, Typography } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';
import { toast } from 'react-toastify';

import { copyToClipboard } from '@/utils/helpers/copyToClipboard';
import { TOAST_MESSAGES } from '@/constants/toastMessages';

const RoomHeader = ({ roomUuid }: { roomUuid: string }) => {
    const [isCopied, setIsCopied] = React.useState<boolean>(false);

    const handleCopyUuid = async () => {
        const success = await copyToClipboard(roomUuid);

        if (success) {
            setIsCopied(true);
            toast.success(TOAST_MESSAGES.SUCCESS.COPY_SUCCESS);

            setTimeout(() => {
                setIsCopied(false);
            }, 2000);
        }
    };

    return (
        <Stack spacing={2} alignSelf="flex-end">
            <Typography variant="h6">Give that number to players so they can connect to Room</Typography>
            <Stack direction="row" alignItems="center" spacing={2} justifyContent="space-between">
                <Typography variant="h6">{roomUuid}</Typography>
                <IconButton onClick={handleCopyUuid}>
                    {isCopied ? <CheckIcon color="success" /> : <ContentCopyIcon />}
                </IconButton>
            </Stack>
        </Stack>
    );
};

export default RoomHeader;
