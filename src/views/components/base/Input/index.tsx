import { TextField } from '@mui/material';
import { forwardRef, ForwardRefRenderFunction, useImperativeHandle, useRef, useState } from 'react';

export type InputSize = 'small' | 'medium';

export interface InputRef {
	getValue(): string | undefined;
	setValue(value: string): void;
	focus(): void;
	setSelectionRange(pos: number): void;
}

export interface InputProps {
	className?: string;
	value?: string;
	label?: string;
	ref: string,
	error?: boolean;
	type?: string;
	size?: InputSize;
	placeholder?: string;
	fullWidth?: boolean;
	isTooltip?: boolean;
	helperText?: string;
}

export type InputComponent = ForwardRefRenderFunction<
	InputRef,
	InputProps
>;

const Input: InputComponent = (props, ref) => {
	const {
		label,
		value,
		error,
		size,
		type,
		helperText,
		// className,
		placeholder,
		// fullWidth,
	} = props;

	const [defaultValue, setDefaultValue] = useState<string | undefined>(value);
	const inputRef = useRef<HTMLInputElement>(null);

	useImperativeHandle(ref, () => ({
		getValue: () => {
			// if (!isNumber || !defaultValue) return defaultValue;
			return defaultValue;
		},
		setValue: (val) => val === defaultValue || setDefaultValue(val),
		focus: () => inputRef.current?.focus(),
		setSelectionRange: pos => {
			if (inputRef.current) {
				inputRef.current.selectionStart = pos;
			}
		}
	}));

	return (
		<TextField
			ref={inputRef}
			size={size}
			type={type}
			error={error}
			label={label}
			value={value}
			helperText={helperText ?? ''}
			placeholder={placeholder}
		/>
	);
};

export default forwardRef(Input);