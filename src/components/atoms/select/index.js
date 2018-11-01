import React from 'react'
import Box from 'components/primitives/box'

import Icon from 'components/atoms/icon'
import Flex from 'components/atoms/flex'

import { ReactComponent as CaretIcon } from 'assets/caret-down-medium.svg'

const Select = props => {
    return (
        <Box {...props} display="flex" justifyContent="space-between" alignItems="center" border={1} px={2} py={1} color="grey85" bg="grey37" borderColor="grey21" borderRadius={1}>
            <Flex>
                {props.icon ?
                    <Icon mr={2} glyph={props.icon} />
                    : null}
                {props.current}
            </Flex>
            <Icon glyph={<CaretIcon width="9px" height="6px" />} />
        </Box>
    )
}

export default Select