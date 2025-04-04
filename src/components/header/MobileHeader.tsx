import React from 'react';

import Link from 'next/link';

import { Box, Button, Divider, Drawer, IconButton, Stack } from '@mui/material';
import { XMarkIcon, Bars2Icon } from '@heroicons/react/24/outline';

import { APP_NAVIGATION_LIST, NAVIGATION_PATHS } from '@/configs/pageNavigation';

interface MobileNavbarProps {
    toggleDrawer: (_open: boolean) => () => void;
    open: boolean;
}

const styles = {
    container: {
        display: { sm: 'flex', md: 'none' },
    },
    box: {
        p: 2,
        backgroundColor: 'background.default',
    },
    iconBox: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    divider: {
        my: 3,
    },
};

const MobileNavbar = ({ toggleDrawer, open }: MobileNavbarProps) => (
    <Box sx={styles.container}>
        <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
            <Bars2Icon />
        </IconButton>
        <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
            <Box sx={styles.box}>
                <Box sx={styles.iconBox}>
                    <IconButton onClick={toggleDrawer(false)}>
                        <XMarkIcon />
                    </IconButton>
                </Box>
                <Divider sx={styles.divider} />
                <Stack direction="column">
                    {APP_NAVIGATION_LIST.map((item, index) => (
                        <Link href={item.link} key={index}>
                            <Button
                                variant="text"
                                color="info"
                                size="small"
                                sx={{ minWidth: 0 }}
                                startIcon={item.icon ? <item.icon /> : null}
                                onClick={toggleDrawer(false)}
                            >
                                {item.name}
                            </Button>
                        </Link>
                    ))}
                </Stack>

                <Stack spacing={1} direction="column">
                    <Button
                        component={Link}
                        href={NAVIGATION_PATHS.SIGN_IN}
                        color="primary"
                        variant="outlined"
                        size="small"
                    >
                        Login
                    </Button>
                    <Button
                        component={Link}
                        href={NAVIGATION_PATHS.SIGN_UP}
                        color="primary"
                        variant="contained"
                        fullWidth
                    >
                        Sign up
                    </Button>
                </Stack>
            </Box>
        </Drawer>
    </Box>
);

export default MobileNavbar;
