import React from 'react'
import styled from 'styled-components'

const Sidebar = styled.div`
    padding: 16px;
    min-width: 240px;
    background-color: ${props => props.theme.colors.grey25};
    height: 100vh;
    position: fixed;
    overflow-y: scroll;
`


export default Sidebar