import React from 'react'
import propTypes from 'prop-types'

import styled from 'styled-components'
import {
	space,
	width,
	height,
	size,
	maxWidth,
} from 'styled-system'

const Image = styled.img(
	${ space }
	${ width }
	${ height }
	${ size }
	${ maxWidth }
)

Image.propTypes = {
	...space.propTypes,
	...width.propTypes,
	...height.propTypes,
	...size.propTypes,
	...maxWidth.propTypes,
}

Image.defaultProps = {
	maxWidth: '100%',
}

Image.displayName = 'Image'

export default Image
