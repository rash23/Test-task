import { FC } from 'react'
import { ContactAddressType } from 'src/redux/Contact/types'

const ContactAddress: FC<ContactAddressType> = (props): JSX.Element => {
	return (
		<div>
			<div>
				<img src={props.icon} alt="" />
			</div>
			<div>{props.text}</div>
		</div>
	)
}

export default ContactAddress
