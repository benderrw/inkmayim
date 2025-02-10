/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			textShadow: {
				sm: '1px 1px 2px rgba(0, 0, 0, 0.5)'
			},
			container: {
				screens: {
					'3xl': '1280px'
				}
			},
			keyframes: {
				swipe: {
					'0%, 100%': { transform: 'translateX(0)' },
					'50%': { transform: 'translateX(20px)' }
				}
			},
			animation: {
				swipe: 'swipe 2.5s ease-in-out infinite'
			}
		}
	},
	plugins: [
		function ({ addUtilities }) {
			addUtilities({
				'.text-shadow-sm': { textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' },
				'.box-shadow-sm': { boxShadow: 'inset 0 0 0px 0.3px #333' },
				'.box-shadow-lg': {
					boxShadow: 'inset 0px -40vh 23px -8px rgba(0,0,0,.80)'
				}
			})
		}
	]
}
