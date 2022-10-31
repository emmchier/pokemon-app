import { FC, useContext, useState, useEffect } from 'react';

import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton, Paper } from '@mui/material';
import { PokemonContext } from '../../../context/pokemon/PokemonContext';
import { SmallPokemon } from '../../../interfaces';
import { CancelRounded } from '@mui/icons-material';

export const SearchInput: FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { pokemons, setFilteredPokemons } = useContext(PokemonContext);

  useEffect(() => {
    searchTerm === '' && setFilteredPokemons(pokemons);
  }, [searchTerm]);

  const reset = () => {
    setSearchTerm('');
    setFilteredPokemons(pokemons);
  };

  const onSearchTerm = (e: any) => {
    e.preventDefault();
    if (searchTerm.trim().length === 0) return;
    const state: SmallPokemon[] = pokemons.filter((pokemon) => pokemon.name.includes(searchTerm));
    setFilteredPokemons(state);
  };

  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: { xs: '100%', sm: 400 } }}
    >
      <InputBase
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Pokemon"
        inputProps={{ 'aria-label': `search for ${searchTerm}` }}
        onKeyDown={(e) => (e.key === 'Enter' ? onSearchTerm(e) : null)}
      />
      {searchTerm.trim().length >= 1 && (
        <IconButton
          onClick={reset}
          type="button"
          sx={{ p: '10px' }}
          aria-label="reset input search"
        >
          <CancelRounded />
        </IconButton>
      )}
      <IconButton
        onClick={onSearchTerm}
        type="button"
        sx={{ p: '10px' }}
        aria-label={`search for ${searchTerm}`}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};
