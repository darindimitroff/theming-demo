import React from 'react'
import propTypes from 'prop-types'

import system from 'system-components'

const Text = system(
	'space',
	'width',
	'color',
	'fontSize',
	'fontWeight',
	'lineHeight',
	'letterSpacing',
	'textAlign',
	'textStyle',
)

Text.defaultProps = {
	is: 'p',
	fontFamily: 'arial',
}

Text.displayName = 'Text'

export default Text
