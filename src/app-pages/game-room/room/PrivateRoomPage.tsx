import React from 'react';

import { Stack } from '@mui/material';

import RoomRoleBasedRender from '@/components/auth/RoomRoleBasedRender';
import useRoomParticipants from '@/hooks/useRoomParticipants';
import useRoomQuizzes from '@/hooks/useRoomQuizzes';
import { RoomQuiz, RoomQuizResponse } from '@/models';
import useQuizResponse from '@/hooks/useQuizResponse';

import RoomHeader from './RoomHeader';
import QuizManagement from './QuizManagementSection';
import QuestionPreview from './QuestionPreviewSection';
import PlayersSection from './PlayersSection';
import PlayerContent from './PlayerContent';

interface PrivateRoomPageProps {
    roomUuid: string;
}

interface ManagerContentProps {
    roomUuid: string;
    quizzes: RoomQuiz[];
    responses: RoomQuizResponse[];
}

const ManagerContent = ({ roomUuid, quizzes, responses }: ManagerContentProps) => (
    <Stack flex="1" spacing={2}>
        <QuizManagement roomUuid={roomUuid} quizzes={quizzes} responses={responses} />
        <QuestionPreview roomUuid={roomUuid} quizzes={quizzes} />
    </Stack>
);

const PrivateRoomPage = ({ roomUuid }: PrivateRoomPageProps) => {
    const { userRoomRole } = useRoomParticipants(roomUuid);
    const { quizzes } = useRoomQuizzes(roomUuid);
    const { responses } = useQuizResponse(roomUuid);

    return (
        <Stack spacing={2}>
            <RoomHeader roomUuid={roomUuid} />
            <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" spacing={2}>
                <RoomRoleBasedRender allowedRoles={['roomManager']} userRoomRole={userRoomRole}>
                    <ManagerContent roomUuid={roomUuid} quizzes={quizzes} responses={responses} />
                </RoomRoleBasedRender>
                <RoomRoleBasedRender allowedRoles={['participant']} userRoomRole={userRoomRole}>
                    <PlayerContent />
                </RoomRoleBasedRender>

                <Stack flex="0.5">
                    <PlayersSection roomUuid={roomUuid} />
                </Stack>
            </Stack>
        </Stack>
    );
};

export default PrivateRoomPage;
