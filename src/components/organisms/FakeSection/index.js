import React from 'react'
import styled from 'styled-components'

import Grid from 'components/atoms/Grid'

import Section from 'components/atoms/section'
import Select from 'components/atoms/select'
import Input from 'components/atoms/input'
import ButtonSegment from 'components/atoms/buttonSegment'
import ButtonGroup from 'components/atoms/buttonGroup'

import LabelWithControl from 'components/molecules/LabelWithControl'
import InputWithButton from 'components/molecules/InputWithButton'

const TextSection = props => {
    return (
        <Section label="Fake Section">
            I am a fake section
        </Section>
    )
}

export default TextSection