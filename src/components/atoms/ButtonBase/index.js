import React from 'react'
import PropTypes from 'prop-types'

import Flex from 'components/atoms/Flex'
import Icon from 'components/atoms/Icon'

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
                        <Icon mr={props.Label ? 2 : 0} glyph={props.icon} size="large" />
                        : null
                }
                {props.Label}
            </Flex>
            {
                props.secondaryicon ?
                    <Icon width="12px" height="12px" glyph={props.secondaryicon} />
                    : null
            }
        </Flex>
    )
}

ButtonBase.propTypes = {
    label: PropTypes.string,
    icon: PropTypes.node,
    secondaryIcon: PropTypes.node,
    tooltip: PropTypes.string,
    attach: PropTypes.oneOf('left', 'right'),
}

export default ButtonBase