import { yupResolver } from '@hookform/resolvers/yup';
import { Checkbox, FormControlLabel, Typography } from '@mui/material';
import clsx from 'clsx';
import { handleLogin } from 'features/auth/slice';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import FormRow from 'views/components/base/FormRow';
import Language from 'views/components/layout/Language';
import * as yup from 'yup';
import loginStyle, { BoxLogin, InputLogin } from './styled';

export interface IInputLogin {
  username?: string;
  password?: string;
  reminderLogin?: boolean;
}

const loginSchema = yup.object().shape({
  username: yup.string().required('Nhập tài khoản'),
  password: yup.string().min(8).required('Nhập mật khẩu'),
});

const Login = () => {
  const { t } = useTranslation();
  const classes = loginStyle();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IInputLogin>({ resolver: yupResolver(loginSchema) });
  const loginClass = clsx('flex-center h-full', classes.page);

  const dispatch = useDispatch();

  const onHandleLogin = async (data: IInputLogin) => {
    dispatch(handleLogin(data));
  };

  return (
    <div className={loginClass}>
      <BoxLogin>
        <div className="px-20 bg-white relative flex-column flex-center mt-6">
          <Typography component="h1" variant="h4">
            <span className={classes.titleLogin}>{t('Page.Login.Name')}</span>
          </Typography>

          <form className={classes.formLogin} onSubmit={handleSubmit(onHandleLogin)}>
            <FormRow>
              <InputLogin
                {...register('username', { required: 'Required' })}
                helperText={errors.username?.message}
                error={!!errors.username}
                className="mb-5"
                label={t('Input.Username')}
                placeholder={t('Input.PlaceHolder.Username')}
                size="small"
              />
            </FormRow>

            <FormRow>
              <InputLogin
                {...register('password')}
                helperText={errors.password?.message}
                className="mb-5"
                error={!!errors.password}
                label={t('Input.Password')}
                placeholder={t('Input.PlaceHolder.Password')}
                size="small"
              />
            </FormRow>

            <FormRow className="flex justify-between">
              <FormControlLabel
                control={<Checkbox {...register('reminderLogin')} size="small" />}
                label={t('Input.RememderLogin')}
              />
              <Link className={classes.textForgotPassword} to="#">
                {t('Page.Login.ForgotPassword')}
              </Link>
            </FormRow>

            <input className={classes.btnLogin} type="submit" value={t('Button.Login')} />
          </form>
          <div className="flex-center mt-5">
            <Language />
          </div>
        </div>
      </BoxLogin>
    </div>
  );
};

export default Login;
