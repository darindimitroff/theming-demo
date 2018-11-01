import React from 'react'
import PropTypes from 'prop-types'

import Text from 'components/primitives/text'

const Label = props => {
    return (
        <Text {...props}
            fontSize={(() => {
                switch (props.size) {
                    case 'small':
                        return 1
                    case 'medium':
                        return 2
                    case 'large':
                        return 3
                    default:
                        return 2
                }
            })()}>{props.children}</Text>
    )
}

Label.propTypes = {
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
}

Label.defaultProps = {
    size: 'medium',
}

export default Label