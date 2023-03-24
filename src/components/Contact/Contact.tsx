import { FC } from 'react'
import ContactInformation from './ContactInformation'
const Contact: FC = (): JSX.Element => {
	return (
		<main>
			<div>Contact Us</div>
			<div>Any question or remarks? Just write us a message!</div>
			<ContactInformation />
		</main>
	)
}

export default Contact
