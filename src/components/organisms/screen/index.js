import React from 'react'
import Box from 'components/primitives/box'

const Screen = props => {
    return (
        <Box display="flex" width="100vw" height="100vh" justifyContent="flex-end">{props.children}</Box>
    )
}

export default Screen