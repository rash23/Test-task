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
				primary: '#7763F1',
				green: '#54E19D',
				red: '#ED576B',
			},
			container: {
				center: true,
				screens: {
					sm: '600px',
					md: '728px',
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
			},
		},
	},
}
