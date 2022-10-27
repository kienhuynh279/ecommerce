import { Box } from '@mui/material';
import React from 'react';

export interface OverviewProps {
  label?: string;
  color?: string;
  value?: number;
}

const Overview = (props: OverviewProps) => {
  const { label = '', color = '', value = 0 } = props;
  return <Box></Box>;
};

export default Overview;
