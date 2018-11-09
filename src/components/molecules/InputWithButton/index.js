import React from 'react'
import PropTypes from 'prop-types'

import Box from 'components/primitives/box'

import Flex from 'components/atoms/Flex'
import Input from 'components/atoms/Input'
import ButtonBase from 'components/atoms/ButtonBase'

import Grid from 'components/atoms/Grid'

const InputWithButton = props => {
    return (
        <Flex>
            <Input attach="right" />
            <ButtonBase attach="left" as="Button" Label={props.Label} icon={props.icon} ml="-1px" borderRadius={1} />
        </Flex>
    )
}

InputWithButton.PropTypes = {
    label: PropTypes.string,
    icon: PropTypes.node,
}

export default InputWithButton