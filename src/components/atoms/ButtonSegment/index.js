import React from 'react'

import ButtonBase from 'components/atoms/ButtonBase'

const ButtonSegment = props => {
    return (<ButtonBase
        {...props}
        as="Button"
        width={1}
        mx="-1px"
        justifyContent="center"
        Label={props.children}
        px={props.Label
        ? 2
        : 0}/>)
}

export default ButtonSegment
