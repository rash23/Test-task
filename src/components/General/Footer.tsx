import { FC, FormEvent } from 'react'
import { RootState } from 'src/types'
import { useDispatch, useSelector } from 'react-redux'
import { setNewsletterEmail } from '../../redux/General/general.slice'
import { listItemType } from 'src/redux/General/types'
import { ContactAddressType } from 'src/redux/Contact/types'
import { NavLink } from 'react-router-dom'
import FooterListItem from '../UI/FooterListItem'

const Footer: FC = (): JSX.Element => {
	const dispatch = useDispatch()
	const newsLetterEmail: string = useSelector((state: RootState): string => state.general.email)
	const addressData: ContactAddressType[] = useSelector((state: RootState) => state.contact.contactAddressData)
	const companyData: string[] = useSelector((state: RootState): string[] => state.general.company)
	const legalData: listItemType[] = useSelector((state: RootState): listItemType[] => state.general.legal)
	const linksData: listItemType[] = useSelector((state: RootState): listItemType[] => state.general.links)

	const subscribeSubmitHandler = (event: FormEvent) => {
		event.preventDefault()
		alert(`You subscribed ${newsLetterEmail}`)
		console.log(newsLetterEmail)
		dispatch(setNewsletterEmail(''))
	}
	return (
		<footer className="bg-black text-white">
			<div className="container p-10">
				<div className="font-['Inter'] text-[36px] leading-[44px] font-extrabold text-center pb-5 md:py-10 mb-4 border-b-2 border-medium">
					Logo here
				</div>
				<div className="flex flex-col md:flex-row justify-between gap-4">
					<div className="flex justify-between gap-4 mb-[30px] md:mb-0">
						<div>
							<div className="text-lg font-semibold mb-5">Reach us</div>
							<ul className="flex flex-col gap-5">
								{addressData.map((item: ContactAddressType) => (
									<div
										key={item.icon}
										className="flex flex-col gap-2.5 max-w-[221px] md:flex-row  md:gap-6 md:max-w-[288px]"
									>
										<div className="w-6 h-6 shrink-0 cursor-pointer">
											<img src={item.icon} alt="" />
										</div>
										<div className="cursor-pointer text-sm md:text-base">{item.text}</div>
									</div>
								))}
							</ul>
						</div>
						<div>
							<div className="text-lg font-semibold mb-5">Company</div>
							<ul className="flex flex-col gap-5">
								{companyData.map(
									(link: string, index: number): JSX.Element => (
										<li key={index}>
											<NavLink to={link === 'Home' ? '/' : link.toLowerCase()}>{link}</NavLink>
										</li>
									)
								)}
							</ul>
						</div>
					</div>
					<div className="flex justify-between gap-4 mb-[40px] md:mb-0">
						<div>
							<div className="text-lg font-semibold mb-5">Legal</div>
							<ul className="flex flex-col gap-5">
								{legalData.map((item: listItemType) => (
									<FooterListItem key={item.title} title={item.title} link={item.link} />
								))}
							</ul>
						</div>
						<div>
							<div className="text-lg font-semibold mb-5">Quick Links</div>
							<ul className="flex flex-col gap-5">
								{linksData.map((item: listItemType) => (
									<FooterListItem key={item.title} title={item.title} link={item.link} />
								))}
							</ul>
						</div>
					</div>
					<div className="bg-[#131313] p-3.5 rounded-[10px] w-full md:w-[304px]">
						<div className="text-lg font-semibold mb-7">Join Our Newsletter</div>
						<form className="w-full flex mb-5" onSubmit={subscribeSubmitHandler}>
							<input
								type="email"
								className="h-[40px] p-2 rounded-l text-[#616161] bg-[#1E1E1E]"
								value={newsLetterEmail}
								onChange={(event) => dispatch(setNewsletterEmail(event.target.value))}
								placeholder="Your email address"
							/>

							<button className="bg-black text-white h-[40px] w-[105px] rounded shadow-3xl hover:opacity-75">
								Subscribe
							</button>
						</form>
						<div className="text-[#616161] text-[13px] leading-[18px]">
							* Will send you weekly updates for your better tool management.
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
