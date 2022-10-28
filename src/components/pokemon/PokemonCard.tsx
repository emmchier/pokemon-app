import { FC, useContext } from 'react';
import { useRouter } from 'next/router';

import { SmallPokemon } from '../../interfaces';
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { ModeContext } from '../../context/ui/ModeContext';

interface PokemonCardTypes {
  pokemon: SmallPokemon;
}

export const PokemonCard: FC<PokemonCardTypes> = ({ pokemon }) => {
  const router = useRouter();

  const { isDarkMode } = useContext(ModeContext);

  return (
    <Card onClick={() => router.push(`/name/${pokemon.name}`)} sx={{ borderRadius: 5 }}>
      <CardActionArea>
        <div
          style={{
            margin: '30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: 200,
            maxHeight: 200,
          }}
        >
          <CardMedia
            sx={{
              width: '100%',
              height: '100%',
            }}
            component="img"
            height="140"
            image={pokemon.img}
            alt={pokemon.name}
          />
        </div>
        <CardContent>
          <Box
            sx={{
              background: isDarkMode === true ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0.1)',
              position: 'relative',
              borderRadius: 3,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography
              gutterBottom
              variant="h6"
              component="h4"
              sx={{
                textTransform: 'capitalize',
                margin: '5px 10px',
                color: isDarkMode === true ? '#FFFFFF' : '#000000',
              }}
            >
              {pokemon.name}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
