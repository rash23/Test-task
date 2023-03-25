import { FC } from 'react'
import { ButtonPropsType } from './types'

const CustomButtonComponent: FC<ButtonPropsType> = ({ text, ...rest }): JSX.Element => {
	return (
		<button
			className="bg-black text-white h-[54px] w-full rounded shadow-3xl hover:opacity-75 disabled:opacity-75 cursor-pointer"
			{...rest}
		>
			{text}
		</button>
	)
}

export default CustomButtonComponent
