import React from 'react'
import styled from 'styled-components'

import Grid from 'components/atoms/Grid'

import Section from 'components/atoms/Section'
import Select from 'components/atoms/Select'
import Input from 'components/atoms/Input'
import ButtonSegment from 'components/atoms/ButtonSegment'
import ButtonGroup from 'components/atoms/ButtonGroup'

import LabelWithControl from 'components/molecules/LabelWithControl'
import InputWithButton from 'components/molecules/InputWithButton'

// Icons
import { ReactComponent as IconNone } from 'assets/borderStyleNone.svg'

import { ReactComponent as IconTransformCapitalize } from 'assets/transformCapitalize.svg'
import { ReactComponent as IconTransformSentencecase } from 'assets/transformSentencecase.svg'
import { ReactComponent as IconTransformLowerCase } from 'assets/transformLowercase.svg'

import { ReactComponent as IconAlignLeft } from 'assets/alignLeft.svg'
import { ReactComponent as IconAlignRight } from 'assets/alignRight.svg'
import { ReactComponent as IconAlignCenter } from 'assets/alignCenter.svg'
import { ReactComponent as IconAlignJustify } from 'assets/alignJustify.svg'

import { ReactComponent as IconFontStyleNone } from 'assets/fontStyleNone.svg'
import { ReactComponent as IconFontStyleItalic } from 'assets/fontStyleItalic.svg'

import { ReactComponent as IconDecorationOverline } from 'assets/decorationOverline.svg'
import { ReactComponent as IconDecorationUnderline } from 'assets/decorationUnderline.svg'

import { ReactComponent as IconThreeDots } from 'assets/threeDots.svg'

import { ReactComponent as IconDirectionLtr } from 'assets/directionLtr.svg'
import { ReactComponent as IconDirectionRtl } from 'assets/directionRtl.svg'

const TextSection = props => {
    return (
        <Section Label="Text">
            <Grid gapY={2} direction="row">

                <LabelWithControl Label="Font">
                    <Select current="Arial" />
                </LabelWithControl>

                <LabelWithControl Label="Weight">
                    <Select current="400 - Normal" />
                </LabelWithControl>

                <Grid columns="1fr 1fr" gapX={2}>
                    <LabelWithControl Label="Size">
                        <Input unit="px" />
                    </LabelWithControl>

                    <LabelWithControl Label="Height">
                        <Input unit="px" />
                    </LabelWithControl>
                </Grid>

                <Grid columns="1fr 1fr" gapX={2}>
                    <LabelWithControl Label="Letter">
                        <Input unit="px" />
                    </LabelWithControl>

                    <LabelWithControl Label="Indent">
                        <Input unit="px" />
                    </LabelWithControl>
                </Grid>

                <LabelWithControl Label="Color">
                    <Input />
                </LabelWithControl>

                <LabelWithControl Label="Align">
                    <ButtonGroup>
                        <ButtonSegment icon={<IconAlignLeft />}></ButtonSegment>
                        <ButtonSegment icon={<IconAlignCenter />}></ButtonSegment>
                        <ButtonSegment icon={<IconAlignRight />}></ButtonSegment>
                        <ButtonSegment icon={<IconAlignJustify />}></ButtonSegment>
                    </ButtonGroup>
                </LabelWithControl>

                <Grid columns="1fr 1fr" gapX={2}>

                    <LabelWithControl Label="Transform" layout="reverse-stacked">
                        <ButtonGroup>
                            <ButtonSegment icon={<IconNone />}></ButtonSegment>
                            <ButtonSegment icon={<IconTransformCapitalize />}></ButtonSegment>
                            <ButtonSegment icon={<IconTransformSentencecase />}></ButtonSegment>
                            <ButtonSegment icon={<IconTransformLowerCase />}></ButtonSegment>
                        </ButtonGroup>
                    </LabelWithControl>

                    <LabelWithControl Label="Decoration" layout="reverse-stacked">
                        <ButtonGroup>
                            <ButtonSegment icon={<IconNone />} />
                            <ButtonSegment icon={<IconDecorationOverline />} />
                            <ButtonSegment icon={<IconDecorationUnderline />} />
                        </ButtonGroup>
                    </LabelWithControl>
                </Grid>

                <Grid columns="1fr 1fr 1fr" gapX={2}>

                    <LabelWithControl Label="Font Style" layout="reverse-stacked">
                        <ButtonGroup>
                            <ButtonSegment icon={<IconFontStyleNone />} />
                            <ButtonSegment icon={<IconFontStyleItalic />} tooltip="Does this work?" />
                        </ButtonGroup>
                    </LabelWithControl>

                    <LabelWithControl Label="Direction" layout="reverse-stacked">
                        <ButtonGroup>
                            <ButtonSegment icon={<IconDirectionLtr />} />
                            <ButtonSegment icon={<IconDirectionRtl />} />
                        </ButtonGroup>
                    </LabelWithControl>

                    <LabelWithControl Label="Columns" layout="reverse-stacked">
                        <InputWithButton icon={<IconThreeDots />} />
                    </LabelWithControl>

                </Grid>

            </Grid>
        </Section>
    )
}

export default TextSection