import React from 'react'
import Box from 'components/primitives/box'

const Flex = props => {
    return (
        <Box display="flex" {...props}>{props.children}</Box>
    )
}

export default Flex