import React from 'react'
import Box from 'components/primitives/box'
import Text from 'components/primitives/text'

import Icon from 'components/atoms/icon'

const Label = props => {
    return (
        <Text>{props.children}</Text>
    )
}

export default Label