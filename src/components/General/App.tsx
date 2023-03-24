import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Error from './Error'
import Contact from '../Contact/Contact'
import Nav from './Nav'
import Footer from './Footer'

import { FC } from 'react'

const App: FC = (): JSX.Element => {
	return (
		<div className="container">
			<BrowserRouter basename={'/'}>
				<Nav />
				<Routes>
					<Route path="/" element={<Home />}></Route>

					<Route path="/contact" element={<Contact />}></Route>

					<Route path="*" element={<Error />}></Route>
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	)
}

export default App
