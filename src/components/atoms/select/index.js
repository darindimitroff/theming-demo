import React from 'react'
import Box from 'components/primitives/box'

import Icon from 'components/atoms/icon'
import Flex from 'components/atoms/flex'

import ButtonBase from 'components/atoms/ButtonBase'

import { ReactComponent as CaretIcon } from 'assets/caret-down-medium.svg'

const Select = props => {
    return (
        <ButtonBase {...props} as="button" width={1} justifyContent="space-between" borderRadius={1} label={props.current} secondaryIcon={<CaretIcon width="9px" height="6px" />} />
    )
}

export default Select