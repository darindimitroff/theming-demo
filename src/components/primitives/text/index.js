import React from 'react'
import propTypes from 'prop-types'

import styled from 'styled-components'
import {
	space,
	width,
	color,
	fontSize,
	fontWeight,
	fontFamily,
	lineHeight,
	letterSpacing,
	textAlign,
	textStyle,
	display,
} from 'styled-system'

const Text = styled.span`
	${space}
	${width}
	${color}
	${fontSize}
	${fontWeight}
	${fontFamily}
	${lineHeight}
	${letterSpacing}
	${textAlign}
	${textStyle}
	${display}
`

Text.propTypes = {
	...space.propTypes,
	...width.propTypes,
	...color.propTypes,
	...fontSize.propTypes,
	...fontWeight.propTypes,
	...fontFamily.propTypes,
	...lineHeight.propTypes,
	...letterSpacing.propTypes,
	...textAlign.propTypes,
	...textStyle.propTypes,
	...display.propTypes,
}

Text.defaultProps = {
	'fontSize': 2,
	display: 'block',
	'lineHeight': '16px',
	'color': 'grey150',
}

Text.displayName = 'Text'

export default Text
