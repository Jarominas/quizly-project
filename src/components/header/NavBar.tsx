import Link from 'next/link';

import { Box, Button } from '@mui/material';

import { APP_NAVIGATION_LIST } from '@/configs/pageNavigation';
import { usePermission } from '@/hooks/usePermission';

export default function NavBar() {
    const { isAllowedTo } = usePermission();

    return (
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {APP_NAVIGATION_LIST.filter(item => isAllowedTo(item.permission)).map((item, index) => (
                <Link href={item.link} key={index}>
                    <Button
                        variant="text"
                        color="info"
                        size="small"
                        sx={{ minWidth: 0 }}
                        startIcon={item.icon ? <item.icon /> : null}
                    >
                        {item.name}
                    </Button>
                </Link>
            ))}
        </Box>
    );
}
