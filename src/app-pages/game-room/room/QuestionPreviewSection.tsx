import React from 'react';

import { Card, Stack, Typography } from '@mui/material';

const QuestionPreview = () => (
    <Card>
        <Stack>
            <Typography variant="h6">Question Preview</Typography>
            <Typography>No questions added yet. Click "Add New Question" to create your quiz.</Typography>
        </Stack>
    </Card>
);

export default QuestionPreview;
