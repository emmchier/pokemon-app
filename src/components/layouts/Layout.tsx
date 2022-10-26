import Head from 'next/head';
import { FCC } from '../../types';

import { Box } from '@mui/material';

import { Navbar } from '../ui';

interface LayoutTypes {
  title?: string;
}

export const Layout: FCC<LayoutTypes> = ({ children, title = 'PokeApp' }) => {
  return (
    <Box sx={{ flexFlow: 1 }}>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <Box sx={{ padding: '10px 20px' }}>{children}</Box>
    </Box>
  );
};
