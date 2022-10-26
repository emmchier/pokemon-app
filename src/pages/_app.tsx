import type { AppProps } from 'next/app';

import { CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material';
import { darkTheme, lightTheme, globalStyle } from '../styles/themes';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles styles={globalStyle} />
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
