import React from 'react'
import Box from 'components/primitives/box'

const Icon = props => {
    return (
        <Box is="i" display="flex" alignItems="center" width={props.width} height={props.height} {...props}>
            {props.glyph}
        </Box>
    )
}

Icon.defaultProps = {
    width: "16px",
    height: "16px",
}

export default Icon