import { FC } from 'react'
import { InputPropsType } from './types'
const CustomInputComponent: FC<InputPropsType> = ({ label, ...rest }): JSX.Element => {
	return (
		<div
			onClick={(event) => event.stopPropagation()}
			className="flex flex-col border-b border-black py-1 text-sm w-full cursor-pointer"
		>
			<label>{label}</label>
			<input {...rest}></input>
		</div>
	)
}

export default CustomInputComponent
