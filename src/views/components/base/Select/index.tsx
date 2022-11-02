import FormControl from '@mui/material/FormControl';
import ListSubheader from '@mui/material/ListSubheader';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { SxProps, Theme } from '@mui/system';
import clsx from 'clsx';
import {
  ChangeEvent,
  forwardRef,
  ForwardRefRenderFunction,
  memo,
  ReactNode,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { SxBaseApp } from 'types/app';
import { diffArray } from 'utils';
// import { SxSelectDisabled } from 'views/pages/LOAN/screens/Normal/Initialize/Legal/style';

export interface SelectOption {
  value: string | number;
  label?: ReactNode;
  disabled?: boolean;
  isGroup?: boolean;
}

export interface SelectRef {
  getValue(): string | number;
  setValue(value: string | number): void;
  setOptions(options: SelectOption[]): void;
  setMessage(msg: string): void;
}

export interface SelectProps {
  className?: string;
  colorLabel?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  label?: ReactNode;
  message?: string;
  onChange?(value: string | number): void;
  handleValidValueBeforeOnChange?: (value: string | number) => boolean;
  options: SelectOption[];
  placeholder?: string;
  required?: boolean;
  value?: string | number;
  multiple?: boolean;
  sx?: SxProps<Theme>;
}

export interface SelectComponent extends ForwardRefRenderFunction<SelectRef, SelectProps> {}

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

const Select: SelectComponent = (props, ref) => {
  const {
    className,
    // colorLabel,
    disabled,
    fullWidth = true,
    label,
    message,
    onChange,
    handleValidValueBeforeOnChange = () => true,
    options,
    placeholder,
    // required,
    value = 'all',
    multiple,
    sx,
  } = props;

  const [SelectOptions, setSelectOptions] = useState<SelectOption[]>(options);
  const [SelectedValue, setSelectedValue] = useState<string | number>(value);
  const [SelectMessage, setSelectMessage] = useState<string>(message ?? '');
  const Selected = useRef<string | number>(value);

  useEffect(() => {
    Selected.current = value;
    setSelectedValue(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  useEffect(() => {
    diffArray(SelectOptions, options) && setSelectOptions(options);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options]);

  useEffect(() => {
    if (SelectedValue !== undefined && SelectedValue !== Selected.current) {
      Selected.current = SelectedValue;
      onChange && onChange(SelectedValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [SelectedValue]);

  useEffect(() => {
    setSelectMessage(message ?? '');
  }, [message]);

  useImperativeHandle(ref, () => ({
    getValue() {
      return SelectedValue;
    },
    setValue(val) {
      setSelectedValue(val);
    },
    setOptions(opts) {
      setSelectOptions(opts);
    },
    setMessage(msg) {
      setSelectMessage(msg);
    },
  }));

  const error = Boolean(SelectMessage).valueOf();
  const selectClass = clsx('admin-input', className);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!handleValidValueBeforeOnChange(e.target.value)) return;
    setSelectedValue(e.target.value);
  };

  const existValue = SelectOptions?.find((o) => o.value === SelectedValue);

  return (
    <FormControl
      className={selectClass}
      fullWidth={fullWidth}
      sx={{
        '& .MuiSelect-select': {
          pr: '30px!important',
          '& span': {
            color: '#35353580',
            fontSize: '14px',
          },
        },
        '& .MuiSelect-icon': {
          mr: '9px',
        },
        ...sx,
      }}
    >
      {!!label && <h4 className="ellipsis">{label}</h4>}
      <TextField
        error={error}
        select
        value={existValue ? SelectedValue : '-1'}
        onChange={handleChange}
        helperText={SelectMessage}
        className={clsx({ error })}
        variant="standard"
        disabled={disabled}
        SelectProps={{
          multiple: multiple,
          placeholder: placeholder,
        }}
        sx={disabled === true ? SxSelectDisabled : sx}
      >
        {!!placeholder && (
          <MenuItem sx={{ fontSize: '14px' }} disabled value="-1" key="-1" selected>
            <span>{placeholder}</span>
          </MenuItem>
        )}
        {SelectOptions?.map((option) => {
          if (option.isGroup) {
            return <ListSubheader key={option.value}>{option.label ?? option.value}</ListSubheader>;
          }

          return (
            <MenuItem
              sx={{}}
              key={option.value}
              value={option.value}
              selected={option.value === SelectedValue}
              disabled={option.disabled}
              className={clsx(className, 'text-14 text-normal')}
            >
              {option.label ?? option.value}
            </MenuItem>
          );
        })}
      </TextField>
    </FormControl>
  );
};

export default memo(forwardRef(Select));
