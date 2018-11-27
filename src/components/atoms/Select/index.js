import React from 'react'
import PropTypes from 'prop-types'

import ButtonBase from 'components/atoms/ButtonBase'
import Icon from 'components/atoms/Icon'

import { ReactComponent as CaretIcon } from 'assets/caret-down-medium.svg'

const Select = props => {
  return (
    <ButtonBase
      {...props}
      as="button"
      width={1}
      justifyContent="space-between"
      borderRadius={1}
      label={props.current}
      control={<Icon width="9px" height="6px" glyph={<CaretIcon />} />}
    />
  )
}

Select.propTypes = {
  current: PropTypes.string,
}

export default Select
