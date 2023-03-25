import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Error from './Error'
import Contact from '../Contact/Contact'
import Header from './Header'
import Footer from './Footer'

import { FC } from 'react'

const App: FC = (): JSX.Element => {
	return (
		<div className="wrapper relative">
			<BrowserRouter basename={'/'}>
				<Header />
				<main>
					<Routes>
						<Route path="/" element={<Home />}></Route>
						<Route path="/contact" element={<Contact />}></Route>
						<Route path="*" element={<Error />}></Route>
					</Routes>
				</main>
				<Footer />
			</BrowserRouter>
		</div>
	)
}

export default App
