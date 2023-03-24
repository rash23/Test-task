import { FC, FormEvent } from 'react'
import CustomButtonComponent from '../UI/CustomButtonComponent'
import CustomInputComponent from '../UI/CustomInputComponent'
import CustomCheckboxComponent from '../UI/CustomCheckboxComponent'
import { RootState } from 'src/types'
import { useDispatch, useSelector } from 'react-redux'
import {
	setFirstName,
	setLastName,
	setEmail,
	sePhoneNumber,
	setMessage,
	setSubject,
} from '../../redux/Contact/contact.slice'
import { SubjectType } from 'src/redux/Contact/types'

const ContactForm: FC = (): JSX.Element => {
	const dispatch = useDispatch()

	const firstName: string = useSelector((state: RootState): string => state.contact.firstName)
	const lastName: string = useSelector((state: RootState): string => state.contact.lastName)
	const email: string = useSelector((state: RootState): string => state.contact.email)
	const phoneNumber: string = useSelector((state: RootState): string => state.contact.phoneNumber)
	const subjects: SubjectType[] = useSelector((state: RootState): SubjectType[] => state.contact.subjects)
	const message: string = useSelector((state: RootState): string => state.contact.message)

	const handleSubmit = (event: FormEvent): void => {
		event.preventDefault()

		console.log('submit')
		console.log('firstName: ', firstName)
		console.log('lastName: ', lastName)
		console.log('email: ', email)
		console.log('phoneNumber: ', phoneNumber)
		console.log('subjects: ', subjects)
		console.log('message: ', message)
	}

	const handleSubjectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const subjectName = event.target.name
		const isChecked = event.target.checked

		const updatedSubjectData = subjects.map((subject) => {
			if (subject.name === subjectName) {
				return { name: subject.name, isSelected: isChecked }
			} else {
				return subject
			}
		})

		dispatch(setSubject(updatedSubjectData))
	}

	return (
		<form onClick={(event) => handleSubmit(event)}>
			<CustomInputComponent
				label="First name"
				placeholder="First name"
				value={firstName}
				onChange={(event) => {
					dispatch(setFirstName(event.target.value))
				}}
			/>
			<CustomInputComponent
				label="Last name"
				placeholder="Last name"
				value={lastName}
				onChange={(event) => dispatch(setLastName(event.target.value))}
			/>
			<CustomInputComponent
				label="Email"
				placeholder="user@mail.com"
				type="email"
				value={email}
				onChange={(event) => dispatch(setEmail(event.target.value))}
			/>
			<CustomInputComponent
				label="Phone Number"
				placeholder="Phone Number"
				type="tel"
				value={phoneNumber}
				onChange={(event) => dispatch(sePhoneNumber(event.target.value))}
			/>

			{subjects.map((subject) => (
				<CustomCheckboxComponent
					key={subject.name}
					name={subject.name}
					checked={subject.isSelected}
					onChange={handleSubjectChange}
				/>
			))}

			<CustomInputComponent
				label="Message"
				placeholder="Write your message..."
				value={message}
				onChange={(event) => dispatch(setMessage(event.target.value))}
			/>
			<CustomButtonComponent text="Send Message" type="submit" />
		</form>
	)
}

export default ContactForm
