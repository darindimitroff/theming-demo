import React from 'react'
import Flex from 'components/atoms/flex'

const Screen = props => {
    return (
        <Flex width="100vw" height="100vh" justifyContent="flex-end">{props.children}</Flex>
    )
}

export default Screen