export type ContactAddressType = {
	icon: string
	text: string
}

export type SubjectType = {
	name: string
	isSelected: boolean
}

export interface ContactStateProps {
	firstName: string
	lastName: string
	email: string
	phoneNumber: string
	subjects: SubjectType[]
	message: string
	contactAddressData: ContactAddressType[]
}
