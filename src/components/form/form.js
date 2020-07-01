import React from 'react';
import ReactView from 'react-json-view';

import './form.scss';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      method: '',
      request: {}
    }
  }

  handleSubmit = async e => {
    e.preventDefault();

    if (this.state.url && this.state.method) {
      try {
        let raw = await fetch(this.state.url);
        let data = await raw.json();
        // console.log('data',data);
        // let count = data.count || 0; //count the result
        
        let head ;
        raw.headers.forEach(value =>{
          head = { 'Content-Type': value }
        })
        let results = {
          Headers: head,
          Response: data
        }
        this.props.handler(results);
      } catch (e) {
        console.log(e);
      }
    } else {
      alert('missing information');
    }
  }

  handleChangeURL = e => {
    const url = e.target.value;
    this.setState({ url });
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
            <span className={this.state.method === 'post' ? 'active' : ''} id="post" onClick={this.handleChangeMethod}>POST</span>
            <span className={this.state.method === 'put' ? 'active' : ''} id="put" onClick={this.handleChangeMethod}>PUT</span>
            <span className={this.state.method === 'delete' ? 'active' : ''} id="delete" onClick={this.handleChangeMethod}>DELETE</span>
          </label>
        </form>
      </>
    );
  }
}

export default Form;