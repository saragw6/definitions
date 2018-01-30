import React, { Component } from 'react';
import Autocomplete from 'react-toolbox/lib/autocomplete/Autocomplete.js';


import theme from './assets/react-toolbox/theme.js';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import './assets/react-toolbox/theme.css';
//import logo from './logo.svg';
import './App.css';

import ResultCard from './ResultCard.js';

//TODO : switch over to making calls to od-api and/or get CORS working

const source = [
  'LGBTQ',
  'Lesbian',
  'Lipstick lesbian',
  'Feminist',
  'Feminsm',
  'Femme',
  'Queer',
  'Genderqueer'
];


//uses broken searchresults component
class App extends Component {
  constructor() {
  super();
    this.state = {
      searchTerm: 'filler text',
      def: '',
      my_term: ''
    };

    this.handleChange = this.handleTermChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  
  /*handleChange(event) {
    this.setState({searchTerm: event.target.value});
  }*/

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.searchTerm);
    event.preventDefault();
    let def = httpGet("https://owlbot.info/api/v1/dictionary/" + this.state.searchTerm + "?format=json");
    this.setState({def: def});
  }

  handleTermChange = (value) => {
    this.setState({my_term: value});
  };

  render() {
  return(
    <ThemeProvider theme={theme}>
    <div>
    <Autocomplete
        direction="down"
        selectedPosition="above"
        label="Choose a term"
        onChange={this.handleTermChange}
        source={source}
        value={this.state.my_term}
        suggestionMatch="anywhere"
        multiple={false}
      />
      <ResultCard term={this.state.my_term} />
    <SearchResults def={this.state.def} />
    </div>
    </ThemeProvider>
  );
  }
}

    //<SearchForm handleChangeFn={this.handleChange} handleSubmitFn={this.handleSubmit} searchTerm={this.searchTerm} />

//BROKEN!!
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


/*class SearchForm extends Component {
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
}*/

  function httpGet(theUrl)
  {
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
      xmlHttp.send( null );
      return xmlHttp.responseText;
  }


export default App;
