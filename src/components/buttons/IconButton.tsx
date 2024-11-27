import React from 'react';

import { Button, CircularProgress } from '@mui/material';

interface IconButtonProps {
    text: string;
    loading?: boolean;
    variant?: 'contained' | 'outlined' | 'text';
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    onClick?: () => void;
    icon?: React.ReactNode;
}

const ICON_SIZE = 20;

const IconButton = ({ text, icon, loading, variant, size, disabled, onClick }: IconButtonProps) => (
    <>
        {loading ? (
            <Button variant={variant} size={size} disabled={disabled} endIcon={<CircularProgress size={ICON_SIZE} />}>
                {text}
            </Button>
        ) : (
            <Button onClick={onClick} variant={variant} size={size} disabled={disabled} endIcon={icon}>
                {text}
            </Button>
        )}
    </>
);

export default IconButton;
