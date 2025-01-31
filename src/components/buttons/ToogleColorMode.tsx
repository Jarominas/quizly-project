import IconButton from '@mui/material/IconButton';
import { LightMode, DarkMode } from '@mui/icons-material';

interface ToggleColorModeProps {
    mode: 'dark' | 'light' | null;
    toggleColorMode: () => void;
}

function ToggleColorMode({ mode, toggleColorMode, ...props }: ToggleColorModeProps) {
    return (
        <IconButton onClick={toggleColorMode} color="primary" aria-label="Theme toggle button" size="large" {...props}>
            {mode === 'dark' ? <LightMode fontSize="small" /> : <DarkMode fontSize="small" />}
        </IconButton>
    );
}

export default ToggleColorMode;
