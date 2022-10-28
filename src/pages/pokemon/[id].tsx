import { GetStaticProps, NextPage, GetStaticPaths } from 'next';

import { Layout } from '../../components/layouts';
import { Pokemon } from '../../interfaces';
import { getPokemonInfo } from '../../utils';

interface Props {
  pokemon: Pokemon;
}

const PokemonByIdPage: NextPage<Props> = ({ pokemon }) => {
  return (
    <Layout title={pokemon.name}>
      <h1>{pokemon.name} </h1>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemonsArray = [...Array(152)].map((value, index) => `${index + 1}`);

  return {
    paths: pokemonsArray.map((id) => ({
      params: { id },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };

  return {
    props: {
      pokemon: await getPokemonInfo(id),
    },
  };
};

export default PokemonByIdPage;
