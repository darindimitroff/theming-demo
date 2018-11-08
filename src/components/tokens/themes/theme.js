import palette from './palette'

const unit = 4;

const theme = {
	// Space
	space: [
		0, unit, unit * 2, unit * 3, unit * 4, unit * 5, unit * 6, unit * 7, unit * 8, unit * 9, unit * 10, unit * 11, unit * 12,
	],
	// Color
	colors: {
		// Neutrals
		white: palette.white,
		grey50: palette.grey50,
		grey150: palette.grey150,
		grey200: palette.grey200,
		grey250: palette.grey250,
		grey300: palette.grey300,
		grey350: palette.grey350,
		grey400: palette.grey400,
		grey450: palette.grey450,
		grey500: palette.grey500,
		grey550: palette.grey550,
		grey600: palette.grey600,
		grey650: palette.grey650,
		black: palette.black,
		// Reds
		red86: palette.red86,
		red78: palette.red78,
		red68: palette.red68,
		// Orange

	},

	// Typography
	fontSizes: [
		8, 10, 11, 12, 14, 16, 18,
	],
	fonts: {
		'inter': 'Inter UI',
		'system': '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;'
	},
	lineHeights: [
		0, "12px", "16px", "20px",
	],
	weights: [400, 500, 600],
	textStyles: {
		t1: {
			fontSize: '18px',
			lineHeight: '24px',
			fontWeight: 500,
		},
		t2: {
			fontSize: '14px',
			lineHeight: '16px',
			fontWeight: 600,
		},
		t3: {
			fontSize: '12px',
			lineHeight: '12px',
			fontWeight: 600,
		},
	},

	// Borders
	borders: [
		0, 1, 2, 3,
	],

	// Misc
	radii: [0, 2, 3],
	shadows: [
		0,
		'rgba(0, 0, 0, 0.4) 0px 0px 24px 0px, rgba(0, 0, 0, 0.4) 0px 2px 4px 0',
	],
	opacity: [
		0, 1 / 4, 1 / 2, 3 / 4, 1
	],
	motion: {
		fast: '100ms ease',
		fastEntry: '100ms ease-out',
		fastExit: '100mms ease-in',
		defaultSlow: '150ms ease',
		medium: '150ms ease',
		mediumEntry: '150ms ease',
		mediumExit: '150ms ease',
		slow: '200ms ease',
		slowExit: '200ms ease',
		slowEntry: '200ms ease',
	},
	pseudoStates: {
		lighten: {
			transition: 'all 100ms ease',
			'&:hover': {
				filter: 'brightness(1.1)',
			}
		},
		darken: {
			transition: 'all 100ms ease',
			'&:active': {
				filter: 'brightness(.95) saturate(1.1)',
			}
		},
		focused: {
			transition: 'all 100ms ease',
			'&:focus': {
				zIndex: 2,
				outline: 0,
				borderColor: '#178DF7',
			}
		},
		murdered: {
			transition: 'all 100ms ease',
			'&:focus': {
				zIndex: 2,
				outline: 0,
				borderColor: '#178DF7',
				backgroundColor: palette.grey650,
			}
		},
	},
}

export default theme
