import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';

const tableData = [
  {
    name: 'Ống 27 BM',
    code: '27BM',
    quantity: 50,
    status: 1,
  },
  {
    name: 'Ống 34 BM',
    code: '34BM',
    quantity: 20,
    status: 0,
  },
  {
    name: 'Ống 27 ST',
    code: '27ST',
    quantity: 20,
    status: 0,
  },
  {
    name: 'Co 27 BM',
    code: 'CO27BM',
    quantity: 200,
    status: 1,
  },
  {
    name: 'T 27 BM',
    code: 'T27BM',
    quantity: 20,
    status: 0,
  },
];

function ProductImport() {
  const { t } = useTranslation();
  const THeader = () => (
    <TableHead>
      <TableRow>
        <TableCell align="center" width={'10%'}>
          {t('STT')}
        </TableCell>
        <TableCell width={'40%'}>{t('Tên sản phẩm')}</TableCell>
        <TableCell width={'15%'}>{t('MSSP')}</TableCell>
        <TableCell width={'15%'}>{t('Số lượng còn lại')}</TableCell>
        <TableCell width={'20%'}>{t('Trạng thái')}</TableCell>
      </TableRow>
    </TableHead>
  );

  const TBody = () => (
    <>
      {tableData.map((i, index) => (
        <TableRow key={index}>
          <TableCell align="center" width={'10%'}>
            {index + 1}
          </TableCell>
          <TableCell
            sx={{
              textDecoration: 'underline',
              color: '#1825aa',
              fontWeight: 500,
            }}
            width={'40%'}
          >
            {i.name}
          </TableCell>
          <TableCell width={'15%'}>{i.code}</TableCell>
          <TableCell width={'15%'}>{i.quantity}</TableCell>
          <TableCell
            sx={{
              fontSize: '14px',
              fontWeight: 600,
              color: i.status === 0 ? '#eb0029' : '#0d9827',
            }}
            width={'20% '}
          >
            {i.status === 0 ? 'Gấp' : 'Bình thường'}
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
          maxHeight: '300px',
          height: '300px',
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
