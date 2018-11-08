import React, { Component } from 'react';

import ThemeWrapper from './components/utility/ThemeWrapper'

import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

import Screen from './components/organisms/screen'
import Sidebar from './components/organisms/sidebar'
import Grid from 'react-css-grid'

import Box from './components/primitives/box'

import Input from './components/atoms/input'
import Button from './components/atoms/button'
import ButtonGroup from './components/atoms/buttonGroup'
import ButtonSegment from './components/atoms/buttonSegment'
import Select from './components/atoms/select'

import TextSection from './components/organisms/TextSection'
import FakeSection from './components/organisms/FakeSection'

import LabelWithControl from './components/molecules/LabelWithControl'

import { ReactComponent as SettingsIcon } from 'assets/settings-medium.svg'

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
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <ThemeWrapper>
          <Screen>
            <Sidebar>

              <TextSection />
              <FakeSection />

            </Sidebar>
          </Screen>
        </ThemeWrapper>
      </React.Fragment>
    );
  }
}

export default App;
