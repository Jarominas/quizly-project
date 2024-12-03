import React from 'react';

import { Box, LinearProgress } from '@mui/material';

interface QuizProgressBarProps {
    showProgress: boolean;
}

const styles = {
    container: {
        width: '100%',
    },
};

const QuizProgressBar = ({ showProgress }: QuizProgressBarProps) => {
    if (!showProgress) return null;

    return (
        <Box sx={styles.container}>
            <LinearProgress variant="determinate" value={50} />
        </Box>
    );
};

export default QuizProgressBar;
