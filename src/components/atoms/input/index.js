import React from 'react'
import Box from 'components/primitives/box'
import Flex from 'components/atoms/flex'
import Text from 'components/primitives/text'

const Input = props => {
    return (
        <Flex {...props} alignItems="center" position="relative" overflow="hidden">
            <Box as="input" width={1} border={1} pl={2} py={1} pr={8} color="grey150" bg="grey600" borderColor="grey650" borderRadius={1} hoverState='lighten' focusState='murdered' />

            {/* Render a unit only if one is passed */}
            {props.unit ?
                <Flex position="absolute" zIndex="2" right={0} top={0} height="100%" alignItems="center" p={1} pr={2} value={props.value}>
                    <Text fontSize={1} color="grey250" style={{ textTransform: 'uppercase' }}>{props.unit}</Text>
                </Flex> : false
            }
        </Flex>
    )
}

export default Input