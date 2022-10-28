import { FC, useContext, useState, useEffect } from 'react';

import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton, Paper } from '@mui/material';
import { PokemonContext } from '../../../context/pokemon/PokemonContext';
import { SmallPokemon } from '../../../interfaces';

export const SearchInput: FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { pokemons, setFilteredPokemons } = useContext(PokemonContext);

  useEffect(() => {
    searchTerm === '' && setFilteredPokemons(pokemons);
  }, [searchTerm]);

  const onSearchTerm = (e: any) => {
    e.preventDefault();
    if (searchTerm.trim().length === 0) return;
    const state: SmallPokemon[] = pokemons.filter((pokemon) => pokemon.name.includes(searchTerm));
    setFilteredPokemons(state);
  };

  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
      <InputBase
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Pokemon"
        inputProps={{ 'aria-label': 'search pokemon' }}
        onKeyDown={(e) => (e.key === 'Enter' ? onSearchTerm(e) : null)}
      />
      <IconButton onClick={onSearchTerm} type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};
