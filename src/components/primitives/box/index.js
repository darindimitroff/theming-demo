import React from 'react'

import styled from 'styled-components'

import { variant } from 'styled-system'

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

// This is the hook for hover states
const hoverState = variant({
	prop: 'hoverState',
  key: 'pseudoStates',
})

// This is the hook for active states
const activeState = variant({
	prop: 'activeState',
  key: 'pseudoStates',
})

// This is the hook for active states
const focusState = variant({
	prop: 'focusState',
  key: 'pseudoStates',
})

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
	${hoverState}
	${activeState}
	${focusState}
	// Opacity
	// Text Styles
	// Color Styles (maybe later)
	`

Box.defaultProps = {
	'fontSize': 2,
	'lineHeight': "16px",
	'color': 'grey150',
}

Box.displayName = Box

export default Box
