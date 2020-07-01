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
      loading:false,
      results:{}
    };
  }

  toggleLoading = () => {
    console.log("this.state.loading: ",this.state.loading)
    this.setState({ loading: !this.state.loading })
  }

  handelForm = (results)=>{
    this.setState({results});
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Form toggleLoading={this.toggleLoading} handler={this.handelForm}/>
        <Results results={this.state.results} loading={this.state.loading} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;