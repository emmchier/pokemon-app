import { useEffect, useMemo, useState } from 'react';
import { FCC } from '../../types';

import { SmallPokemon } from '../../interfaces';
import { PokemonContext } from './PokemonContext';

export const PokemonProvider: FCC = ({ children }) => {
  const [pokemons, setPokemons] = useState<SmallPokemon[]>([]);
  const [filteredPokemons, setFilteredPokemons] = useState<SmallPokemon[]>([]);

  return (
    <PokemonContext.Provider
      value={{
        pokemons,
        setPokemons,
        filteredPokemons,
        setFilteredPokemons,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
