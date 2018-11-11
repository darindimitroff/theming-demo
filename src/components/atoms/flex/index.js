import React from 'react'
import Box from 'components/primitives/Box'

const Flex = props => {
    return (
        <Box display="Flex" {...props}>{props.children}</Box>
    )
}

export default Flex