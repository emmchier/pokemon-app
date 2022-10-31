import { Favorite } from '@mui/icons-material';
import { Box, Button, Card, CardMedia, Container, Grid, Typography } from '@mui/material';
import { GetStaticProps, NextPage, GetStaticPaths } from 'next';
import Image from 'next/image';
import { useState } from 'react';

import { Layout } from '../../components/layouts';
import { Pokemon } from '../../interfaces';
import { getPokemonInfo } from '../../utils';
import localFavourites, { onToggleFavorite } from '../../utils/localFavourites';

interface Props {
  pokemon: Pokemon;
}

const PokemonByIdPage: NextPage<Props> = ({ pokemon }) => {
  const [isInFavorites, setIsInFavorites] = useState(localFavourites.existInFavorites(pokemon.id));

  return (
    <Layout title={pokemon.name}>
      <Grid container sx={{ height: '100vh' }}>
        <Grid item xs={12} sm={4}>
          <CardMedia
            component="img"
            image={pokemon.sprites.other?.dream_world.front_default || '/img/no-image.svg'}
            alt={pokemon.name}
            width="100%"
            height="auto"
            sx={{
              padding: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          />
        </Grid>

        <Grid item xs={12} sm={8}>
          <Card sx={{ padding: '30px', borderRadius: '20px' }}>
            <Grid
              container
              sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
            >
              <Grid
                item
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  width: { xs: '100%', sm: 'auto' },
                  justifyContent: { xs: 'space-between', sm: 'center' },
                }}
              >
                <Typography variant="h3" sx={{ textTransform: 'capitalize', mr: '15px' }}>
                  {pokemon.name}
                </Typography>
                {isInFavorites === true && <Favorite fontSize="large" color="primary" />}
              </Grid>
              <Grid
                item
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: { xs: '20px', sm: '0' },
                }}
              >
                {isInFavorites === true && (
                  <Typography
                    variant="h6"
                    sx={{ textTransform: 'capitalize', marginRight: '15px' }}
                  >
                    Is in favourites
                  </Typography>
                )}
                <Button
                  color="primary"
                  onClick={() => onToggleFavorite(pokemon.id, isInFavorites, setIsInFavorites)}
                  variant={isInFavorites === true ? 'outlined' : 'contained'}
                >
                  {isInFavorites ? 'Undo' : 'Save in favourites'}
                </Button>
              </Grid>
            </Grid>

            <Box sx={{ marginTop: '30px' }}>
              <Typography sx={{ fontSize: '30px' }}>Sprites:</Typography>
              <Container sx={{ display: 'flex', flexDirection: 'row', marginTop: '30px' }}>
                <Grid container gap={2}>
                  <Grid item>
                    <Image
                      src={pokemon.sprites.front_default}
                      alt={pokemon.name}
                      width={150}
                      height={150}
                    />
                  </Grid>
                  <Grid item>
                    <Image
                      src={pokemon.sprites.back_default}
                      alt={pokemon.name}
                      width={150}
                      height={150}
                    />
                  </Grid>
                  <Grid item>
                    <Image
                      src={pokemon.sprites.front_shiny}
                      alt={pokemon.name}
                      width={150}
                      height={150}
                    />
                  </Grid>
                  <Grid item>
                    <Image
                      src={pokemon.sprites.back_shiny}
                      alt={pokemon.name}
                      width={150}
                      height={150}
                    />
                  </Grid>
                </Grid>
              </Container>
            </Box>
          </Card>
        </Grid>
      </Grid>
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
