import { FC } from 'react'
import ContactAddress from './ContactAddress'
import { useSelector } from 'react-redux'
import { RootState } from 'src/types'
import { ContactAddressType } from 'src/redux/Contact/types'
import ContactForm from './ContactForm'

const ContactInformation: FC = (): JSX.Element => {
	const addressData: ContactAddressType[] = useSelector((state: RootState) => state.contact.contactAddressData)
	return (
		<div className="flex gap-2">
			<div className="bg-black text-white">
				<div>Contact Information</div>
				<div>Say something to start a live chat!</div>
				<div>
					{addressData.map((item: ContactAddressType) => (
						<ContactAddress key={item.icon} icon={item.icon} text={item.text} />
					))}
				</div>
				<div>
					<div>
						<img src="src/assets/images/Contact/social/twitter.svg" alt="" />
					</div>
					<div>
						<img src="src/assets/images/Contact/social/instagram.svg" alt="" />
					</div>
					<div>
						<img src="src/assets/images/Contact/social/discord.svg" alt="" />
					</div>
				</div>
			</div>
			<ContactForm />
		</div>
	)
}

export default ContactInformation
