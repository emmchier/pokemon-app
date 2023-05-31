import { useContext, useEffect } from 'react';

import { Layout } from '../../components/layouts';
import { localFavorites } from '../../utils';
import { EmptyContent } from '../../components';
import { FavoritePokemons } from '../../components/pokemon/FavoritePokemons';
import { PokemonContext } from '../../context/pokemon';
import { Box } from '@mui/material';

const FavoritesPage = () => {
  const { favoritePokemons, setFavoritePokemons } = useContext(PokemonContext);

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons());
  }, []);

  return (
    <Layout title="Pokémons - Favoritos">
      <Box component="section" sx={{ height: '100vh' }}>
        {favoritePokemons.length === 0 ? (
          <EmptyContent message="No favourites yet" />
        ) : (
          <FavoritePokemons pokemons={favoritePokemons} />
        )}
      </Box>
    </Layout>
  );
};

export default FavoritesPage;
