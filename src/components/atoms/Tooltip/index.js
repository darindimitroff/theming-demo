import React from 'react'

import Box from 'components/primitives/box'

const Tooltip = (props) => {
    return (
        <Box p={1} bg="grey100" color="grey550" textAlign="center" position="absolute" mb={1} bottom="100%" minWidth={80} width={1} borderRadius={1}>{props.children}</Box>
    )
}

export default Tooltip