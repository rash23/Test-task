import { FC, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from 'src/types'

const Header: FC = (): JSX.Element => {
	const navLinks: string[] = useSelector((state: RootState): string[] => state.general.navLinks)

	useEffect(() => {
		const trigger = document.querySelector('#trigger')
		const closeTrigger = document.querySelector('#close-trigger')
		const navigation = document.querySelector('#navigation')
		const icons = document.querySelector('#icons')

		trigger?.addEventListener('click', () => {
			navigation?.classList.add('overlay')
			navigation?.classList.remove('items-center')
			navigation?.classList.remove('justify-between')

			closeTrigger?.classList.remove('hidden')

			icons?.classList.remove('hidden')
			icons?.classList.add('flex')
		})

		closeTrigger?.addEventListener('click', () => {
			navigation?.classList.remove('overlay')
			closeTrigger.classList.add('hidden')

			icons?.classList.add('hidden')
			icons?.classList.remove('flex')

			navigation?.classList.add('items-center')
			navigation?.classList.add('justify-between')
		})
	})

	return (
		<header className="container gap-4 justify-between items-center p-10 mb-8 ">
			<div id="navigation" className="flex justify-between items-center">
				<div className="flex justify-between">
					<div className="logo logo-type">Logo Here</div>
					<svg
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
					<ul id="list" className="hidden md:flex gap-12 items-center text-primary">
						{navLinks.map(
							(link: string, index: number): JSX.Element => (
								<li
									key={index}
									className="flex gap-12 justify-between font-['Roboto'] text-[14px] leading-[16px] md:text-base md:leading"
								>
									<NavLink
										className={({ isActive }) => (isActive ? 'font-bold' : '')}
										to={link === 'Home' ? '/' : link.toLowerCase()}
									>
										{link}
									</NavLink>
								</li>
							)
						)}
					</ul>

					<div className="hidden md:flex gap-9 text-primary">
						<div className="flex justify-center items-center rounded-full border border-black w-8 h-8 cursor-pointer">
							<img src="../../assets/images/Header/user.svg" alt="" />
						</div>
						<div className="flex justify-center items-center rounded-full border border-black w-8 h-8 cursor-pointer">
							<img src="../../assets/images/Header/cart.svg" alt="" />
						</div>
					</div>

					<svg
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

				<div id="icons" className="hidden justify-center gap-[50px] mt-12">
					<div className="flex justify-center items-center rounded-full border border-white w-8 h-8 cursor-pointer">
						<img src=".../../assets/images/Header/user-light.svg" alt="" />
					</div>
					<div className="flex justify-center items-center rounded-full border border-white w-8 h-8 cursor-pointer">
						<img src="../../assets/images/Header/cart-light.svg" alt="" />
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
