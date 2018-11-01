import React from 'react'
import styled from 'styled-components'

import Box from 'components/primitives/box'
import ButtonSegment from 'components/atoms/buttonSegment'

const ButtonGroupWrapper = styled(Box)`
    width: 100%;
    display: flex;
    padding-left: ${props => props.theme.borders[1]}px;
    padding-right: ${props => props.theme.borders[1]}px;
    *:first-child {
        border-top-left-radius: ${props => props.theme.radii[1]}px;
        border-bottom-left-radius: ${props => props.theme.radii[1]}px;
    }
    *:last-child {
        border-top-right-radius: ${props => props.theme.radii[1]}px;
        border-bottom-right-radius: ${props => props.theme.radii[1]}px;
    }
`

const ButtonGroup = props => {
    return (
        <ButtonGroupWrapper mb={2}>
            {props.children}
        </ButtonGroupWrapper>
    )
}

export default ButtonGroup