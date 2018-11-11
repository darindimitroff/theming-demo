import React from 'react'
import PropTypes from 'prop-types'

import Box from 'components/primitives/Box'
import Text from 'components/primitives/Text'

import Flex from 'components/atoms/Flex'

const Section = props => {
    return (
        <Box>
            <Flex
                bg="grey600"
                color="grey150"
                p={2}
                borderBottom={1}
                borderTop={1}
                borderColor="grey650">
                <Text textStyle="t3">{props.Label}</Text>
            </Flex>
            <Box p={2}>{props.children}</Box>
        </Box>
    )
}

Section.propTypes = {
    label: PropTypes.string
}

export default Section
