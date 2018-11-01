import React from 'react'
import Box from 'components/primitives/box'
import Flex from 'components/atoms/flex'
import Text from 'components/primitives/text'

const Input = props => {
    return (
        <Flex {...props} alignItems="center" position="relative" overflow="hidden">
            <Box is="input" width={1} border={1} pl={2} py={1} pr={8} color="grey85" bg="grey17" borderColor="grey10" borderRadius={1} />

            {/* Render a unit only if one is passed */}
            {props.unit ?
                <Flex position="absolute" zIndex="2" right={0} top={0} height="100%" alignItems="center" p={1} pr={2} color="grey65" value={props.value}>
                    <Text fontSize={1} css={{ textTransform: 'uppercase' }}>{props.unit}</Text>
                </Flex> : false
            }
        </Flex>
    )
}

export default Input