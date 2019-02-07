import React, { Component, Fragment } from 'react';
import { Header, Footer, Container } from './components';
import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <Fragment>
        {/* <Header /> */}
          <Container>
            <Routes />
          </Container>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
