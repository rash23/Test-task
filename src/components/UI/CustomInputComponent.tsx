import { FC } from 'react'
import { InputPropsType } from './types'
const CustomInputComponent: FC<InputPropsType> = ({ label, ...rest }): JSX.Element => {
	return (
		<div onClick={(event) => event.stopPropagation()}>
			<label>{label}</label>
			<input {...rest}></input>
		</div>
	)
}

export default CustomInputComponent
