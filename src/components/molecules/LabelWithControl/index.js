import React from 'react'
import PropTypes from 'prop-types'

import Flex from 'components/atoms/Flex'
import Label from 'components/atoms/Label'

import Grid from 'components/atoms/Grid'

const LabelWithControl = props => {
    switch (props.layout) {
        case 'stacked':
            return (
                <Grid rows="auto auto" gapY={1}>
                    <Label>{props.Label}</Label>
                    <Flex>{props.children}</Flex>
                </Grid>
            )
        case 'inline':
            return (
                <Grid columns="48px 1fr" align="center" gapX={2}>
                    <Label>{props.Label}</Label>
                    {props.children}
                </Grid>
            )
        case 'reverse-stacked':
            return (
                <Grid rows="auto auto" gapY={1}>
                    {props.children}
                    <Label size="small" textAlign="center">{props.Label}</Label>
                </Grid>
            )
        default:
            return (
                <Grid columns="48px 1fr" align="center" gapX={2}>
                    <Label>{props.Label}</Label>
                    {props.children}
                </Grid>
            )
    }
}
 
LabelWithControl.PropTypes = {
    label: PropTypes.string,
    layout: PropTypes.oneOf(['stacked',
        'inline',
        'reverse-stacked'])
}

export default LabelWithControl