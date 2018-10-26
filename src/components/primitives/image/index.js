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
)

Image.defaultProps = {
	is: 'img',
	src: 'https://cdn.pbrd.co/images/HCuvto6.png',
	maxWidth: '100%',
}

Image.displayName = 'Image'

export default Image
