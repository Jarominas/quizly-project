import IconButton from '@mui/material/IconButton';
import { Sun, Moon } from 'lucide-react';

interface ToggleColorModeProps {
    mode: 'dark' | 'light' | null;
    toggleColorMode: () => void;
}

function ToggleColorMode({ mode, toggleColorMode, ...props }: ToggleColorModeProps) {
    return (
        <IconButton onClick={toggleColorMode} aria-label="Theme toggle button" size="large" {...props}>
            {mode === 'dark' ? <Sun /> : <Moon />}
        </IconButton>
    );
}

export default ToggleColorMode;
