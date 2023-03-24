import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GeneralStateProps } from './types'

const initialState: GeneralStateProps = {
	navLinks: ['Home', 'Features', 'Blog', 'Shop', 'About', 'Contact'],
	company: ['About', 'Contact', 'Blogs'],
	legal: [
		{ title: 'Privacy Policy', link: '' },
		{ title: 'Terms and Conditions', link: '' },
		{ title: 'Terms of Use', link: '' },
		{ title: 'Refound Policy', link: '' },
	],
	links: [
		{ title: 'Refound Techlabz', link: '' },
		{ title: 'Downloads', link: '' },
		{ title: 'Forum', link: '' },
	],
	email: '',
}

export const generalSlice = createSlice({
	name: 'contact',
	initialState,
	reducers: {
		setNewsletterEmail: (state: GeneralStateProps, action: PayloadAction<string>) => {
			state.email = action.payload
		},
	},
})

export const { setNewsletterEmail } = generalSlice.actions

export default generalSlice.reducer
