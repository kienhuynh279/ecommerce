import Box from '@mui/material/Box';
import React from 'react';
import { ButtonReport, CardDashboard } from './style';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import Statistical from './Statistical';

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

      <Statistical />
    </CardDashboard>
  );
};

export default Dashboard;
