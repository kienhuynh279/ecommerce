import { makeStyles } from '@mui/styles';

const langStyle = makeStyles(() => ({
  '@global': {
    '.lang-code': {
      marginLeft: '8px',
    },
  },
  root: {
    backgroundColor: 'var(--admin-gray)',
    padding: '2px 6px !important',
    borderRadius: '22px',

    '& .MuiInputBase-root': {
      borderRadius: '18px!important',
      border: 'none',

      '&:hover::before': {
        borderBottom: 'none',
      },

      '&:hover::after': {
        borderBottom: 'none',
      },

      '&::before': {
        borderBottom: 'none!important',
      },

      '&::after': {
        borderBottom: 'none',
      },
    },
    '& .admin-flag-icon': {
      marginRight: '8px',
    },
    '&.language': {
      '&.outlined': {
        '& .MuiSelect-select': {
          paddingRight: '30px!important',
          height: '40px!important',
        },
        '& .MuiSelect-root': {
          borderRadius: '20px!important',
        },
        '& .lang-code': {
          marginLeft: '0!important',
        },
        '& .lang-item': {
          height: '100%',
          lineHeight: '40px',

          '& .lang-sep, & .lang-name': {
            display: 'none',
          },
        },
      },
    },
  },
})) as Function;

export default langStyle;
