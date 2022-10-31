import Head from 'next/head';
import { FCC } from '../../types';

import { Box, Container } from '@mui/material';

import { Navbar } from '../ui';
import { Footer } from '../ui/footer/Footer';

interface LayoutTypes {
  title?: string;
}

const origin = typeof window === 'undefined' ? '' : window.location.origin;

export const Layout: FCC<LayoutTypes> = ({ children, title = 'PokeApp' }) => {
  return (
    <Box sx={{ flexFlow: 1 }}>
      <Head>
        <title>{title}</title>
        <meta name="author" content="Emmanuel Chierchie" />
        <meta name="description" content={`Description about ${title}`} />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
        <meta property="og:title" content={`Description about ${title}`} />
        <meta property="og:description" content={`Page about ${title}`} />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>
      <Navbar />
      <Container maxWidth="xl" sx={{ margin: '30px 0' }}>
        {children}
      </Container>
      <Footer />
    </Box>
  );
};
