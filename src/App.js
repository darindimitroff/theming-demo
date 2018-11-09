import React, { Component } from 'react';

import { ThemeProvider } from 'styled-components'

import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

import Theme from './components/tokens/themes/theme'
import ThemeLight from './components/tokens/themes/themeLight'

import Screen from 'components/organisms/screen'
import Sidebar from 'components/organisms/sidebar'
import Grid from 'react-css-grid'

import Box from './components/primitives/box'

import Input from './components/atoms/input'
import Button from './components/atoms/button'
import ButtonGroup from './components/atoms/buttonGroup'
import ButtonSegment from './components/atoms/buttonSegment'
import Select from './components/atoms/select'

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
  input {
    min-width: 0;
    margin: 0;
  }
  button {
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
