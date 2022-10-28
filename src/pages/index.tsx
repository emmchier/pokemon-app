import { Box, Typography } from '@mui/material';
import { GetStaticProps, NextPage } from 'next';
import { useContext, useEffect, useState } from 'react';
import pokemonApi from '../api/pokemonApi';

import { Layout } from '../components/layouts';
import { PokemonList } from '../components/pokemon/PokemonList';
import { PokemonContext } from '../context/pokemon/PokemonContext';
import { PokemonListResponse, SmallPokemon } from '../interfaces';

interface HomePageTypes {
  pokemonList: SmallPokemon[];
}

const HomePage: NextPage<HomePageTypes> = ({ pokemonList }) => {
  const { setPokemons, filteredPokemons, setFilteredPokemons } = useContext(PokemonContext);

  useEffect(() => {
    setPokemons(pokemonList);
    setFilteredPokemons(pokemonList);
  }, []);

  return (
    <Layout title="Poke App">
      {filteredPokemons.length === 0 ? (
        <Box
          sx={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography
            sx={{
              color: '#FFFFFF',
            }}
            variant="h4"
          >
            No results match the search
          </Typography>
        </Box>
      ) : (
        <PokemonList list={filteredPokemons} />
      )}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokemonApi.get<PokemonListResponse>('/pokemon?limit=102');

  const pokemons: SmallPokemon[] = data.results.map((pokemon, i) => ({
    ...pokemon,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      i + 1
    }.svg`,
  }));

  return {
    props: {
      pokemonList: pokemons,
    },
  };
};

export default HomePage;
