import React from 'react'
import Flex from 'components/atoms/Flex'

const Screen = props => {
    return (
        <Flex width="100vw" height="100vh" justifyContent="Flex-end">{props.children}</Flex>
    )
}

export default Screen
