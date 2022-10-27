import { Button, styled } from '@mui/material';
import Box from '@mui/material/Box';

export const CardDashboard = styled(Box)(() => ({
  height: '100vh',
  margin: '0px',
}));

export const ButtonReport = styled(Button)(() => ({
  height: '36px',
  backgroundColor: 'var(--admin-primary)',
  color: 'var(--admin-white)',
  textTransform: 'initial',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  '& svg': {
    fontSize: '1.2rem !important',
    margin: '2px -4px 0 4px !important',
  },

  '&:hover': {
    color: 'var(--admin-primary)',
  },
}));

export const BoxOverview = styled(Box)(() => ({
  marginTop: '12px',
  backgroundColor: 'var(--admin-white)',
  display: 'flex',
  height: '165px',
  borderRadius: '8px',
}));
