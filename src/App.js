import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';


//TODO : switch over to making calls to od-api and/or get CORS working

class App extends Component {
  constructor() {
  super();
    this.state = {
      searchTerm: 'filler text',
      def: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  
  handleChange(event) {
    this.setState({searchTerm: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.searchTerm);
    event.preventDefault();
    let def = httpGet("https://owlbot.info/api/v1/dictionary/" + this.state.searchTerm + "?format=json");
    this.setState({def: def});
  }

  render() {
  return(
    <div>
    <SearchForm handleChangeFn={this.handleChange} handleSubmitFn={this.handleSubmit} searchTerm={this.searchTerm} />
    <SearchResults def={this.state.def} />
    </div>
  );
  }
}

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.setDef = [{"defenition": ""}]; 
  }
  
  getDef() {
    if (typeof this.props.def === 'undefined' || this.props.def === null || this.props.def === '') {
    } else {
          this.setDef = JSON.parse(this.props.def);
    }
  }

  render() {
    this.getDef();
    return(
      <div>{this.setDef[0]["defenition"]}</div>
    );
  }

}

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {searchTerm: ''};
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmitFn}>
          <label>
            Name:
            <input type="text" value={this.props.searchTerm} onChange={this.props.handleChangeFn} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

  function httpGet(theUrl)
  {
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
      xmlHttp.send( null );
      return xmlHttp.responseText;
  }


export default App;
