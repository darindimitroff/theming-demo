import React from 'react'
import Box from 'components/primitives/box'

const Button = props => {
    return (
        <Box {...props} is="button" display="flex" justifyContent="center" alignItems="center" border={1} p={1} color="grey85" bg="grey37" borderColor="grey17" borderRadius={1}>{props.children}</Box>
    )
}

export default Button