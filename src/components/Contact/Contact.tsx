import { FC } from 'react'
import ContactInformation from './ContactInformation'

const Contact: FC = (): JSX.Element => {
	return (
		<div className="container px-10 py-3">
			<div className="flex flex-col justify-center items-center pb-20">
				<div className="font-bold mb-2.5 text-[24px] leading-[46px] md:text-[40px] md:leading-[60px]">Contact Us</div>
				<div className="text-medium text-[14px] leading-[21px] md:text-lg">
					Any question or remarks? Just write us a message!
				</div>
			</div>
			<ContactInformation />
		</div>
	)
}

export default Contact
