import Link from 'next/link';

import { Box, Button } from '@mui/material';

import { APP_NAVIGATION_LIST } from '@/configs/pageNavigation';

export default function NavBar() {
    return (
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {APP_NAVIGATION_LIST.map((item, index) => (
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
