// WIP

import React from 'react'
import styled from 'styled-components'
import { themeGet } from 'styled-system'
import PropTypes from 'prop-types'

import Flex from 'components/atoms/Flex'

const PropListWrapper = styled(Flex)`
  flex-direction: column;
  overflow: hidden;
  *:not(:first-child) {
    margin-top: -1px;
  }
  &:first-child {
    border-top-left-radius: ${themeGet('radii[1]', '2px')};
    border-top-right-radius: ${themeGet('radii[1]', '2px')};
  }
  &:last-child {
    border-bottom-left-radius: ${themeGet('radii[1]', '2px')};
    border-bottom-right-radius: ${themeGet('radii[1]', '2px')};
  }
`

const PropList = props => {
  return <PropListWrapper as="ul">{props.children}</PropListWrapper>
}

PropList.PropTypes = {
  label: PropTypes.string,
  icon: PropTypes.node,
  controls: PropTypes.array,
}

export default PropList
