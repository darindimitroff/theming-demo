import React from 'react'
import Box from 'components/primitives/box'

import Icon from 'components/atoms/icon'

const Button = props => {
    return (
        <Box {...props} is="button" display="flex" justifyContent="center" alignItems="center" border={1} px={2} py={1} color="grey85" bg="grey37" borderColor="grey21" borderRadius={1}>
            {props.icon ?
                <Icon mr={2} glyph={props.icon} />
                : null}
            {props.children}
        </Box>
    )
}

export default Button