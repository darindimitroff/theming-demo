import React, { Component } from 'react';

import { ThemeProvider } from 'styled-components'

import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

import Theme from './components/tokens/themes/theme'
import ThemeLight from './components/tokens/themes/themeLight'

import Screen from 'components/organisms/Screen'
import Sidebar from 'components/organisms/Sidebar'
import Grid from 'react-css-grid'

import Box from './components/primitives/box'

import Input from './components/atoms/Input'
import Button from './components/atoms/Button'
import ButtonGroup from './components/atoms/ButtonGroup'
import ButtonSegment from './components/atoms/ButtonSegment'
import Select from './components/atoms/Select'

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
  }
  body {
    font-family: Inter UI!important;
    font-size: 11px;
  }
  Input {
    min-width: 0;
    margin: 0;
  }
  Button {
    margin: 0;
    position: relative;
  }
  /* other styles */
`

class App extends Component {
  state = {
    theme: Theme
  }
  swapTheme = () => {
    { this.state.theme === Theme ? this.setState({ theme: ThemeLight }) : this.setState({ theme: Theme }) }
  }
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <ThemeProvider theme={this.state.theme}>
          <Screen>
            <Sidebar>
              <TextSection />
              <FakeSection swapTheme={this.swapTheme} />
            </Sidebar>
          </Screen>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

export default App;
