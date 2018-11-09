import React from 'react'

import Box from 'components/primitives/box'
import ButtonBase from 'components/atoms/ButtonBase'

import Tooltip from 'components/atoms/Tooltip'

const Button = props => {
    return (
        <ButtonBase {...props} borderRadius={1} justifyContent="center" as="Button" Label={props.children} />
    )
}

export default Button