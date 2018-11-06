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

import LabelWithControl from './components/molecules/LabelWithControl'

import { ReactComponent as SettingsIcon } from 'assets/settings-medium.svg'

const GlobalStyle = createGlobalStyle`
  ${reset}
  @import url('https://rsms.me/inter/inter-ui.css');
  html {
    box-sizing: border-box;
  }
  * {
    box-sizing: inherit;
    line-height: 1.5;
    font-family: inherit;
    transform: translateZ(0);
  }
  body {
    font-family: Inter UI!important;
    font-size: 11px;
    color: #D9D9D9;
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

              <Button mb={2}>Button text</Button>

              <Input mb={2} value="Value" />

              <Button mb={2} width={1}>Full-width button</Button>

              <Input mb={2} unit="px" value="Value" />

              <Button width={1} mb={2} icon={<SettingsIcon width="16px" height="16px" />}>Open settings</Button>

              <ButtonGroup mb={2}>
                <ButtonSegment>Text</ButtonSegment>
                <ButtonSegment>Text</ButtonSegment>
                <ButtonSegment>Text</ButtonSegment>
                <ButtonSegment>Text</ButtonSegment>
                <ButtonSegment>Text</ButtonSegment>
              </ButtonGroup>

              <Select mb={2} current="Select this thing" icon={<SettingsIcon width="16px" height="16px" />} />

              <LabelWithControl label="Label" layout="inline">
                <Input unit="px" />
              </LabelWithControl>

            </Sidebar>
          </Screen>
        </ThemeWrapper>
      </React.Fragment>
    );
  }
}

export default App;
