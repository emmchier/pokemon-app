import { FC } from 'react';

import { Grid } from '@mui/material';
import { PokemonCard } from './PokemonCard';
import { useRouter } from 'next/router';

interface Props {
  pokemons: number[];
}

export const FavoritePokemons: FC<Props> = ({ pokemons }) => {
  const router = useRouter();

  return (
    <Grid container spacing={2}>
      {pokemons.map((id) => (
        <Grid key={id} item xs={12} sm={4} md={3} lg={2}>
          <PokemonCard
            pokemonId={id}
            onClick={() => router.push(`/pokemon/${id}`)}
            isFavourite={true}
          />
        </Grid>
      ))}
    </Grid>
  );
};
