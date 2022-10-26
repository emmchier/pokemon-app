import React, { FC } from 'react';

import Link from 'next/link';

import { AppBar, FormControlLabel, Switch, Toolbar, Typography } from '@mui/material';

export const Navbar: FC = () => {
  return (
    <AppBar position="sticky">
      <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/">
          <Typography variant="h5" component="h1">
            POKE APP
          </Typography>
        </Link>
        <FormControlLabel
          control={<Switch defaultChecked inputProps={{ 'aria-label': 'Dark Mode' }} />}
          label="Dark Mode"
        />
      </Toolbar>
    </AppBar>
  );
};
