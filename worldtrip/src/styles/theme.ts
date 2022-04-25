import { extendTheme } from "@chakra-ui/react";


const theme = {
	fonts: {
		body: 'Poppins',
		heading: 'Poppins',
	},
	colors: {
		highlight: {
			full: '#FFBA08',
			half: 'rgba(255, 186, 8, 0.5)',
		},
		dark: {
			black: '#000000',
			heading: '#47585B',
			info: {
				full: '#999999',
				half: 'rgba(153, 153, 153, 0.5)',
			},
		},
		light: {
			white: '#FFFFFF',
			heading: '#F5F8FA',
			info: '#DADADA',
		},
	},
};

export const extendedTheme = extendTheme(theme);
