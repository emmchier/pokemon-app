import type { AppProps } from 'next/app';
import { PokemonProvider } from '../context/pokemon/PokemonProvider';

import { ModeProvider } from '../context/ui';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ModeProvider>
      <PokemonProvider>
        <Component {...pageProps} />
      </PokemonProvider>
    </ModeProvider>
  );
}
