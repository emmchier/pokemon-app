import { createContext } from 'react';
import { SmallPokemon } from '../../interfaces';

interface PokemonContextTypes {
  pokemons: SmallPokemon[];
  setPokemons: (pokemonList: SmallPokemon[]) => void;
  filteredPokemons: SmallPokemon[];
  setFilteredPokemons: (pokemonList: SmallPokemon[]) => void;
  favoritePokemons: number[];
  setFavoritePokemons: (pokemonList: number[]) => void;
}

export const PokemonContext = createContext({} as PokemonContextTypes);
