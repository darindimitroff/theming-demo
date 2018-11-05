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

Text.defaultProps = {
	'fontSize': 2,
	display: 'block',
	'lineHeight': '16px',
	'color': 'grey85',
}

Text.displayName = 'Text'

export default Text
