import { UserRole } from '@/models/roles';

export const USER_ACCESS_ACTIONS: Record<UserRole, string[]> = {
    ADMINISTRATOR: [
        'navbar:btn.home',
        'navbar:btn.quiz',
        'navbar:btn.game-room',
        'navbar:btn.achievements',
        'navbar:btn.admin-panel',
        'navbar:btn.admin-panel.home',
        'navbar:btn.admin-panel.users',
        'navbar:btn.admin-panel.quizes',
    ],
    MANAGER: ['navbar:btn.home', 'navbar:btn.quiz', 'navbar:btn.game-room', 'navbar:btn.achievements'],
    ROOM_MANAGER: ['navbar:btn.home', 'navbar:btn.quiz', 'navbar:btn.game-room', 'navbar:btn.game-room'],
    USER: ['navbar:btn.home', 'navbar:btn.quiz', 'navbar:btn.game-room'],
};
