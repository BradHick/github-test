import React, { Component, Fragment } from 'react';
import { Footer, Container } from './components';
import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <Fragment>
          <Container>
            <Routes />
          </Container>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
