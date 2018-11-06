import React from 'react'

import Flex from 'components/atoms/flex'
import Icon from 'components/atoms/icon'

const Button = props => {
    return (
        <Flex {...props} as="button" justifyContent="center" alignItems="center" border={1} px={2} py={1} color="grey85" bg="grey37" borderColor="grey21" borderRadius={1} hoverState="lighten" activeState="darken" focusState='focused'>
            {
                props.icon ?
                    <Icon mr={2} glyph={props.icon} />
                    : null
            }
            {props.children}
        </Flex>
    )
}

export default Button