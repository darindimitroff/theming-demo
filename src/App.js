import React, { Component } from 'react'

import { ThemeProvider } from 'styled-components'

import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

import { themeGet } from 'styled-system'

import Theme from './components/tokens/themes/theme'
import ThemeLight from './components/tokens/themes/themeLight'

import Screen from 'components/organisms/Screen'
import Sidebar from 'components/organisms/Sidebar'

import TextSection from './components/organisms/TextSection'
import FakeSection from './components/organisms/FakeSection'

// Reset
const GlobalStyle = createGlobalStyle`
  ${reset}
  @import url('https://rsms.me/inter/inter-ui.css');
  html {
    box-sizing: border-box;
  }
  * {
    box-sizing: inherit;
    font-family: inherit;
    transform: translateZ(0);
    line-height: inherit;
  }
  body {
    font-family: ${themeGet('fonts.inter', 'Inter UI')}!important;
    font-size: ${themeGet('fontSizes[2]', '11px')};
    line-height: ${themeGet('lineHeights[2]', '16px')};
    color: ${themeGet('colors.grey150', '#D9D9D9')};
  }
  input {
    min-width: 0;
    margin: 0;
  }
  button {
    margin: 0;
    position: relative;
  }
  svg {
    width: 100%;
  }
`

class App extends Component {
  state = {
    theme: Theme,
  }
  swapTheme = () => {
    this.state.theme === Theme
      ? this.setState({ theme: ThemeLight })
      : this.setState({ theme: Theme })
  }
  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <React.Fragment>
          <GlobalStyle />
          <Screen>
            <Sidebar>
              <TextSection />
              <FakeSection swapTheme={this.swapTheme} />
            </Sidebar>
          </Screen>
        </React.Fragment>
      </ThemeProvider>
    )
  }
}

export default App
