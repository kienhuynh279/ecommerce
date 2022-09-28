import React, { useState } from 'react'
import loginStyle, { BoxLogin } from './styled'
import clsx from 'clsx'
import { Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import Input from 'views/components/base/Input'
import FormRow from 'views/components/base/FormRow'
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";

export interface InputLogin {
	username?: string,
	password?: string
}

const loginSchema = yup.object().shape({
	username: yup.string().email().required(),
	password: yup.string().min(8).max(32).required(),
});

const Login = () => {
	const classes = loginStyle();
	const { register, handleSubmit, formState: { errors } } = useForm<InputLogin>({ resolver: yupResolver(loginSchema), })
	const [dataLogin, setDataLogin] = useState({});
	const loginClass = clsx("flex-center h-full", classes.page);

	const onSubmit = (data: InputLogin) => {
		setDataLogin(data);
		console.log(dataLogin)
	};

	return (
		<div className={loginClass}>
			<BoxLogin>
				<div className="px-20 bg-white h-full relative flex-column flex-center">
					<Typography component='h1' variant='h4'>
						<span className={classes.titleLogin}>Đăng nhập</span>
					</Typography>

					<form className={classes.formLogin} onSubmit={handleSubmit(onSubmit)}>
						<FormRow>
							<Input
								{...register("username")}
								name='username'
								type="username"
								label="Tài khoản"
								placeholder='Nhập tài khoản'
								size='small'
								error={!!errors.username}
							/>
						</FormRow>

						<FormRow>
							<Input
								{...register("password")}
								name='password'
								label="Mật Khẩu"
								type="password"
								size='small'
								placeholder='Nhập mật khẩu'
								error={!!errors.password}
							/>
						</FormRow>
						<input className={classes.btnLogin} type="submit" />
					</form>
				</div>
			</BoxLogin>
		</div>
	)
}

export default Login