import React from 'react'
import PropTypes from 'prop-types'

import Flex from 'components/atoms/Flex'
import Icon from 'components/atoms/Icon'

const ButtonBase = props => {
  return (
    <Flex
      {...props}
      alignItems="center"
      border={1}
      py={1}
      color="grey150"
      bg="grey400"
      position="relative"
      hoverState="lightenHover"
      activeState="darkenActive"
      focusState="focused"
      borderColor={props.attach ? 'grey650' : 'grey550'}
      style={
        {
          left: { borderTopLeftRadius: 0, borderBottomLeftRadius: 0 },
          right: { borderTopRightRadius: 0, borderBottomRightRadius: 0 },
          default: null,
        }[props.attach]
      }
    >
      <Flex>
        {props.icon ? (
          <Icon
            mr={props.label ? 2 : 0}
            glyph={props.icon}
            sizePreset="large"
          />
        ) : null}
        {props.label}
      </Flex>
      {props.control ? props.control : null}
    </Flex>
  )
}

ButtonBase.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.node,
  tooltip: PropTypes.string,
  attach: PropTypes.oneOf('left', 'right'),
  control: PropTypes.node,
}

export default ButtonBase
