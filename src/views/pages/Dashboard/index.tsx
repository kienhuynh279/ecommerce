import Box from '@mui/material/Box';
import React from 'react';
import { ButtonReport, CardDashboard } from './style';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import Statistical from './Statistical';
import ProductImport from './ProductImport';

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

      <ProductImport />
    </CardDashboard>
  );
};

export default Dashboard;
