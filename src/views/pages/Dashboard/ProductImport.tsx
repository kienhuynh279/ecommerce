import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import React from 'react';
import { useTranslation } from 'react-i18next';

const tableData = [
  {
    duaration: '123',
    msnv: '1',
    name: 'Quách Công Thương',
    dvkd: 'Hội sở',
    program: 'Los',
    status: 1,
  },
  {
    duaration: '123',
    msnv: '1',
    name: 'Quách Công Thương',
    dvkd: 'Hội sở',
    program: 'Los',
    status: 1,
  },
  {
    duaration: '123',
    msnv: '1',
    name: 'Quách Công Thương',
    dvkd: 'Hội sở',
    program: 'Los',
    status: 0,
  },
  {
    duaration: '123',
    msnv: '1',
    name: 'Quách Công Thương',
    dvkd: 'Hội sở',
    program: 'Los',
    status: 0,
  },
  {
    duaration: '123',
    msnv: '1',
    name: 'Quách Công Thương',
    dvkd: 'Hội sở',
    program: 'Los',
    status: 1,
  },
  {
    duaration: '123',
    msnv: '1',
    name: 'Quách Công Thương',
    dvkd: 'Hội sở',
    program: 'Los',
    status: 1,
  },
  {
    duaration: '123',
    msnv: '1',
    name: 'Quách Công Thương',
    dvkd: 'Hội sở',
    program: 'Los',
    status: 1,
  },
  {
    duaration: '123',
    msnv: '1',
    name: 'Quách Công Thương',
    dvkd: 'Hội sở',
    program: 'Los',
    status: 1,
  },
  {
    duaration: '123',
    msnv: '1',
    name: 'Quách Công Thương',
    dvkd: 'Hội sở',
    program: 'Los',
    status: 1,
  },
  {
    duaration: '123',
    msnv: '1',
    name: 'Quách Công Thương',
    dvkd: 'Hội sở',
    program: 'Los',
    status: 0,
  },
  {
    duaration: '123',
    msnv: '1',
    name: 'Quách Công Thương',
    dvkd: 'Hội sở',
    program: 'Los',
    status: 1,
  },
  {
    duaration: '123',
    msnv: '1',
    name: 'Quách Công Thương',
    dvkd: 'Hội sở',
    program: 'Los',
    status: 0,
  },
];

function ProductImport() {
  const { t } = useTranslation();
  const THeader = () => (
    <TableHead>
      <TableRow>
        <TableCell align="center" width={'7%'}>
          {t('STT')}
        </TableCell>
        <TableCell width={'13%'}>{t('Thời gian')}</TableCell>
        <TableCell width={'10%'}>{t('MSNV')}</TableCell>
        <TableCell width={'20%'}>{t('Họ và Tên')}</TableCell>
        <TableCell width={'18%'}>{t('ĐVKD')}</TableCell>
        <TableCell width={'15%'}>{t('Chương Trình')}</TableCell>
        <TableCell width={'15%'}>{t('Trạng thái')}</TableCell>
      </TableRow>
    </TableHead>
  );

  const TBody = () => (
    <>
      {tableData.map((i, index) => (
        <TableRow key={index}>
          <TableCell align="center" width={'7%'}>
            {index}
          </TableCell>
          <TableCell width={'13%'}>{i.duaration}</TableCell>
          <TableCell
            sx={{
              textDecoration: 'underline',
              color: '#1825aa',
              fontWeight: 500,
            }}
            width={'10%'}
          >
            {i.msnv}
          </TableCell>
          <TableCell width={'20%'}>{i.name}</TableCell>
          <TableCell sx={{ textDecoration: 'underline' }} width={'18%'}>
            {i.dvkd}
          </TableCell>
          <TableCell width={'15%'}>{i.program}</TableCell>
          <TableCell
            sx={{
              fontSize: '14px',
              fontWeight: 600,
              color: i.status === 0 ? '#eb0029' : '#0d9827',
            }}
            width={'15 % '}
          >
            {i.status === 0 ? 'Thất bại' : 'Thành Công'}
          </TableCell>
        </TableRow>
      ))}
    </>
  );
  return (
    <Box
      sx={{
        mt: 2.5,
        boxShadow: '0 3px 6px 0 rgb(0 0 0 / 16%)',
        backgroundColor: '#fff',
        height: '480px',
        padding: '12px',
        borderRadius: '8px',
      }}
    >
      <Typography
        sx={{
          fontSize: '24px',
          fontWeight: 700,
          paddingLeft: '10px',
        }}
      >
        Hàng cần nhập
      </Typography>
      <TableContainer
        className="table-scrollcustom"
        sx={{
          maxHeight: '410px',
          height: '410px',
        }}
      >
        <Table stickyHeader sx={{ backgroundColor: '#fff', tableLayout: 'fixed' }}>
          <THeader />
          <TableBody>
            <TBody />
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default ProductImport;
