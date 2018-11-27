import React from 'react'

import ButtonBase from 'components/atoms/ButtonBase'

const ButtonSegment = props => {
  return (
    <ButtonBase
      {...props}
      as="button"
      width={1}
      mx="-1px"
      px={props.label ? 2 : 0}
      justifyContent="center"
      label={props.children}
    />
  )
}

export default ButtonSegment
