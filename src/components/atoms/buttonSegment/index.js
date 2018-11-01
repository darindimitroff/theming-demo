import React from 'react'

import Box from 'components/primitives/box'

const ButtonSegment = props => {
    return (
        <Box is="button" width={1} mx="-1px" display="flex" justifyContent="center" alignItems="center" border={1} px={2} py={1} color="grey85" bg="grey37" borderColor="grey21">{props.children}</Box>
    )
}

export default ButtonSegment