import { yupResolver } from '@hookform/resolvers/yup';
import { Checkbox, FormControlLabel, Typography } from '@mui/material';
import clsx from 'clsx';
import { handleLogin } from 'features/auth/slice';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import FormRow from 'views/components/base/FormRow';
import * as yup from 'yup';
import loginStyle, { BoxLogin, InputLogin } from './styled';

export interface IInputLogin {
  username?: string;
  password?: string;
  reminderLogin?: boolean;
}

const loginSchema = yup.object().shape({
  username: yup.string().required("Nhập tài khoản"),
  password: yup.string().min(8).required("Nhập mật khẩu"),
});

const Login = () => {
  const classes = loginStyle();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IInputLogin>({ resolver: yupResolver(loginSchema) });
  const loginClass = clsx('flex-center h-full', classes.page);

  const dispatch = useDispatch()

  const onHandleLogin = async (data: IInputLogin) => {
    dispatch(handleLogin(data))
  };

  return (
    <div className={loginClass}>
      <BoxLogin>
        <div className="px-20 bg-white h-full relative flex-column flex-center">
          <Typography component="h1" variant="h4">
            <span className={classes.titleLogin}>Đăng nhập</span>
          </Typography>

          <form className={classes.formLogin} onSubmit={handleSubmit(onHandleLogin)}>
            <FormRow>
              <InputLogin
                {...register('username', { required: 'Required' })}
                helperText={errors.username?.message}
                error={!!errors.username}
                className='mb-5'
                label="Tài khoản"
                placeholder="Nhập tài khoản"
                size="small"
              />
            </FormRow>

            <FormRow>
              <InputLogin
                {...register('password')}
                helperText={errors.password?.message}
                className='mb-5'
                error={!!errors.password}
                label="Mật khẩu"
                placeholder="Nhập mật khẩu"
                size="small"
              />
            </FormRow>

            <FormRow className='flex justify-between'>
              <FormControlLabel control={<Checkbox {...register('reminderLogin')} size='small' />} label="Ghi nhớ đăng nhập" />
              <Link className={classes.textForgotPassword} to="#">Quên mật khẩu?</Link>
            </FormRow>

            <input className={classes.btnLogin} type="submit" value='Đăng nhập' />
          </form>
        </div>
      </BoxLogin>
    </div>
  );
};

export default Login;
