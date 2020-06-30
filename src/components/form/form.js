import React from 'react';
import ReactView from 'react-json-view';

import './form.scss';

class Form extends React.Component {
  constructor(props){
    super(props);
    this.state={
      url:'',
      method:''
    }
  }

handleSubmit = async e =>{
  e.preventDefault(); 

  if ( this.state.url && this.state.method ) {
    let data = await (await fetch(this.state.url)).json;
    let count = data.count;
    let headers = { 'Content-Type': 'application/json' }
    let results = data.results;
    console.log('data',data)

    this.props.handler(count,headers,results);
}    else {
  alert('missing information');
}
}

handleChangeURL = e => {
  const url = e.target.value;
  this.setState({url});
};

handleChangeMethod = e => {
  const method = e.target.id;
  this.setState({ method });
};

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label >
            <span>URL: </span>
            <input name='url' type='text' onChange={this.handleChangeURL} />
            <button type="submit">GO!</button>
          </label>
          <label className="methods">
            <span className={this.state.method === 'get' ? 'active' : ''} id="get" onClick={this.handleChangeMethod}>GET</span>
            <span className={this.state.method  === 'post' ? 'active' : ''} id="post" onClick={this.handleChangeMethod}>POST</span>
            <span className={this.state.method  === 'put' ? 'active' : ''} id="put" onClick={this.handleChangeMethod}>PUT</span>
            <span className={this.state.method  === 'delete' ? 'active' : ''} id="delete" onClick={this.handleChangeMethod}>DELETE</span>
          </label>
        </form>
      </>
    );
  }
}

export default Form;