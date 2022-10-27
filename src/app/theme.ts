import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4B49AC',
    },
    secondary: {
      main: '#353535',
    },
    error: {
      main: '#eb0029',
    },
    success: {
      main: '#069549',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'var(--admin-background-root)',
          left: 'var(--admin-sidebar-width)',
          width: 'calc(100% - var(--admin-sidebar-width))',
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          borderRadius: '8px'
        }
      }
    }
  },
});

export default theme;
