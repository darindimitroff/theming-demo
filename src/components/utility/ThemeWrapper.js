import React from 'react'
import { ThemeProvider } from 'styled-components'

import theme from '../tokens/themes/theme'

const ThemeWrapper = ({ children }) => (
    <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
)

export default ThemeWrapper