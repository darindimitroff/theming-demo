import React from 'react'
import { ThemeProvider } from 'styled-components'

import theme from '../tokens/themes/theme'
import themeLight from '../tokens/themes/themeLight'

const ThemeWrapper = ({ children }) => (
    <ThemeProvider theme={themeLight}>
        {children}
    </ThemeProvider>
)

export default ThemeWrapper