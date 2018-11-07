import React from 'react'

import Box from 'components/primitives/box'

import Flex from 'components/atoms/flex'
import Label from 'components/atoms/label'
import Icon from 'components/atoms/icon'

import Grid from 'components/atoms/Grid'

const LabelWithControl = props => {
    switch (props.layout) {
        case 'stacked':
            return (
                <Grid rows="auto auto" gapY={1}>
                    <Label>{props.label}</Label>
                    <Flex>{props.children}</Flex>
                </Grid>)
        case 'inline':
            return (
                <Grid columns="48px 1fr" align="center" gapX={2}>
                    <Label>{props.label}</Label>
                    {props.children}
                </Grid>)
        case 'reverse-stacked':
            return (
                <Grid rows="auto auto" gapY={1}>
                    {props.children}
                    <Label size="small" textAlign="center">{props.label}</Label>
                </Grid>)
        default:
            return (
                <Grid columns="48px 1fr" align="center" gapX={2}>
                    <Label>{props.label}</Label>
                    {props.children}
                </Grid>)
    }
}

export default LabelWithControl