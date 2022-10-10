import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

const variablesStyle = makeStyles((theme: Theme) => ({
  '@global': {
    ':root': {
      '--admin-primary': theme.palette.primary.main,
      '--admin-secondary': theme.palette.secondary.main,
      '--admin-danger': theme.palette.error.main,
      '--admin-success': theme.palette.success.main,
      '--admin-warning': theme.palette.warning.main,
      '--admin-background-root': '#F5F7FF',
      '--admin-gray': '#eeeff5',
      '--admin-yellow': '#f8ad08',
      '--admin-pink': '#5b6bff',
      '--admin-black': '#33375d',
      '--admin-white': '#fff',
      '--admin-fontsize': '14px',
      '--admin-sidebar-width': '288px',
      '--admin-sidebar-collapsed-width': '90px',
      '--admin-sidebar-padding': '20px',
      '--admin-topbar-height': '66px',
    },
  },
})) as Function;

export default variablesStyle;
