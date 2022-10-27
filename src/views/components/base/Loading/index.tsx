import { Box, CircularProgress } from '@mui/material';
import React from 'react';

type Props = {};

const Loading = (props: Props) => {
  return (
    <Box className="wh-full" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <CircularProgress />
    </Box>
  );
};

export default Loading;
