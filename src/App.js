import React, { Component, Fragment } from 'react';
import { Header, Footer } from './components';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
          Content
        <Footer />
      </Fragment>
    );
  }
}

export default App;
