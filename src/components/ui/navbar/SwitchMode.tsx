import React, { FC } from 'react';

import { FormControlLabel, Switch } from '@mui/material';

interface SwitchModeTypes {
  isDarkMode?: boolean;
  setIsDarkMode: (e: boolean) => void;
}

export const SwitchMode: FC<SwitchModeTypes> = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <FormControlLabel
      control={
        <Switch
          onChange={() => setIsDarkMode(!isDarkMode)}
          defaultChecked
          inputProps={{ 'aria-label': isDarkMode === true ? 'Dark' : 'Light' }}
        />
      }
      label={isDarkMode === true ? 'Dark' : 'Light'}
    />
  );
};
