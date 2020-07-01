import React from 'react';

import './app.scss';

import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form/form.js';
import Results from './components/results/results';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      results:{}
    };
  }

  handelForm = (results)=>{
    this.setState({results});
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Form handler={this.handelForm}/>
        <Results results={this.state.results} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;