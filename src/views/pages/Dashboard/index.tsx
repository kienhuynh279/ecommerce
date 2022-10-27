import Box from '@mui/material/Box';
import React from 'react';
import { BoxOverview, ButtonReport, CardDashboard } from './style';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <CardDashboard>
      <Box className="w-full flex justify-end items-center">
        <ButtonReport variant="outlined">
          Báo cáo
          <FileDownloadIcon />
        </ButtonReport>
      </Box>

      <BoxOverview className="w-full"></BoxOverview>
    </CardDashboard>
  );
};

export default Dashboard;
