import React from 'react'
import styled from 'styled-components'

import Box from 'components/primitives/box'

import LabelWithControl from 'components/molecules/LabelWithControl'
import Select from 'components/atoms/select'

const TextSection = props => {
    return (
        <Box py={2}>
            <LabelWithControl label="Font">
                <Select current="Arial" />
            </LabelWithControl>
        </Box>
    )
}

export default TextSection