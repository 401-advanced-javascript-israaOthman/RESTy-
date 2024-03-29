import React from 'react';
import ReactView from 'react-json-view';
import { If, Then, Else } from '../if/if'
import './form.scss';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      method: '',
      request: {},
      body: {}
    }
  }


  handleSubmit = async e => {
    e.preventDefault();
    this.props.toggleLoading();//true
    let url = this.state.url;
    let method = this.state.method;
    let body = this.state.body;

    if (url) {
      switch (method) {
        case 'get':
          try {
            let raw = await fetch(url);
            let data = await raw.json();


            let head;
            raw.headers.forEach(value => {
              head = { 'Content-Type': value }
            })
            let results = {
              Headers: head,
              Response: data
            }
            this.props.handler(results);
            this.props.toggleLoading();//false
            this.props.setHistory(method,url,body);
          } catch (e) {
            console.log(e);
          }
          break;
        case 'post':
        case 'put':
          if (body) {
            fetch(url, {
              method: `${method}`,
              mode: 'cors',
              headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
              },
              body: body
            })
              .then(data => data.json()).then(results => {
               this.props.handler(results);
            this.props.toggleLoading();//false
            this.props.setHistory(method,url,body);

              })
          } else {
            alert('please Enter the body');
          }
          break;
        case 'delete':
          fetch(url, {
            method: `${method}`,
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            },
          })
            .then(() => {
              this.props.handler({results:'Deleted ....'});
            this.props.toggleLoading();//false
            this.props.setHistory(method,url,body);

            })
      }

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

  handleBody = e => {
    const body = e.target.value;
    this.setState({ body });
  }

  

  render() {
    return(
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
            <label> Body :
            <textarea className="body" onChange={this.handleBody} > </textarea></label>
          </form>
        </>
    );
  }
}

export default Form;