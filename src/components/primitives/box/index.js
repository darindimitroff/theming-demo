import React from 'react'

import styled from 'styled-components'
import {
	space,
	width,
	minWidth,
	ratio,
	size,
	maxWidth,
	height,
	minHeight,
	maxHeight,
	color,
	display,
	zIndex,
	fontFamily,
	fontSize,
	fontWeight,
	lineHeight,
	letterSpacing,
	textAlign,
	textStyle,
	border,
	borderTop,
	borderRight,
	borderBottom,
	borderLeft,
	borderColor,
	borderRadius,
	position,
	top,
	right,
	bottom,
	left,
	boxShadow,
	backgroundImage,
	backgroundSize,
	backgroundPosition,
	backgroundRepeat,
	opacity,
	justifyContent,
	flexWrap,
	flexDirection,
	flex,
	alignContent,
	justifyItems,
	justifySelf,
	alignSelf,
	alignItems,
	order,
	flexBasis,
} from 'styled-system'

const Box = styled.div`
	${space}
	${width}
	${minWidth}
	${ratio}
	${size}
	${maxWidth}
	${height}
	${minHeight}
	${maxHeight}
	${color}
	${display}
	${zIndex}
	// Typography
	${fontFamily}
	${fontSize}
	${fontWeight}
	${lineHeight}
	${letterSpacing}
	${textAlign}
	${textStyle}
	// Borders
	${border}
	${borderTop}
	${borderRight}
	${borderBottom}
	${borderLeft}
	${borderColor}
	${borderRadius}
	// Position
	${position}
	${top}
	${right}
	${bottom}
	${left}
	// Misc
	${boxShadow}
	${backgroundImage}
	${backgroundSize}
	${backgroundPosition}
	${backgroundRepeat}
	${opacity}
	// TODO
	// Shadows
	// Flexbox
	${justifyContent}
	${flexWrap}
	${flexDirection}
	${flex}
	${alignContent}
	${justifyItems}
	${justifySelf}
	${alignSelf}
	${alignItems}
	${order}
	${flexBasis}
	// Opacity
	// Text Styles
	// Color Styles (maybe later)
	`

Box.defaultProps = {
	'fontSize': 2,
	'lineHeight': "16px",
	'color': 'grey85',
}

Box.displayName = Box

export default Box
