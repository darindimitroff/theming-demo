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
            <ButtonBase attach="left" as="button" label={props.label} icon={props.icon} ml="-1px" borderRadius={1} />
        </Flex>
    )
}

export default InputWithButton