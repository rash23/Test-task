import { NavLink } from 'react-router-dom'
import { FC } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'src/types'

const Nav: FC = (): JSX.Element => {
	const navLinks: string[] = useSelector((state: RootState): string[] => state.general.navLinks)

	return (
		<header className="flex gap-4">
			<div>Logo Here</div>
			<nav>
				<ul className="flex gap-2">
					{navLinks.map(
						(link: string, index: number): JSX.Element => (
							<li key={index}>
								<NavLink to={link === 'Home' ? '/' : link.toLowerCase()}>{link}</NavLink>
							</li>
						)
					)}
				</ul>
				<div>
					<div>
						<img src="src/assets/images/Nav/user.svg" alt="" />
					</div>
					<div>
						<img src="src/assets/images/Nav/cart.svg" alt="" />
					</div>
				</div>
			</nav>
		</header>
	)
}

export default Nav
