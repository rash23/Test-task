import { FC } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'src/types'
import { ContactAddressType } from 'src/redux/Contact/types'
import ContactAddress from './ContactAddress'
import ContactForm from './ContactForm'

const ContactInformation: FC = (): JSX.Element => {
	const addressData: ContactAddressType[] = useSelector((state: RootState) => state.contact.contactAddressData)
	return (
		<div className="flex flex-col md:flex-row gap-[5px] md:gap-[10px] bg-white rounded-[5px] md:rounded-[10px] p-[5px] md:p-2.5 shadow-3xl">
			<div className="relative bg-black text-white rounded-[10px] p-10 w-full md:w-5/12">
				<div className="text-center text-[20px] leading-[30px] md:text-start md:text-2xl font-semibold mb-1.5">
					Contact Information
				</div>
				<div className="text-center text-[11px] leading-[17px] mb-3 md:text-start md:text-lg text-lightGray  md:mb-28">
					Say something to start a live chat!
				</div>
				<div className="flex flex-col items-center md:items-start gap-[15px] md:gap-[50px] mb-14 md:mb-40 text-center">
					{addressData.map((item: ContactAddressType) => (
						<ContactAddress key={item.text} icon={item.icon} text={item.text} />
					))}
				</div>
				<div className="flex gap-6 justify-center md:justify-start">
					<div className="cursor-pointer">
						<img src="src/assets/images/Contact/social/twitter.svg" alt="" />
					</div>
					<div className="cursor-pointer">
						<img src="src/assets/images/Contact/social/instagram.svg" alt="" />
					</div>
					<div className="cursor-pointer">
						<img src="src/assets/images/Contact/social/discord.svg" alt="" />
					</div>
				</div>
				<svg
					className="absolute bottom-0 right-0 max-w-[70px] max-h-[70px] md:max-w-[100px] md:max-h-[100px] lg:max-w-[200px] lg:max-h-[200px]"
					viewBox="0 0 208 209"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<circle cx="162.5" cy="160.5" r="134.5" fill="#1A1A1A" />
					<circle cx="69" cy="69" r="69" fill="#484848" fill-opacity="0.5" />
				</svg>
			</div>
			<ContactForm />
		</div>
	)
}

export default ContactInformation
