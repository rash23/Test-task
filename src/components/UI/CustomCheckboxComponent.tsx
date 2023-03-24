import { FC } from 'react'
import { InputHTMLAttributes } from 'react'
const CustomCheckboxComponent: FC<InputHTMLAttributes<HTMLInputElement>> = ({ name, ...rest }): JSX.Element => {
	return (
		<div onClick={(event) => event.stopPropagation()}>
			<input type="checkbox" name={name} {...rest}></input> <span>{name}</span>
		</div>
	)
}

export default CustomCheckboxComponent
