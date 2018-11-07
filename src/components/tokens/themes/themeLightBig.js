import palette from './palette'

const unit = 8;

const theme = {
	// Space
	space: [
		0, unit, unit * 2, unit * 3, unit * 4, unit * 5, unit * 6, unit * 7, unit * 8, unit * 9, unit * 10, unit * 11, unit * 12,
	],
	// Color
	colors: {
		white: "#FFF",
		grey4500: "#FCFCFC",
		grey150: palette.grey500,
		grey200: palette.white,
		grey250: "#A6A6A6",
		grey4500: palette.grey250,
		grey350: palette.grey200,
		grey400: palette.white,
		grey450: "#4D4D4D",
		grey500: palette.grey4500,
		grey550: palette.grey200,
		grey600: palette.grey100,
		grey650: palette.grey250,
		black: "#000",
	},

	// Typography
	fontSizes: [
		8, 10, 14, 16, 20, 24, 28,
	],
	fonts: {
		arial: 'Arial',
		'system': '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;'
	},
	lineHeights: [
		unit * 3, unit * 4, unit * 5, unit * 6,
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
			lineHeight: '16px',
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
	}
}

export default theme
