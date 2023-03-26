import { FC, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from 'src/types'

const Header: FC = (): JSX.Element => {
	const navLinks: string[] = useSelector((state: RootState): string[] => state.general.navLinks)

	const closeTrigger = useRef<SVGSVGElement>(null)
	const navigation = useRef<HTMLDivElement>(null)
	const icons = useRef<HTMLDivElement>(null)

	const handleOpenModal = (): void => {
		navigation?.current?.classList.add('overlay')
		navigation?.current?.classList.remove('items-center', 'justify-between')

		icons?.current?.classList?.remove('hidden')
		icons?.current?.classList?.add('flex')

		closeTrigger?.current?.classList.remove('hidden')
	}

	const handleCloseModal = (): void => {
		navigation?.current?.classList.remove('overlay')
		navigation?.current?.classList.add('items-center', 'justify-between')

		icons?.current?.classList.add('hidden')
		icons?.current?.classList.remove('flex')

		closeTrigger?.current?.classList.add('hidden')
	}

	return (
		<header className="container gap-4 justify-between items-center p-10 mb-8 ">
			<div ref={navigation} id="navigation" className="flex justify-between items-center">
				<div className="flex justify-between">
					<div className="logo logo-type">Logo Here</div>
					<svg
						onClick={handleCloseModal}
						ref={closeTrigger}
						className="cursor-pointer hidden"
						id="close-trigger"
						width="18"
						height="18"
						viewBox="0 0 18 18"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M17 17L1 1M17 1L1 17" stroke="white" strokeWidth="2" strokeLinecap="round" />
					</svg>
				</div>

				<nav className="flex gap-[60px]">
					<ul id="list" className="hidden md:flex gap-12 items-center text-white  md:text-primary">
						{navLinks.map(
							(link: string, index: number): JSX.Element => (
								<li
									key={index}
									className="flex gap-12 justify-between font-['Roboto'] text-[14px] leading-[16px] md:text-base md:leading"
								>
									<NavLink
										onClick={handleCloseModal}
										className={({ isActive }) => (isActive ? 'font-bold' : '')}
										to={link === 'Home' ? '/' : link.toLowerCase()}
									>
										{link}
										{link === 'Features' && (
											<svg
												className="inline-block ml-2"
												width="12"
												height="7"
												viewBox="0 0 12 7"
												fill="currentColor"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M5.46967 6.76978C5.76256 7.06267 6.23744 7.06267 6.53033 6.76978L11.3033 1.99681C11.5962 1.70392 11.5962 1.22904 11.3033 0.936151C11.0104 0.643258 10.5355 0.643258 10.2426 0.936151L6 5.17879L1.75736 0.936151C1.46447 0.643258 0.989593 0.643258 0.696699 0.936151C0.403806 1.22904 0.403806 1.70392 0.696699 1.99681L5.46967 6.76978ZM5.25 5.20813V6.23945H6.75V5.20813H5.25Z"
													fill="currentColor"
												/>
											</svg>
										)}
									</NavLink>
								</li>
							)
						)}
					</ul>

					<div className="hidden md:flex gap-9 text-primary">
						<div className="flex justify-center items-center rounded-full border border-black w-8 h-8 cursor-pointer">
							<img src="/assets/images/Header/user.svg" alt="" />
						</div>
						<div className="flex justify-center items-center rounded-full border border-black w-8 h-8 cursor-pointer">
							<img src="/assets/images/Header/cart.svg" alt="" />
						</div>
					</div>

					<svg
						onClick={handleOpenModal}
						id="trigger"
						className="cursor-pointer block md:hidden"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M21 18H13C12.4477 18 12 17.5523 12 17C12 16.4477 12.4477 16 13 16H21V18ZM21 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H21V13ZM21 8H4C3.44772 8 3 7.55228 3 7C3 6.44772 3.44772 6 4 6H21V8Z"
							fill="black"
						/>
					</svg>
				</nav>

				<div ref={icons} id="icons" className="hidden justify-center gap-[50px] mt-12">
					<div className="flex justify-center items-center rounded-full border border-white w-8 h-8 cursor-pointer">
						<img src="/assets/images/Header/user-light.svg" alt="" />
					</div>
					<div className="flex justify-center items-center rounded-full border border-white w-8 h-8 cursor-pointer">
						<img src="/assets/images/Header/cart-light.svg" alt="" />
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
