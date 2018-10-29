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
	'textTransform',
)

Text.defaultProps = {
	is: 'span',
	'fontFamily': 'Arial',
	'fontSize': 2,
	'lineHeight': "16px",
}

Text.displayName = 'Text'

export default Text
