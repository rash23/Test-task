import { FC } from 'react'
import { ContactAddressType } from 'src/redux/Contact/types'

const ContactAddress: FC<ContactAddressType> = (props): JSX.Element => {
	return (
		<div className="flex flex-col text-center items-center gap-2.5 max-w-[221px] md:flex-row md:text-start md:items-start md:gap-6 md:max-w-[288px]">
			<div className="w-6 h-6 shrink-0 cursor-pointer">
				<img src={props.icon} alt="" />
			</div>
			<div className="cursor-pointer text-sm md:text-base">{props.text}</div>
		</div>
	)
}

export default ContactAddress
