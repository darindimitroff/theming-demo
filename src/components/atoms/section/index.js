import React from 'react'

import Box from 'components/primitives/box'
import Text from 'components/primitives/text'

import Flex from 'components/atoms/flex'

const Section = props => {
    return (
        <Box>
            <Flex bg="grey600" color="grey150" p={2} borderBottom={1} borderTop={1} borderColor="grey650">
                <Text textStyle="t3">{props.label}</Text>
            </Flex>
            <Box p={2}>{props.children}</Box>
        </Box>
    )
}

export default Section