import React from 'react'

import Box from 'components/primitives/box'

import Flex from 'components/atoms/flex'
import Input from 'components/atoms/input'
import ButtonBase from 'components/atoms/ButtonBase'

import Grid from 'components/atoms/Grid'

const InputWithButton = props => {
    return (
        <Flex>
            <Input attach="right" />
            <ButtonBase as="button" attach="left" label="1" ml="-1px" borderRadius={1} style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0, }} />
        </Flex>
    )
}

export default InputWithButton