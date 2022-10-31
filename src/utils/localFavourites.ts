const toggleFavorite = (id: number) => {
  let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

  if (favorites.includes(id)) {
    favorites = favorites.filter((pokeId) => pokeId !== id);
  } else {
    favorites.push(id);
  }

  localStorage.setItem('favorites', JSON.stringify(favorites));
};

const existInFavorites = (id: number): boolean => {
  if (typeof window === 'undefined') return false;

  const favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

  return favorites.includes(id);
};

const pokemons = (): number[] => JSON.parse(localStorage.getItem('favorites') || '[]');

export const onToggleFavorite = (
  id: number,
  isInFavorites: boolean,
  setIsInFavorites: (e: boolean) => void
) => {
  toggleFavorite(id);
  setIsInFavorites(!isInFavorites);

  if (isInFavorites) return;
};

export type modeType = 'dark' | 'light';

const getLocalMode = () => localStorage.getItem('modeType') || '';

export default {
  existInFavorites,
  toggleFavorite,
  pokemons,
  getLocalMode,
};
