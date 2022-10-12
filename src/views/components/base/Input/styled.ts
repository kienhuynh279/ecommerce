import { SxBaseApp } from 'types/app';

export const SxSelectDisabled: SxBaseApp = {
  '& .Mui-disabled': {
    WebkitTextFillColor: 'var(--admin-disable)',
    '& .MuiInput-input': {
      backgroundColor: '#d7d8e4 !important',
      color: '#353535',
      fontWeight: 500,
    },
  },
};
