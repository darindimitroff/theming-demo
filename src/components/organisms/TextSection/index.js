import React from 'react'

import Grid from 'components/atoms/Grid'

import Section from 'components/atoms/Section'
import Select from 'components/atoms/Select'
import Input from 'components/atoms/Input'
import ButtonSegment from 'components/atoms/ButtonSegment'
import ButtonGroup from 'components/molecules/ButtonGroup'

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
            <ButtonSegment icon={<IconAlignLeft />} />
            <ButtonSegment icon={<IconAlignCenter />} />
            <ButtonSegment icon={<IconAlignRight />} />
            <ButtonSegment icon={<IconAlignJustify />} />
          </ButtonGroup>
        </LabelWithControl>

        <Grid columns="1fr 1fr" gapX={2}>
          <LabelWithControl label="Transform" layout="reverse-stacked">
            <ButtonGroup>
              <ButtonSegment icon={<IconNone />} />
              <ButtonSegment icon={<IconTransformCapitalize />} />
              <ButtonSegment icon={<IconTransformSentencecase />} />
              <ButtonSegment icon={<IconTransformLowerCase />} />
            </ButtonGroup>
          </LabelWithControl>

          <LabelWithControl label="Decoration" layout="reverse-stacked">
            <ButtonGroup>
              <ButtonSegment icon={<IconNone />} />
              <ButtonSegment icon={<IconDecorationOverline />} />
              <ButtonSegment icon={<IconDecorationUnderline />} />
            </ButtonGroup>
          </LabelWithControl>
        </Grid>

        <Grid columns="1fr 1fr 1fr" gapX={2}>
          <LabelWithControl label="Font Style" layout="reverse-stacked">
            <ButtonGroup>
              <ButtonSegment icon={<IconFontStyleNone />} />
              <ButtonSegment
                icon={<IconFontStyleItalic />}
                tooltip="Does this work?"
              />
            </ButtonGroup>
          </LabelWithControl>

          <LabelWithControl label="Direction" layout="reverse-stacked">
            <ButtonGroup>
              <ButtonSegment icon={<IconDirectionLtr />} />
              <ButtonSegment icon={<IconDirectionRtl />} />
            </ButtonGroup>
          </LabelWithControl>

          <LabelWithControl label="Columns" layout="reverse-stacked">
            <InputWithButton icon={<IconThreeDots />} />
          </LabelWithControl>
        </Grid>
      </Grid>
    </Section>
  )
}

export default TextSection
