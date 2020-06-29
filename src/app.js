import React from 'react';

import './app.scss';

import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form/form.js';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Form />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;