/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
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
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		colors: {}
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
		},
        require("tailwindcss-animate")
    ]
}
