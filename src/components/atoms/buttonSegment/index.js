import React from 'react'

import Flex from 'components/atoms/flex'

const ButtonSegment = props => {
    return (
        <Flex as="button" width={1} mx="-1px" justifyContent="center" alignItems="center" border={1} px={2} py={1} color="grey85" bg="grey37" borderColor="grey21" css='&:hover{filter: brightness(110%)}'>{props.children}</Flex>
    )
}

export default ButtonSegment