import React from 'react'
import styled from 'styled-components'

import Grid from 'components/atoms/Grid'

import Section from 'components/atoms/Section'
import Button from 'components/atoms/Button'

const FakeSection = props => {
    return (
        <Section Label="Fake Section">
            <Button width={1} onClick={props.swapTheme} tooltip="This changes the theme">Swap themes</Button>
        </Section>
    )
}

export default FakeSection