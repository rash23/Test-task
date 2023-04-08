import { FC, FormEvent, ChangeEvent, useEffect, useState } from 'react'
import { RootState } from 'src/types'
import { useDispatch, useSelector } from 'react-redux'
import { SubjectType } from 'src/redux/Contact/types'
import CustomButtonComponent from '../UI/CustomButtonComponent'
import CustomInputComponent from '../UI/CustomInputComponent'
import CustomCheckboxComponent from '../UI/CustomCheckboxComponent'

import {
	setFirstName,
	setLastName,
	setEmail,
	setPhoneNumber,
	setMessage,
	setSubject,
} from '../../redux/Contact/contact.slice'

const ContactForm: FC = (): JSX.Element => {
	const dispatch = useDispatch()
	const [isDisabled, setDisabled] = useState(false)

	const firstName: string = useSelector((state: RootState): string => state.contact.firstName)
	const lastName: string = useSelector((state: RootState): string => state.contact.lastName)
	const email: string = useSelector((state: RootState): string => state.contact.email)
	const phoneNumber: string = useSelector((state: RootState): string => state.contact.phoneNumber)
	const subjects: SubjectType[] = useSelector((state: RootState): SubjectType[] => state.contact.subjects)
	const message: string = useSelector((state: RootState): string => state.contact.message)

	useEffect(() => {
		if (!firstName || !lastName || !email || !phoneNumber || !message) {
			setDisabled(true)
		} else {
			setDisabled(false)
		}
	}, [firstName, lastName, email, phoneNumber, phoneNumber, message])

	const clearForm = () => {
		dispatch(setFirstName(''))
		dispatch(setLastName(''))
		dispatch(setEmail(''))
		dispatch(setPhoneNumber(''))
		dispatch(setMessage(''))
		dispatch(
			setSubject([
				{ name: 'General Inquiry1', isSelected: false },
				{ name: 'General Inquiry2', isSelected: false },
				{ name: 'General Inquiry3', isSelected: false },
				{ name: 'General Inquiry4', isSelected: false },
			])
		)
	}
	const handleSubmit = (event: FormEvent): void => {
		event.preventDefault()

		alert('Message sent successfully')

		console.log('firstName: ', firstName)
		console.log('lastName: ', lastName)
		console.log('email: ', email)
		console.log('phoneNumber: ', phoneNumber)
		console.log('subjects: ', subjects)
		console.log('message: ', message)

		clearForm()
	}

	const handleSubjectChange = (event: ChangeEvent<HTMLInputElement>) => {
		const subjectName = event.target.name
		const isChecked = event.target.checked

		const updatedSubjectData = subjects.map((subject) => {
			if (subject.name === subjectName) {
				return { name: subject.name, isSelected: isChecked }
			}
			return subject
		})

		dispatch(setSubject(updatedSubjectData))
	}

	return (
		<form onSubmit={(event) => handleSubmit(event)} className="w-full md:w-7/12 p-[20px] md:p-[50px]">
			<div className="flex flex-col md:flex-row justify-between gap-10 mb-11">
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
			</div>
			<div className="flex flex-col md:flex-row justify-between gap-10 mb-11">
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
					onChange={(event) => dispatch(setPhoneNumber(event.target.value))}
				/>
			</div>

			<div>
				<div className="text-[14px] leading-[20px] text-black font-semibold mb-3.5">Select Subject?</div>
				<div className="flex gap-5 mb-11 flex-wrap text-sm md:text-base">
					{subjects.map((subject) => (
						<CustomCheckboxComponent
							key={subject.name}
							name={subject.name}
							checked={subject.isSelected}
							onChange={handleSubjectChange}
						/>
					))}
				</div>
			</div>
			<div className="mb-11">
				<CustomInputComponent
					label="Message"
					placeholder="Write your message..."
					value={message}
					onChange={(event) => dispatch(setMessage(event.target.value))}
				/>
			</div>
			<div className="flex justify-center md:justify-end">
				<div className="relative w-full md:w-[214px]">
					<CustomButtonComponent disabled={isDisabled} text="Send Message" type="submit" />
				</div>

				<div className="absolute  w-28 -translate-x-[50%] translate-y-12 md:w-auto md:-translate-x-20 md:translate-y-10">
					<img src="/assets/images/Contact/visual/letter-send.svg" alt="" />
				</div>
			</div>
		</form>
	)
}

export default ContactForm
