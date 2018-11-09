import React from 'react'

import ButtonBase from 'components/atoms/ButtonBase'

const ButtonSegment = props => {
    return (
        <ButtonBase {...props} as="button" width={1} mx="-1px" justifyContent="center" label={props.children} px={props.label ? 2 : 0} />
    )
}

export default ButtonSegment