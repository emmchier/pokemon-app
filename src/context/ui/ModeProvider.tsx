import { useReducer, useState } from 'react';

import { FCC } from '../../types';
import { ModeContext } from '.';
import { CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material';
import { darkTheme, globalStyle, lightTheme } from '../../styles/themes';

export const ModeProvider: FCC = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <ModeContext.Provider
      value={{
        isDarkMode,
        setIsDarkMode,
      }}
    >
      <ThemeProvider theme={isDarkMode === true ? darkTheme : lightTheme}>
        <GlobalStyles styles={globalStyle} />
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ModeContext.Provider>
  );
};
