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
      count:0,
      headers:{},
      results:[]
    };
  }

  handelForm = (count,headers,results)=>{
    // let headers={"content-type":"application-json"};
    this.setState({count,headers,results});
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Form handler={this.handelForm}/>
        <Results count={this.state.count} headers={this.state.headers} results={this.state.results} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;