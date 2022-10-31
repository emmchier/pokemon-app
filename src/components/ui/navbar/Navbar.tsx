import React, { FC } from 'react';

import Link from 'next/link';

import { AppBar, Box, Drawer, IconButton, Toolbar, Typography } from '@mui/material';
import { useContext } from 'react';
import { ModeContext } from '../../../context/ui/ModeContext';
import Image from 'next/image';
import { Menu } from '@mui/icons-material';
import { Navigation } from './Navigation';
import { navList } from '../../../domain';
import { grey } from '@mui/material/colors';

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;

export const Navbar: FC = (props: Props) => {
  const { isDarkMode, setIsDarkMode } = useContext(ModeContext);

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Navigation items={navList} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <AppBar component="nav" position="sticky">
        <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/">
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Image src="/img/poke-ball.svg" width={40} height={40} alt="poke ball" />
              <Typography
                variant="h5"
                component="h1"
                sx={{
                  marginLeft: '10px',
                  fontWeight: 'bold',
                  color: isDarkMode ? '#FFFFFF' : '#000000',
                }}
              >
                POK!
              </Typography>
            </Box>
          </Link>
          <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
            <Navigation items={navList} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: 'none' } }}
          >
            <Menu sx={{ color: isDarkMode ? grey[500] : '#000000' }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          anchor="right"
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};
