import { Button, styled, Typography } from '@mui/material';
import Box from '@mui/material/Box';

export const CardDashboard = styled(Box)(() => ({
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
  display: 'flex',
  flexDirection: 'column',
  height: '180px',
  borderRadius: '8px',
  backgroundColor: '#fff',
  padding: '20px',
}));

export const BoxStatistis = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  backdropFilter: 'blur(20px)',
  borderRadius: '8px',
  width: '100%',
}));

export const TextTitleStatis = styled(Typography)(() => ({
  fontSize: '14px',
  marginLeft: '20px',
  paddingTop: '12px',
  color: '#696964',
}));

export const NumberStatis = styled(Typography)(() => ({
  fontSize: '36px',
  fontWeight: 700,
  marginLeft: '12px',
}));

export const BoxNumberStatis = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-end',
  paddingRight: '12px',
  height: '100%',
  width: '100%',
  color: '#353535',
}));
