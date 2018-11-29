import React from 'react'
import PropTypes from 'prop-types'

import Flex from 'components/atoms/Flex'
import Input from 'components/atoms/Input'
import Button from 'components/atoms/Button'

const InputWithButton = props => {
  return (
    <Flex>
      <Input attach="right" />
      <Button attach="left" as="button" label={props.label} icon={props.icon} />
    </Flex>
  )
}

InputWithButton.PropTypes = {
  label: PropTypes.string,
  icon: PropTypes.node,
}

export default InputWithButton
