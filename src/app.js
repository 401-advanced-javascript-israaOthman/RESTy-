import React from 'react';
import {BrowserRouter,Route, NavLink, Router} from 'react-router-dom';
import './app.scss';

import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form/form.js';
import Results from './components/results/results';
import History from './components/history/history';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      loading:false,
      results:{},
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
     <BrowserRouter>
        <Header />
        <Route exact path='/' component={Results}>
          <Form toggleLoading={this.toggleLoading} handler={this.handelForm} />
          <Results results={this.state.results} loading={this.state.loading} />
        </Route>
        <Route exact path='/history' component={History}>
          <History history={this.state.history} />
        </Route>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;