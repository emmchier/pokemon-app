import type { AppProps } from 'next/app';

import { ModeProvider } from '../context/ui';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ModeProvider>
      <Component {...pageProps} />
    </ModeProvider>
  );
}
