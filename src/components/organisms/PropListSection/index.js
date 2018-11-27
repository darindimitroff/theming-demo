// WIP

import React from 'react'

import Section from 'components/atoms/Section'
import Button from 'components/atoms/Button'
import PropListItem from 'components/atoms/PropListItem'

import PropList from 'components/molecules/PropList'

import { ReactComponent as IconThreeDots } from 'assets/threeDots.svg'

const PropListSection = props => {
  return (
    <Section label="PropList Demo">
      <PropList icon="icon" isReordarable control={<IconThreeDots />}>
        <PropListItem label="Label" control={<IconThreeDots />} />
        <PropListItem label="Label" control={<IconThreeDots />} />
        <PropListItem label="Label" control={<IconThreeDots />} />
        <PropListItem label="Label" control={<IconThreeDots />} />
        <PropListItem label="Label" control={<IconThreeDots />} />
        <PropListItem label="Label" control={<IconThreeDots />} />
      </PropList>
    </Section>
  )
}

export default PropListSection
