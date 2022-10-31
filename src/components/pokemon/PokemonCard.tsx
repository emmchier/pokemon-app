import { FC, useContext, useState } from 'react';

import { SmallPokemon } from '../../interfaces';
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { ModeContext } from '../../context/ui/ModeContext';
import localFavourites, { onToggleFavorite } from '../../utils/localFavourites';
import { PokemonContext } from '../../context/pokemon';

interface PokemonCardTypes {
  pokemon?: SmallPokemon;
  pokemonId?: number;
  isFavourite?: boolean;
  onClick?: () => void;
}

export const PokemonCard: FC<PokemonCardTypes> = ({
  pokemon = {},
  pokemonId = 0,
  isFavourite = false,
  onClick = () => {},
}) => {
  const { isDarkMode } = useContext(ModeContext);
  const { setFavoritePokemons } = useContext(PokemonContext);
  const [isInFavorites, setIsInFavorites] = useState(localFavourites.existInFavorites(pokemonId));

  const handleUndoFavourite = () => {
    onToggleFavorite(pokemonId, isInFavorites, setIsInFavorites);
    setFavoritePokemons(localFavourites.pokemons());
  };

  return (
    <Card sx={{ borderRadius: 5, p: isFavourite === true ? 2 : 0 }}>
      <CardActionArea onClick={onClick}>
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
            image={
              isFavourite === false
                ? pokemon.img
                : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`
            }
            alt={pokemon ? pokemon.name : 'a kind of pokemon'}
          />
        </div>
        {isFavourite === false && (
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
                {pokemon ? pokemon.name : ''}
              </Typography>
            </Box>
          </CardContent>
        )}
      </CardActionArea>
      {isFavourite === true && (
        <Button variant="outlined" fullWidth onClick={handleUndoFavourite}>
          Undo
        </Button>
      )}
    </Card>
  );
};
