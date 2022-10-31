import { createTheme } from '@mui/material';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#E64C3C',
    },
  },
  components: {
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          color: 'white',
        },
      },
    },
  },
});
