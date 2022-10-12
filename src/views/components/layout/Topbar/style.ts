import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

const topbarStyle = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: 'var(--admin-white) !important',
    color: '#353535 !important',
    transition: 'box-shadow 300ms cubic-bezier(0.2, 0, 0.2, 1) 0ms, all ease 0.3s !important',

    '& .admin-topbar-toolbar': {
      marginLeft: 'var(--admin-sidebar-width)',

      [theme.breakpoints.up('sm')]: {
        paddingLeft: '30px',
        paddingRight: '30px',
      },

      '&-box': {
        position: 'relative',

        '& .admin-topbar-left': {
          // left: '48px'
        },

        '& .admin-topbar-center': {
          transform: 'translateX(-48px)',

          '& img': {
            height: '48px',
          },
        },
      },

      '& #admin-topbar-user': {
        backgroundColor: '#f2f3f9',
      },
    },

    '& .admin-topbar-icon': {
      fontSize: '18px',
    },
    '& .date-view': {
      marginLeft: '10px',
      display: 'flex',
      position: 'relative',

      '&>svg': {
        zIndex: 1,
        position: 'absolute',
        top: 12,
        left: 13,
      },
      '&>div': {
        '&>div>div': {
          width: '130px',
          height: '40px',
          borderRadius: '20px',
          '&>input': {
            color: 'black',
            textAlign: 'center',
            fontSize: '14px',
            paddingLeft: '30px !important',
          },
          '&>input.Mui-disabled': {
            backgroundColor: 'unset !important',
          },
        },
      },
    },
  },
})) as Function;

export default topbarStyle;
