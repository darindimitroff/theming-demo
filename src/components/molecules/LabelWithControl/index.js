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
            return (<div style={{ display: 'grid', gridTemplateColumns: '48px 1fr', gridGap: '8px', alignItems: 'center' }}>
                <Label>{props.label}</Label>
                <Flex>{props.children}</Flex>
            </div>)
        case 'reverse-stacked':
            return (<Flex flexDirection="column" alignItems="stretch">
                {props.children}
                <Label size="small" mt={1} textAlign="center">{props.label}</Label>
            </Flex>)
        default:
            return (<div style={{ display: 'grid', gridTemplateColumns: '48px 1fr', gridGap: '8px', alignItems: 'center' }}>
                <Label>{props.label}</Label>
                {props.children}
            </div>)
    }
}

export default LabelWithControl