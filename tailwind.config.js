/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {
			textShadow: {
				sm: '1px 1px 2px rgba(0, 0, 0, 0.5)',
				md: '2px 2px 4px rgba(0, 0, 0, 0.5)',
				lg: '3px 3px 6px rgba(0, 0, 0, 0.7)'
			},
			boxShadow: {
				sm: 'inset 0 0 0px 0.3px #333',
				md: 'inset 0 0 0px 0.3px #333',
				lg: 'inset 0 0 0px 0.3px #333'
			}
		}
	},
	plugins: [
		function ({ addUtilities }) {
			addUtilities({
				'.text-shadow-sm': { textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' },
				'.text-shadow-md': { textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' },
				'.text-shadow-lg': { textShadow: '3px 3px 6px rgba(0, 0, 0, 0.7)' },
				'.box-shadow-sm': { boxShadow: 'inset 0 0 0px 0.3px #333' },
				'.box-shadow-md': { boxShadow: 'inset 0 0 0px 0.3px #333' },
				'.box-shadow-lg': { boxShadow: 'inset 0 0 0px 0.3px #333' }
			})
		}
	]
}
