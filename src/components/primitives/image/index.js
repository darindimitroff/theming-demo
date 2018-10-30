import React from 'react'
import propTypes from 'prop-types'

import system from 'system-components'
import {
	maxWidth
} from 'styled-system'

const Image = system(
	'space',
	'width',
	'height',
	'size',
	'maxWidth',
	'color',
)

Image.defaultProps = {
	is: 'img',
	maxWidth: '100%',
}

Image.displayName = 'Image'

export default Image
