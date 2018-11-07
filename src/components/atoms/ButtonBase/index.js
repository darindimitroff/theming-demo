import React from 'react'

import Flex from 'components/atoms/flex'
import Icon from 'components/atoms/icon'

const ButtonBase = props => {
    return (
        <Flex {...props} alignItems="center" border={1} px={2} py={1} color="grey150" bg="grey400" borderColor="grey550" position="relative" hoverState="lighten" activeState="darken" focusState='focused'>
            <Flex>
                {
                    props.icon ?
                        <Icon mr={2} glyph={props.icon} />
                        : null
                }
                {props.label}
            </Flex>
            {
                props.secondaryIcon ?
                    <Icon width="12px" height="12px" glyph={props.secondaryIcon} />
                    : null
            }
        </Flex>
    )
}

export default ButtonBase