import React from 'react'

import ButtonBase from 'components/atoms/ButtonBase'

const Button = props => {
    return (<ButtonBase
        {...props}
        borderRadius={1}
        justifyContent="center"
        as="Button"
        Label={props.children}/>)
}

export default Button
