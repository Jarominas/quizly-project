import React from 'react';

import PermissionContext from '@/context/PermissionContext';

export const usePermission = () => React.useContext(PermissionContext);
