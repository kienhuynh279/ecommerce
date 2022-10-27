import { makeStyles } from '@mui/styles';

const wrapperStyle = makeStyles(() => ({
  root: {
    transition: 'all ease 0.3s',
    marginLeft: 'var(--admin-sidebar-width)',
    width: 'calc(100% - var(--admin-sidebar-width))',
    paddingTop: 'var(--admin-topbar-height)',
    '&>div>div': {
      '&>div:nth-of-type(2)': {
        visibility: 'hidden',
      },
      // '&>div:nth-of-type(3)': {
      //   visibility: 'hidden',
      // }
    },
  },

  wrapper: {
    padding: '16px',
    height: 'auto !important',
    minHeight: '100% !important',
    // overflowX: 'hidden'
  },
})) as Function;

export default wrapperStyle;
