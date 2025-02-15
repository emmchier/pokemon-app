import { Grid } from '@mui/material';
import { useRouter } from 'next/router';
import { FC } from 'react';

import { SmallPokemon } from '../../interfaces';
import { PokemonCard } from './';

interface PokemonListTypes {
  list: SmallPokemon[];
}

export const PokemonList: FC<PokemonListTypes> = ({ list }) => {
  const router = useRouter();

  return (
    <Grid container spacing={2}>
      {list?.map((pokemon) => (
        <Grid key={pokemon.id} item xs={12} sm={4} md={3} lg={2}>
          <PokemonCard
            key={pokemon.id}
            onClick={() => router.push(`/name/${pokemon.name}`)}
            pokemon={pokemon}
          />
        </Grid>
      ))}
    </Grid>
  );
};
