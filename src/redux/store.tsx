import { configureStore } from '@reduxjs/toolkit'
import contactSlice from './Contact/contact.slice'
import generalSlice from './General/general.slice'
export const store = configureStore({
	reducer: {
		contact: contactSlice,
		general: generalSlice,
	},
})
