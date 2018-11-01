import React from 'react'

import Box from 'components/primitives/box'

import Flex from 'components/atoms/flex'
import Label from 'components/atoms/label'
import Icon from 'components/atoms/icon'

const LabelWithControl = props => {
    switch (props.layout) {
        case 'stacked':
            return (<Box>
                <Label mb={1}>{props.label}</Label>
                <Flex>{props.children}</Flex>
            </Box>)
        case 'inline':
            return (<Flex alignItems="center">
                <Label mr={2} width="48px">{props.label}</Label>
                <Flex>{props.children}</Flex>
            </Flex>)
        case 'reverse-stacked':
            return (<Flex flexDirection="column" alignItems="stretch">
                {props.children}
                <Label size="small" mt={1} textAlign="center">{props.label}</Label>
            </Flex>)
        default:
            return (<Flex alignItems="center">
                <Label mr={2} width="48px">{props.label}</Label>
                {props.children}
            </Flex>)
    }
}

export default LabelWithControl