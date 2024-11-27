'use client';

import { Stack, Typography } from '@mui/material';

const styles = {
    contentContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: (theme: any) => theme.spacing(5),
        borderRadius: (theme: any) => theme.spacing(1),
        backgroundColor: (theme: any) => theme.palette.background.paper,
        boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)',
        width: '100%',
    },
};

const QuizContent = ({ quiz }: any) => {
    const { text } = quiz.questions[0] ?? {};

    return (
        <Stack sx={styles.contentContainer}>
            <Typography variant="h5">{text}</Typography>
        </Stack>
    );
};

export default QuizContent;
