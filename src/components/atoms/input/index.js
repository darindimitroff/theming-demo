import React from 'react'
import Box from 'components/primitives/box'
import Flex from 'components/atoms/flex'
import Text from 'components/primitives/text'

const Input = props => {
    return (
        <Flex {...props} alignItems="center" position="relative" overflow="hidden">
            <Box is="input" width={1} border={1} p={1} color="white" bg="grey17" borderColor="grey10" borderRadius={1} value={props.value} />

            {/* Render a unit only if one is passed */}
            {props.unit ?
                <Flex position="absolute" right={0} top={0} height="100%" alignItems="center" p={1} fontSize={1} color="grey65">
                    <Text>{props.unit}</Text>
                </Flex> : false
            }

        </Flex>
    )
}

export default Input