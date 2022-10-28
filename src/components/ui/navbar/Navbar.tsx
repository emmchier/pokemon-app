import React, { FC, useState } from 'react';

import Link from 'next/link';

import { AppBar, Box, FormControlLabel, Switch, Toolbar, Typography } from '@mui/material';
import { useContext } from 'react';
import { ModeContext } from '../../../context/ui/ModeContext';
import { SearchInput } from '../search-input';

export const Navbar: FC = () => {
  const { isDarkMode, setIsDarkMode } = useContext(ModeContext);

  return (
    <AppBar position="sticky">
      <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Link href="/">
            <Typography variant="h5" component="h1">
              POKE APP
            </Typography>
          </Link>
          <SearchInput />
        </Box>
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
