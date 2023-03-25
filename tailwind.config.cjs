/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	plugins: [require('@tailwindcss/typography')],
	fontFamily: {
		sans: ['Poppins'],
	},
	theme: {
		fontSize: {
			sm: ['12px', '20px'],
			base: ['16px', '24px'],
			lg: ['18px', '27px'],
			xl: ['24px', '32px'],
			'2xl': ['28px', '42px'],
		},
		extend: {
			colors: {
				primary: '#1F1F1F',
				secondary: '#8D8D8D',
				medium: '#717171',
				lightGray: '#C9C9C9',
			},
			container: {
				center: true,
				screens: {
					sm: '780px',
					md: '900px',
					lg: '1024px',
					xl: '1240px',
					'2xl': '1440px',
				},
				padding: {
					DEFAULT: '1rem',
					sm: '1.25rem',
					lg: '5rem',
					xl: '6rem',
					'2xl': '6rem',
				},
				boxShadow: {
					'3xl': ' 0px 0px 14px rgba(0, 0, 0, 0.12)',
				},
			},
		},
	},
}
