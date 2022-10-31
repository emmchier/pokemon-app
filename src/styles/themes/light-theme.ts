import { createTheme } from '@mui/material';
import { grey, red } from '@mui/material/colors';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: { default: grey[200] },
    primary: {
      main: '#E64C3C',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: grey[200],
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          color: 'black',
        },
      },
    },
  },
});
