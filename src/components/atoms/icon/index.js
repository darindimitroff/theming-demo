import React from 'react'
import PropTypes from 'prop-types'

import Flex from 'components/atoms/Flex'

const Icon = props => {
    return (
        <Flex {...props} as="i" alignItems="center" justifyContent="center" width={props.width} height={props.height} size={{
            'small': '12px',
            'large': '16px',
            default: '12px'
        }[props.size]}>
            {props.glyph}
        </Flex>
    )
}

Icon.propTypes = {
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    size: PropTypes.oneOf([PropTypes.number, PropTypes.string, 'small', 'large']),
}

Icon.defaultProps = {
    width: "16px",
    height: "16px",
}

export default Icon