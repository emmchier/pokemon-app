import { createContext } from 'react';

interface ContextProps {
  isDarkMode: boolean;
  setIsDarkMode: (e: boolean) => void;
}

export const ModeContext = createContext({} as ContextProps);
