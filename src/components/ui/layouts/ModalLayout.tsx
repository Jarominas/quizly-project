'use client';

import React from 'react';

import { IconButton, Modal, Stack } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface ModalContainerProps {
    children: React.ReactNode;
    open: boolean;
    handleClose: () => void;
}

const styles = {
    modalContainer: {
        marginTop: '0px',
    },
    modal: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: { xs: '95%', sm: '95%', md: '80%', lg: '50%' },
        maxHeight: '99%',
        overflow: 'auto',
        bgcolor: 'background.paper',
        borderRadius: 2,
        boxShadow: 24,

        p: 4,
        '& .MuiFormLabel-root': {
            fontSize: '1rem',
            top: '-8px',
        },
    },
    iconButton: {
        position: 'absolute',
        right: 8,
        top: 8,
        color: (theme: any) => theme.palette.grey[500],
    },
};

const ModalLayout = ({ children, open, handleClose }: ModalContainerProps) => (
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={styles.modalContainer}
    >
        <Stack sx={styles.modal} spacing={3}>
            <IconButton aria-label="close" onClick={handleClose} sx={styles.iconButton}>
                <CloseIcon />
            </IconButton>
            {children}
        </Stack>
    </Modal>
);

export default ModalLayout;
