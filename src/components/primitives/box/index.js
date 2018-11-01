import React from 'react'
import PropTypes from 'prop-types'

import system from 'system-components'

const Box = system(
	'space',
	'width',
	'minWidth',
	'ratio',
	'size',
	'maxWidth',
	'height',
	'minHeight',
	'maxHeight',
	'color',
	'display',
	'zIndex',
	// Typography
	'fontFamily',
	'fontSize',
	'fontWeight',
	'lineHeight',
	'letterSpacing',
	'textAlign',
	'textStyle',
	// Borders
	'border',
	'borderTop',
	'borderRight',
	'borderBottom',
	'borderLeft',
	'borderColor',
	'borderRadius',
	// Position
	'position',
	'top',
	'right',
	'bottom',
	'left',
	// Misc
	'boxShadow',
	'backgroundImage',
	'backgroundSize',
	'backgroundPosition',
	'backgroundRepeat',
	'opacity',
	// TODO
	// Shadows
	// Flexbox
	'justifyContent',
	'flexWrap',
	'flexDirection',
	'flex',
	'alignContent',
	'justifyItems',
	'justifySelf',
	'alignSelf',
	'alignItems',
	'order',
	'flexBasis'
	// Opacity
	// Text Styles
	// Color Styles (maybe later)
)

Box.defaultProps = {
	'fontSize': 2,
	'lineHeight': "16px",
	'color': 'grey85',
}

Box.displayName = 'Box'

export default Box
