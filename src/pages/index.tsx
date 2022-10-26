import { GetStaticProps, NextPage } from 'next';
import pokemonApi from '../api/pokemonApi';

import { Layout } from '../components/layouts';
import { PokemonListResponse, SmallPokemon } from '../interfaces';

interface HomePageTypes {
  pokemonList: SmallPokemon[];
}

const HomePage: NextPage<HomePageTypes> = ({ pokemonList }) => {
  console.log(pokemonList);

  return <Layout title="Poke App"></Layout>;
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokemonApi.get<PokemonListResponse>('/pokemon?limit=151');

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
