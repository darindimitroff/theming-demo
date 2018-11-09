import React from 'react'
import styled from 'styled-components'

import Grid from 'components/atoms/Grid'

import Section from 'components/atoms/section'
import Button from 'components/atoms/button'

const FakeSection = props => {
    return (
        <Section label="Fake Section">
            <Button width={1} onClick={props.swapTheme}>Swap themes</Button>
        </Section>
    )
}

export default FakeSection