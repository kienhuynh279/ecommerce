import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#011F82',
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
          borderRadius: '8px',
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          color: 'red !important',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: '15px 16px',
          fontSize: '14px',
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          '& .MuiTableCell-root': {
            backgroundColor: '#fff',
            fontSize: '16px',
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: 0.5,
            textTransform: 'uppercase',
            borderBottom: '1px solid  #000 !important',
          },
          '& .MuiTableCell-paddingCheckbox': {
            paddingTop: 4,
            paddingBottom: 4,
          },
        },
      },
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          '& .MuiTable-root': {
            maxWidth: '105px',
          },
          '&::-webkit-scrollbar': {
            width: '5px',
            height: '5px',
          },
          '&::-webkit-scrollbar-track': {
            borderRadius: '20px',
            marginTop: '55px',
          },
          '&::-webkit-scrollbar-thumb': {
            borderRadius: '20px',
            backgroundColor: '#d5d5d5',
          },
        },
      },
    },
    MuiTableBody: {
      styleOverrides: {
        root: {
          fontSize: '14px',
          '& .MuiTableRow-root': {
            backgroundColor: '#fff',

            ':hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.07)',
            },
            '&:nth-of-type(odd)': {
              backgroundColor: 'rgba(0, 0, 0, 0.02)',
              ':hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.07)',
              },
            },
            '&:last-child td, &:last-child th': {
              border: 0,
            },
          },
        },
      },
    },
  },
});
export default theme;
