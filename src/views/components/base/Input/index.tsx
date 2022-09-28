import { FormControl, TextField } from '@mui/material'
import React from 'react'

export type InputSize =
	| "small"
	| "medium"

export interface InputProps {
	className?: string,
	value?: string,
	label?: string,
	ref?: string,
	error?: boolean,
	type?: string,
	size?: InputSize,
	placeholder?: string,
	fullWidth?: boolean,
	isTooltip?: boolean,
	helperText?: string,
}

const Input = (props: InputProps) => {
	const {
		label,
		value,
		error,
		size,
		ref,
		type,
		helperText,
		className,
		placeholder,
		fullWidth,
	} = props

	return (
		<FormControl className={className} fullWidth={fullWidth}>
			<TextField
				size={size}
				type={type}
				error={error}
				label={label}
				ref={ref}
				value={value}
				helperText={helperText ?? ''}
				placeholder={placeholder}
			/>
		</FormControl>
	)
}

export default Input