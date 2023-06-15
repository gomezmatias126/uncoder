/** @type {import('tailwindcss').Config} */
let defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container:{
			center:true,
			padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
        xl: '3rem',
        '2xl': '4rem',
      },
    },
		fontFamily:{
			'sans': ['"DM Sans"', ...defaultTheme.fontFamily.sans]
		},
		fontWeight:{
			regular:'400',
			medium: '500',
			bold: '700'
		},
		extend: {
			colors:{
				'verde':'#3AC989',
				'celeste':'#8CD6F7',
				'violeta':'#883BFF',
				'naranja':'#FAB82C',
				'light':'#FCFEFF',
				'grey':{
					DEFAULT:'#808080',
					text:'#BBBBBB',
					light:'#DDDDDD'
				},
				'dark': {
					DEFAULT:'#090A05',
					light: '#2B2C27',
					tenue: '#3E4036'
				}
			},
		},
	},
	plugins: [],
}
