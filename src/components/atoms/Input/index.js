import React from 'react'
import PropTypes from 'prop-types'

import Box from 'components/primitives/Box'
import Flex from 'components/atoms/Flex'
import Text from 'components/primitives/Text'

const Input = props => {
  return (
    <Flex {...props} alignItems="center" position="relative" overflow="hidden">
      <Box
        as="input"
        width={1}
        border={1}
        pl={2}
        py={1}
        color="grey150"
        bg="grey600"
        borderColor="grey650"
        borderRadius={1}
        hoverState="lightenHover"
        focusState="murderedFocused"
        pr={props.unit ? 6 : 2}
        style={
          {
            left: {
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
            },
            right: {
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
            },
            default: null,
          }[props.attach]
        }
      />
      {/* Render a unit only if one is passed */}
      {props.unit ? (
        <Flex
          position="absolute"
          zIndex="2"
          right={0}
          top={0}
          height="100%"
          alignItems="center"
          p={1}
          pr={2}
          value={props.value}
        >
          <Text
            fontSize={0}
            color="grey250"
            style={{
              textTransform: 'uppercase',
            }}
          >
            {props.unit}
          </Text>
        </Flex>
      ) : (
        false
      )}
    </Flex>
  )
}

Input.PropTypes = {
  attach: PropTypes.oneOf('left', 'right'),
  unit: PropTypes.string,
}

export default Input
