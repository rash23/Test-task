import { FC } from 'react'
import { InputHTMLAttributes } from 'react'
const CustomCheckboxComponent: FC<InputHTMLAttributes<HTMLInputElement>> = ({ name, ...rest }): JSX.Element => {
	//I decided not to style the checkbox because it would be difficult without some UI library or framework
	return (
		<div onClick={(event) => event.stopPropagation()} className="flex gap-2 text-black">
			<input className="cursor-pointer " type="checkbox" name={name} id={name} {...rest}></input>
			<label className="cursor-pointer text-sm" htmlFor={name}>
				{name}
			</label>
		</div>
	)
}

export default CustomCheckboxComponent
