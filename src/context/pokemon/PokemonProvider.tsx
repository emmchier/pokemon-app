import { useState } from 'react';
import { FCC } from '../../types';

import { SmallPokemon } from '../../interfaces';
import { PokemonContext } from './PokemonContext';

export const PokemonProvider: FCC = ({ children }) => {
  const [pokemons, setPokemons] = useState<SmallPokemon[]>([]);
  const [filteredPokemons, setFilteredPokemons] = useState<SmallPokemon[]>([]);
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  return (
    <PokemonContext.Provider
      value={{
        pokemons,
        setPokemons,
        filteredPokemons,
        setFilteredPokemons,
        favoritePokemons,
        setFavoritePokemons,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
