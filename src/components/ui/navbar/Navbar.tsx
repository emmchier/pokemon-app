import React, { FC } from 'react';

import Link from 'next/link';

import { AppBar, FormControlLabel, Switch, Toolbar, Typography } from '@mui/material';
import { useContext } from 'react';
import { ModeContext } from '../../../context/ui/ModeContext';

export const Navbar: FC = () => {
  const { isDarkMode, setIsDarkMode } = useContext(ModeContext);

  return (
    <AppBar position="sticky">
      <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/">
          <Typography variant="h5" component="h1">
            POKE APP
          </Typography>
        </Link>
        <FormControlLabel
          control={
            <Switch
              onChange={() => setIsDarkMode(!isDarkMode)}
              defaultChecked
              inputProps={{ 'aria-label': isDarkMode === true ? 'Dark' : 'Light' }}
            />
          }
          label={isDarkMode === true ? 'Dark' : 'Light'}
        />
      </Toolbar>
    </AppBar>
  );
};
