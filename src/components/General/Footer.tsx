import { FC } from 'react'
import CustomButtonComponent from '../UI/CustomButtonComponent'
import FooterListItem from '../UI/FooterListItem'
import { RootState } from 'src/types'
import { useDispatch, useSelector } from 'react-redux'
import { setNewsletterEmail } from '../../redux/General/general.slice'
import { listItemType } from 'src/redux/General/types'
import ContactAddress from '../Contact/ContactAddress'
import { ContactAddressType } from 'src/redux/Contact/types'
import { NavLink } from 'react-router-dom'

const Footer: FC = (): JSX.Element => {
	const dispatch = useDispatch()
	const newsLetterEmail: string = useSelector((state: RootState): string => state.general.email)
	const addressData: ContactAddressType[] = useSelector((state: RootState) => state.contact.contactAddressData)
	const companyData: string[] = useSelector((state: RootState): string[] => state.general.company)
	const legalData: listItemType[] = useSelector((state: RootState): listItemType[] => state.general.legal)
	const linksData: listItemType[] = useSelector((state: RootState): listItemType[] => state.general.links)

	return (
		<div className="bg-black text-white">
			<div>Logo here</div>
			<div>
				<div>
					<div>Reach us</div>
					<ul>
						{addressData.map((item: ContactAddressType) => (
							<ContactAddress key={item.text} icon={item.icon} text={item.text} />
						))}
					</ul>
				</div>
				<div>
					<div>Company</div>
					<ul>
						{companyData.map(
							(link: string, index: number): JSX.Element => (
								<li key={index}>
									<NavLink to={link === 'Home' ? '/' : link.toLowerCase()}>{link}</NavLink>
								</li>
							)
						)}
					</ul>
				</div>
				<div>
					<div>Legal</div>
					<ul>
						{legalData.map((item: listItemType) => (
							<FooterListItem key={item.title} title={item.title} link={item.link} />
						))}
					</ul>
				</div>
				<div>
					<div>Quick Links</div>
					<ul>
						{linksData.map((item: listItemType) => (
							<FooterListItem key={item.title} title={item.title} link={item.link} />
						))}
					</ul>
				</div>
				<div className="bg-[#131313]">
					<div>Join Our Newsletter</div>
					<form>
						<input value={newsLetterEmail} onChange={(event) => dispatch(setNewsletterEmail(event.target.value))} />
						<CustomButtonComponent text="Subscribe" type="submit" />
					</form>
					<div>* Will send you weekly updates for your better tool management.</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
