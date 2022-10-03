import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

const adminStyle = makeStyles((theme: Theme) => ({
  '@global': {
    '.admin-form-row': {
      '& .MuiFormControl-root': {
        marginBottom: '0 !important',
      },

      '& .MuiFormControlLabel-root': {
        padding: '0 9px !important',

        '& .MuiCheckbox-root': {
          padding: '0px 4px 0 0 !important',
        },

        '& .MuiTypography-root': {
          fontSize: '14px',
        },
      },

      '& .MuiTextField-root': {
        width: '100%',
        position: 'relative',
        marginBottom: '32px !important',
      },

      '& .MuiFormHelperText-root': {
        position: 'absolute',
        bottom: '-25px',
        margin: 0,
      },

      '& .error': {
        marginBottom: '31px !important',
      },
    },
  },
})) as Function;

export default adminStyle;
