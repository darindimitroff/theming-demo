import React from 'react'

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