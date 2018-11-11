import React from 'react'

import Box from 'components/primitives/Box'

const Sidebar = props => {
    return (
        <Box
            width='240px'
            height="100vh"
            position="fixed"
            overflow="scroll"
            bg="grey500"
            borderLeft={1}
            borderColor="grey650">{props.children}</Box>
    )
}

export default Sidebar
