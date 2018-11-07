import React from 'react'
import Flex from 'components/atoms/flex'

const Icon = props => {
    return (
        <Flex {...props} as="i" alignItems="center" justifyContent="center" width={props.width} height={props.height}>
            {props.glyph}
        </Flex>
    )
}

Icon.defaultProps = {
    width: "16px",
    height: "16px",
}

export default Icon