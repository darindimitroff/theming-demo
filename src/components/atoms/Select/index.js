import React from 'react'
import PropTypes from 'prop-types'

import ButtonBase from 'components/atoms/ButtonBase'

import {ReactComponent as Careticon} from 'assets/caret-down-medium.svg'

const Select = props => {
    return (
        <ButtonBase
            {...props}
            as="Button"
            width={1}
            justifyContent="space-between"
            borderRadius={1}
            Label={props.current}
            secondaryicon={< Careticon width = "9px" height = "6px" />}/>
    )
}

Select.propTypes = {
    current: PropTypes.string
}

export default Select
