import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ContactStateProps, SubjectType } from './types'

const initialState: ContactStateProps = {
	firstName: '',
	lastName: '',
	email: '',
	phoneNumber: '',
	message: '',
	subjects: [
		{ name: 'checkbox1', isSelected: false },
		{ name: 'checkbox2', isSelected: false },
		{ name: 'checkbox3', isSelected: false },
		{ name: 'checkbox4', isSelected: false },
	],
	contactAddressData: [
		{
			icon: 'src/assets/images/Contact/address/phone.svg',
			text: '+1012 3456 789',
		},
		{
			icon: 'src/assets/images/Contact/address/mail.svg',
			text: 'demo@gmail.com',
		},
		{
			icon: 'src/assets/images/Contact/address/location.svg',
			text: '132 Dartmouth Street Boston, Massachusetts 02156 United States',
		},
	],
}

export const contactSlice = createSlice({
	name: 'contact',
	initialState,
	reducers: {
		setFirstName: (state: ContactStateProps, action: PayloadAction<string>) => {
			state.firstName = action.payload
		},
		setLastName: (state: ContactStateProps, action: PayloadAction<string>) => {
			state.lastName = action.payload
		},
		setEmail: (state: ContactStateProps, action: PayloadAction<string>) => {
			state.email = action.payload
		},
		sePhoneNumber: (state: ContactStateProps, action: PayloadAction<string>) => {
			state.phoneNumber = action.payload
		},
		setMessage: (state: ContactStateProps, action: PayloadAction<string>) => {
			state.message = action.payload
		},
		setSubject: (state: ContactStateProps, action: PayloadAction<SubjectType[]>) => {
			state.subjects = action.payload
		},
	},
})

export const { setFirstName, setLastName, setEmail, sePhoneNumber, setMessage, setSubject } = contactSlice.actions

export default contactSlice.reducer
