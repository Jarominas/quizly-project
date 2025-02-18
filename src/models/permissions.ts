import { UserRole } from './roles';

export type NavigationPermission = {
    roles: UserRole[];
    isAuthenticated: boolean;
};
