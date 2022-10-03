import { makeStyles } from '@mui/styles';

const commonStyle = makeStyles(() => ({
  '@global': {
    'body, #root': {
      fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
      color: 'var(--admin-secondary)',
      fontSize: 'var(--admin-fontsize)',
      backgroundColor: 'var(--admin-gray)',
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
  },
})) as Function;

export default commonStyle;
