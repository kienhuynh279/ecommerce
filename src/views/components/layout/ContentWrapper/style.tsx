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
    },
  },

  wrapper: {
    height: 'auto !important',
    minHeight: '100% !important',
  },
})) as Function;

export default wrapperStyle;
