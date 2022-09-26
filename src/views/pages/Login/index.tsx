import React, { useState } from 'react'
import loginStyle, { BoxLogin } from './styled'
import clsx from 'clsx'
import { Typography } from '@mui/material'
import { useForm } from 'react-hook-form'

type Props = {}

const Login = (props: Props) => {
	const classes = loginStyle();
	const { register, handleSubmit } = useForm();

	const loginClass = clsx("mscb-login-page flex-center h-full", classes.page);

	const handleLogin = () => {
		console.log('Login Status')
	}

	return (
		<div className={loginClass}>
			<BoxLogin>
				<div className="px-20 bg-white h-full relative flex-column flex-center">
					<Typography component='h1' variant='h4'>
						<span className={classes.titleLogin}>Đăng nhập</span>
					</Typography>

					<form onSubmit={handleSubmit(handleLogin)}>
						<input {...register("username")} placeholder="Enter Username" />
						<input {...register("password")} placeholder="Enter Password" />
						<input type="submit" />
					</form>
				</div>
			</BoxLogin>
		</div>
	)
}

export default Login