import React from 'react'

import ButtonBase from 'components/atoms/ButtonBase'

const ButtonSegment = props => {
    return (
        <ButtonBase as="button" width={1} mx="-1px" justifyContent="center" label={props.children} />
    )
}

export default ButtonSegment