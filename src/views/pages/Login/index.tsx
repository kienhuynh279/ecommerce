import { yupResolver } from '@hookform/resolvers/yup';
import { Typography } from '@mui/material';
import clsx from 'clsx';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import loginStyle, { BoxLogin, InputLogin } from './styled';

export interface IInputLogin {
  username?: string;
  password?: string;
}

const loginSchema = yup.object().shape({
  username: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
});

const Login = () => {
  const classes = loginStyle();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IInputLogin>({ resolver: yupResolver(loginSchema) });
  const [dataLogin, setDataLogin] = useState({});
  const loginClass = clsx('flex-center h-full', classes.page);

  const onHandleSubmit = (data: IInputLogin) => {
    setDataLogin(data);
    reset();
    console.log(dataLogin);
  };

  return (
    <div className={loginClass}>
      <BoxLogin>
        <div className="px-20 bg-white h-full relative flex-column flex-center">
          <Typography component="h1" variant="h4">
            <span className={classes.titleLogin}>Đăng nhập</span>
          </Typography>

          <form className={classes.formLogin} onSubmit={handleSubmit(onHandleSubmit)}>
            <InputLogin
              {...register('username')}
              helperText={errors.username?.message}
              error={!!errors.username}
              label="Tài khoản"
              placeholder="Nhập tài khoản"
              size="small"
            />

            <InputLogin
              {...register('password')}
              helperText={errors.password?.message}
              error={!!errors.password}
              label="Mật khẩu"
              placeholder="Nhập mật khẩu"
              size="small"
            />

            <div></div>

            <input className={classes.btnLogin} type="submit" />
          </form>
        </div>
      </BoxLogin>
    </div>
  );
};

export default Login;
