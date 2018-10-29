import React, { Component } from 'react';

import ThemeWrapper from './components/utility/ThemeWrapper'

import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

import Screen from './components/organisms/screen'
import Sidebar from './components/organisms/sidebar'
import Grid from 'react-css-grid'

import Input from './components/atoms/input'
import Button from './components/atoms/button'

const GlobalStyle = createGlobalStyle`
  ${reset}
  html {
    box-sizing: border-box;
  }
  * {
    box-sizing: inherit;
    line-height: 1.45
  }
  body {
    font-size: 11px;
  }
  input {
    min-width: 0;
    margin: 0;
  }
  button {
    margin: 0;
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
              <Grid gap={8} width={1}>
                <Button mb={2}>Button text</Button>
                <Input mb={2} value="Value" />
              </Grid>
              <Grid width={1}>
                <Button mb={2}>Full-width button</Button>
              </Grid>
              <Grid width={1}>
                <Input mb={2} unit="px" value="Value" />
              </Grid>
            </Sidebar>
          </Screen>
        </ThemeWrapper>
      </React.Fragment>
    );
  }
}

export default App;
