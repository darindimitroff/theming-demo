import React from 'react'
import propTypes from 'prop-types'

import system from 'system-components'

const Text = system(
	'space',
	'width',
	'color',
	'fontSize',
	'fontWeight',
	'fontFamily',
	'lineHeight',
	'letterSpacing',
	'textAlign',
	'textStyle',
	'display',
)

Text.defaultProps = {
	is: 'span',
	'fontSize': 2,
	display: 'block',
	'lineHeight': '16px',
	'color': 'grey85',
}

Text.displayName = 'Text'

export default Text
