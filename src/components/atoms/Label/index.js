import React from 'react'
import PropTypes from 'prop-types'

import Text from 'components/primitives/Text'

const Label = props => {
  return (
    <Text
      {...props}
      letterSpacing="-.2px"
      lineHeight={1}
      fontSize={() => {
        switch (props.sizePreset) {
          case 'small':
            return 1
          case 'medium':
            return 2
          case 'large':
            return 3
          default:
            return 2
        }
      }}
    >
      {props.children}
    </Text>
  )
}

Label.propTypes = {
  sizePreset: PropTypes.oneOf(['small', 'medium', 'large']),
  children: PropTypes.string,
}

Label.defaultProps = {
  sizePreset: 'medium',
}

export default Label
