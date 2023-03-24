import { FC } from 'react'
import { ButtonPropsType } from './types'

const CustomButtonComponent: FC<ButtonPropsType> = ({ text, ...rest }): JSX.Element => {
	return (
		<button
			className="bg-black text-white h-[54px] w-[214px] rounded shadow-[0px 0px 14px rgba(0, 0, 0, 0.12)]"
			{...rest}
		>
			{text}
		</button>
	)
}

export default CustomButtonComponent
