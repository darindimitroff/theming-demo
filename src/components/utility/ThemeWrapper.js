import React from 'react'
import { ThemeProvider } from 'styled-components'

import Theme from 'components/tokens/themes/Theme'

const ThemeWrapper = ({ props, children }) => (
    <ThemeProvider theme={Theme}>
        {children}
    </ThemeProvider>
)

export default ThemeWrapper