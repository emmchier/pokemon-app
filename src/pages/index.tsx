import { Box } from '@mui/material';
import { GetStaticProps, NextPage } from 'next';
import { useContext, useEffect, useState } from 'react';
import pokemonApi from '../api/pokemonApi';
import { EmptyContent } from '../components';
import { Layout } from '../components/layouts';
import { PokemonList } from '../components/pokemon/PokemonList';
import { SearchInput } from '../components/ui/search-input';
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
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '30px',
        }}
      >
        <SearchInput />
      </Box>
      {filteredPokemons.length === 0 ? (
        <EmptyContent message="No results match the search" />
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
