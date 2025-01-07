import React from 'react';

import '@/styles/globals.css';
import AdminPanelLayout from '@/components/ui/layouts/AdminPanelLayout';

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <AdminPanelLayout>{children}</AdminPanelLayout>;
}
