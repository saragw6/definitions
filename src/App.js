import React, { Component } from 'react';
import Autocomplete from 'react-toolbox/lib/autocomplete/Autocomplete.js';
import RTAutocomplete from './assets/react-toolbox/theme.js';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import './assets/react-toolbox/theme.css';
//import logo from './logo.svg';
import './App.css';

//TODO : switch over to making calls to od-api and/or get CORS working

const source = {
  'ES-es': 'LGBTQ',
  'TH-th': 'Lesbian',
  'EN-gb': 'Lipstick lesbian',
  'EN-en': 'Feminist',
  'a': 'Feminsm',
  'b': 'Femme',
  'c': 'Queer',
  'd': 'Genderqueer'
};

class App extends Component {
  constructor() {
  super();
    this.state = {
      searchTerm: 'filler text',
      def: '',
      countries: []
    };

    this.handleChange = this.handleChange.bind(this);
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

  handleChange = (value) => {
    this.setState({countries: value});
  };

  render() {
  return(
    <ThemeProvider theme={RTAutocomplete}>
    <div>
    <Autocomplete
        direction="down"
        selectedPosition="above"
        label="Choose a term"
        onChange={this.handleChange}
        source={source}
        value={this.state.countries}
        suggestionMatch="anywhere"
      />
    <SearchResults def={this.state.def} />
    </div>
    </ThemeProvider>
  );
  }
}

    //<SearchForm handleChangeFn={this.handleChange} handleSubmitFn={this.handleSubmit} searchTerm={this.searchTerm} />


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
