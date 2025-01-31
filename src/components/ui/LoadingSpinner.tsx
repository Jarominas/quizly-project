import CircularProgress from '@mui/material/CircularProgress';
import { Stack } from '@mui/material';

export default function LoadingSpinner() {
    return (
        <Stack alignSelf="center">
            <CircularProgress />
        </Stack>
    );
}
