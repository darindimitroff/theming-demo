import palette from './palette'

const unit = 4;

const themeLight = {
	// Space
	space: [
		0, unit, unit * 2, unit * 3, unit * 4, unit * 5, unit * 6, unit * 7, unit * 8, unit * 9, unit * 10, unit * 11, unit * 12,
	],
	// Color
	colors: {
		white: palette.white,
		grey99: palette.grey99,
		grey85: palette.grey85,
		grey76: palette.grey76,
		grey65: palette.grey65,
		grey50: palette.grey50,
		grey45: palette.grey45,
		grey37: palette.grey37,
		grey30: palette.grey30,
		grey25: palette.grey25,
		grey21: palette.grey21,
		grey17: palette.grey17,
		grey10: palette.grey10,
		black: palette.black,
	},

	// Typography
	fontSizes: [
		8, 10, 11, 12, 14, 16, 18,
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
			fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
			fontWeight: 500,
		},
		t2: {
			fontSize: '14px',
			lineHeight: '16px',
			fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
			fontWeight: 600,
		},
		t3: {
			fontSize: '12px',
			lineHeight: '16px',
			fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
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

export default themeLight
