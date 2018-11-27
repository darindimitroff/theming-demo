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
  key: 'hoverStates',
})

// This is the hook for active states
const activeState = variant({
  prop: 'activeState',
  key: 'activeStates',
})

// This is the hook for active states
const focusState = variant({
  prop: 'focusState',
  key: 'focusStates',
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

Box.propTypes = {
  ...space.propTypes,
  ...width.propTypes,
  ...minWidth.propTypes,
  ...ratio.propTypes,
  ...size.propTypes,
  ...maxWidth.propTypes,
  ...height.propTypes,
  ...minHeight.propTypes,
  ...maxHeight.propTypes,
  ...color.propTypes,
  ...display.propTypes,
  ...zIndex.propTypes,
  ...fontFamily.propTypes,
  ...fontSize.propTypes,
  ...fontWeight.propTypes,
  ...lineHeight.propTypes,
  ...letterSpacing.propTypes,
  ...textAlign.propTypes,
  ...textStyle.propTypes,
  ...border.propTypes,
  ...borderTop.propTypes,
  ...borderRight.propTypes,
  ...borderBottom.propTypes,
  ...borderLeft.propTypes,
  ...borderColor.propTypes,
  ...borderRadius.propTypes,
  ...position.propTypes,
  ...top.propTypes,
  ...right.propTypes,
  ...bottom.propTypes,
  ...left.propTypes,
  ...boxShadow.propTypes,
  ...backgroundImage.propTypes,
  ...backgroundSize.propTypes,
  ...backgroundPosition.propTypes,
  ...backgroundRepeat.propTypes,
  ...opacity.propTypes,
  ...justifyContent.propTypes,
  ...flexWrap.propTypes,
  ...flexDirection.propTypes,
  ...flex.propTypes,
  ...alignContent.propTypes,
  ...justifyItems.propTypes,
  ...justifySelf.propTypes,
  ...alignSelf.propTypes,
  ...alignItems.propTypes,
  ...order.propTypes,
  ...flexBasis.propTypes,
}

Box.displayName = Box

export default Box
