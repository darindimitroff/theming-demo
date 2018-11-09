import React from 'react'

import Flex from 'components/atoms/flex'
import Icon from 'components/atoms/icon'

const ButtonBase = props => {
    return (
        <Flex {...props} alignItems="center" border={1} py={1} color="grey150" bg="grey400" position="relative" hoverState="lighten" activeState="darken" focusState='focused' borderColor={props.attach ? 'grey650' : 'grey550'} style={{
            'left': { 'borderTopLeftRadius': 0, 'borderBottomLeftRadius': 0, },
            'right': { 'borderTopRightRadius': 0, 'borderBottomRightRadius': 0, },
            default: null
        }[props.attach]}>
            <Flex>
                {
                    props.icon ?
                        <Icon mr={props.label ? 2 : 0} glyph={props.icon} size="large" />
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