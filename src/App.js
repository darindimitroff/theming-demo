import React, { Component } from 'react';

import ThemeWrapper from './components/utility/ThemeWrapper'

import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

import Screen from './components/organisms/screen'
import Sidebar from './components/organisms/sidebar'

import Input from './components/atoms/input'
import Button from './components/atoms/button'

const GlobalStyle = createGlobalStyle`
  ${reset}
  input {
    min-width: 0;
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
              <Input />
              <Button>Hello world</Button>
              <Button>Hello world</Button>
              <Button>Hello world</Button>
              <Button>Hello world</Button>
              <Button>Hello world</Button>
            </Sidebar>
          </Screen>
        </ThemeWrapper>
      </React.Fragment>
    );
  }
}

export default App;
