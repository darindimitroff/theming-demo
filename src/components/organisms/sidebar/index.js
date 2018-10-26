import React from 'react'
import styled from 'styled-components'

const Sidebar = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: minmax(min-content, max-content);
    align-items: start;
    padding: 16px;
    grid-gap: 16px;
    width: 240px;
    background-color: ${props => props.theme.colors.grey25};
    height: 100vh;
    position: fixed;
    overflow-y: scroll;
`


export default Sidebar