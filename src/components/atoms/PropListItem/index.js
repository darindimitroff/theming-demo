// WIP

import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Flex from 'components/atoms/Flex'
import Grid from 'components/atoms/Grid'
import Icon from 'components/atoms/Icon'

const PropListItemWrapper = styled(Flex)`
  & > .hoverControls {
    opacity: 0.0001;
  }
  &:hover > .hoverControls {
    opacity: 1;
  }
`

const PropListItem = props => {
  return (
    <PropListItemWrapper
      {...props}
      alignItems="center"
      justifyContent="space-between"
      width={1}
      border={1}
      px={2}
      py={1}
      color="grey150"
      bg="grey600"
      borderColor="grey650"
      position="relative"
      hoverState="lightenHover"
      activeState="darkenActive"
      focusState="focused"
    >
      <Flex className="controls">
        {props.icon ? (
          <Icon mr={props.label ? 2 : 0} glyph={props.icon} size="large" />
        ) : null}
        {props.label}
      </Flex>

      {props.control ? (
        <Grid columns="1fr" className="hoverControls">
          <Icon glyph={props.control} sizePreset="small" color="grey150" />
        </Grid>
      ) : null}
    </PropListItemWrapper>
  )
}

PropListItem.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.node,
  controls: PropTypes.array,
}

export default PropListItem
