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
      history:[]
    };
  }

  toggleLoading = () => {
    // console.log("this.state.loading: ",this.state.loading)
    this.setState({ loading: !this.state.loading })
  }

  handelForm = (results)=>{
    this.setState({results});
  }

  setHistory =(method,url,body)=>{

    let obj = {method,url,body};
    let history = [...this.state.history,obj];
    this.setState({
      history:history
    })
    let hisArray = JSON.stringify(this.state.history);
    localStorage.setItem('history' , hisArray );
  }

  render() {
    return (
     <BrowserRouter>
        <Header />
        <Route exact path='/'>
          <Form toggleLoading={this.toggleLoading} handler={this.handelForm} setHistory={this.setHistory}/>
          {/* <IfRenderer condition={comming from his} > */}
          {/* <Then> */}
          <Results results={this.state.results} loading={this.state.loading} />
          {/* </Then> */}
        </Route>
        <Route exact path='/history' component={History}>
          {/* <History /> */}
        </Route>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;