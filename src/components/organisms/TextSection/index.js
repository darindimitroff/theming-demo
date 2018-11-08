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
        <Section label="Text">
            <Grid gapY={2} direction="row">

                <LabelWithControl label="Font">
                    <Select current="Arial" />
                </LabelWithControl>

                <LabelWithControl label="Weight">
                    <Select current="400 - Normal" />
                </LabelWithControl>

                <Grid columns="1fr 1fr" gapX={2}>
                    <LabelWithControl label="Size">
                        <Input unit="px" />
                    </LabelWithControl>

                    <LabelWithControl label="Height">
                        <Input unit="px" />
                    </LabelWithControl>
                </Grid>

                <Grid columns="1fr 1fr" gapX={2}>
                    <LabelWithControl label="Letter">
                        <Input unit="px" />
                    </LabelWithControl>

                    <LabelWithControl label="Indent">
                        <Input unit="px" />
                    </LabelWithControl>
                </Grid>

                <LabelWithControl label="Color">
                    <Input />
                </LabelWithControl>

                <LabelWithControl label="Align">
                    <ButtonGroup>
                        <ButtonSegment>1</ButtonSegment>
                        <ButtonSegment>2</ButtonSegment>
                        <ButtonSegment>3</ButtonSegment>
                        <ButtonSegment>4</ButtonSegment>
                    </ButtonGroup>
                </LabelWithControl>

                <Grid columns="1fr 1fr" gapX={2}>

                    <LabelWithControl label="Transform" layout="reverse-stacked">
                        <ButtonGroup>
                            <ButtonSegment>1</ButtonSegment>
                            <ButtonSegment>2</ButtonSegment>
                            <ButtonSegment>3</ButtonSegment>
                            <ButtonSegment>4</ButtonSegment>
                        </ButtonGroup>
                    </LabelWithControl>

                    <LabelWithControl label="Decoration" layout="reverse-stacked">
                        <ButtonGroup>
                            <ButtonSegment>1</ButtonSegment>
                            <ButtonSegment>2</ButtonSegment>
                        </ButtonGroup>
                    </LabelWithControl>
                </Grid>

                <Grid columns="1fr 1fr 1fr" gapX={2}>

                    <LabelWithControl label="Font Style" layout="reverse-stacked">
                        <ButtonGroup>
                            <ButtonSegment>1</ButtonSegment>
                            <ButtonSegment>2</ButtonSegment>
                        </ButtonGroup>
                    </LabelWithControl>

                    <LabelWithControl label="Direction" layout="reverse-stacked">
                        <ButtonGroup>
                            <ButtonSegment>1</ButtonSegment>
                            <ButtonSegment>2</ButtonSegment>
                            <ButtonSegment>3</ButtonSegment>
                        </ButtonGroup>
                    </LabelWithControl>

                    <LabelWithControl label="Columns" layout="reverse-stacked">
                        <InputWithButton />
                    </LabelWithControl>

                </Grid>
            </Grid>
        </Section>
    )
}

export default TextSection