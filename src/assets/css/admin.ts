import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

const adminStyle = makeStyles((theme: Theme) => ({
  '@global': {
    '.admin-form-row': {
      alignItems: 'flex-end',

      '& .MuiFormControl-root': {
        marginBottom: '0!important',
      },

      '& .MuiTextField-root': {
        position: 'relative',
        marginBottom: '18px!important',
      },

      '& .MuiFormHelperText-root': {
        position: 'absolute',
        bottom: '-25px',
        margin: 0,
      },
      '& .error': {
        marginBottom: '31px!important',
      },
    },
  },
})) as Function;

export default adminStyle;
