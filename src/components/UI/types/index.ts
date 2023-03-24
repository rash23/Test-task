import { InputHTMLAttributes, ButtonHTMLAttributes } from 'react'

export interface ButtonPropsType extends ButtonHTMLAttributes<HTMLButtonElement> {
	text: string
}

export interface InputPropsType extends InputHTMLAttributes<HTMLInputElement> {
	label: string
}
