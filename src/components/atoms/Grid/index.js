import PropTypes from 'prop-types'

import Box from 'components/primitives/Box'

import {style} from 'styled-system'

import styled from 'styled-components'

const gapX = style({
    // React prop name
    prop: 'gapX',
    // The corresponding CSS property (defaults to prop argument)
    cssProperty: 'grid-column-gap',
    // key for theme values
    key: 'space',
    // accessor function for transforming the value
    transformValue: n => n + 'px',
    // add a fallback scale object or array, if theme is not present
    scale: [0, 4, 8, 16, 32]
})

const gapY = style({
    // React prop name
    prop: 'gapY',
    // The corresponding CSS property (defaults to prop argument)
    cssProperty: 'grid-row-gap',
    // key for theme values
    key: 'space',
    // accessor function for transforming the value
    transformValue: n => n + 'px',
    // add a fallback scale object or array, if theme is not present
    scale: [0, 4, 8, 16, 32]
})

const gap = style({
    // React prop name
    prop: 'gap',
    // The corresponding CSS property (defaults to prop argument)
    cssProperty: 'grid-gap',
    // key for theme values
    key: 'space',
    // accessor function for transforming the value
    transformValue: n => n + 'px',
    // add a fallback scale object or array, if theme is not present
    scale: [0, 4, 8, 16, 32]
})

const Grid = styled(Box)`
    display: grid;
    grid-template-columns: ${props => props.columns};
    align-items: ${props => props.align};
    grid-auto-flow: ${props => props.direction};
    ${gapX}
    ${gapY}
    ${gap}
`

Grid.propTypes = {
    columns: PropTypes.string,
    align: PropTypes.string,
    direction: PropTypes.string,
    ...gapX.propTypes,
    ...gapY.propTypes,
    ...gap.propTypes
}

export default Grid