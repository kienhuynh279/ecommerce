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
    },
    MuiCssBaseline: {
      styleOverrides: {
        "*": {
          boxSizing: "border-box",
          "&::-webkit-scrollbar": {
            width: "5px",
            height: "5px",
          },
          "&::-webkit-scrollbar-track": {
            borderRadius: "20px",
            marginTop: "55px",
          },
          "&::-webkit-scrollbar-thumb": {
            borderRadius: "20px",
            backgroundColor: "#d5d5d5",
          },
        },
        html: {
          MozOsxFontSmoothing: "grayscale",
          WebkitFontSmoothing: "antialiased",
          display: "flex",
          flexDirection: "column",
          minHeight: "100%",
          width: "100%",
        },
        body: {
          display: "flex",
          flex: "1 1 auto",
          flexDirection: "column",
          minHeight: "100%",
          width: "100%",
        },
        '.wh-full': {
          width: '100%',
          height: '100%',
        },
        '.w-full': {
          width: '100%',
        },
        '.shadow': {
          boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.16)',
        },
        '.rounded-0': {
          borderRadius: '0!important',
        },
        '.border-top-1': {
          borderTop: '1px solid var(--admin-gray)',
        },
        '.h-full': {
          height: '100%',
        },
        '.btn': {
          marginBottom: '20px',
        },
      }
    }
  },
});

export default theme;
