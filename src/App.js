import React, { Component } from 'react';
import Autocomplete from 'react-toolbox/lib/autocomplete/Autocomplete.js';

import theme from './assets/react-toolbox/theme.js';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import './assets/react-toolbox/theme.css';
//import logo from './logo.svg';

import Button from 'react-toolbox/lib/button/Button';
import Tooltip from 'react-toolbox/lib/tooltip';
const TooltipButton = Tooltip(Button);

import './App.css';

import ResultList from './ResultList.js';

//TODO : switch over to making calls to od-api and/or get CORS working

//TODO: separate out buttons div into new component?
//TODO stop inline styling -- use className on buttons

import * as myConstClass from './defs.js';

const defs = myConstClass.defs;
const available_terms = defs.map((entry) => {return entry["term"].toLowerCase()});
const no_dup = Array.from(new Set(available_terms));
console.log(available_terms);
console.log(no_dup);


class App extends Component {
  constructor() {
  super();
    this.state = {
      searchTerm: 'filler text',
      def: '',
      my_term: window.location.pathname.substring(1) //grab term from url
    };

    this.handleChange = this.handleTermChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
  }
  

  getDefList(searchterm) {
    var searchdefs = defs.filter((entry) => { return entry["term"].toUpperCase() === searchterm.toUpperCase() });

    if (!(searchdefs[0] === undefined)) {
      console.log(searchdefs[0]["definition"]);
    }

    var resultList = searchdefs[0] === undefined ? [] : searchdefs; //change this

    return resultList;
  }
  
  /*handleChange(event) {
    this.setState({searchTerm: event.target.value});
  }*/

  // handleSubmit(event) {
  //   alert('A name was submitted: ' + this.state.searchTerm);
  //   event.preventDefault();
  //   let def = httpGet("https://owlbot.info/api/v1/dictionary/" + this.state.searchTerm + "?format=json");
  //   this.setState({def: def});
  // }

  handleTermChange = (value) => {
    if (value === "") {
      alert("empty"); //TODO: remove this
    } else {
    this.setState({my_term: value});
    history.pushState(null, null, value); //add term to url
    }
  };


//the && for the ne defs section in this render causes it to only render when the 1st clause is true
  render() {
    console.log(this.state.my_term);

    const my_entries = this.getDefList(this.state.my_term);


  return(
    <ThemeProvider theme={theme}>
    <div>
    <Autocomplete
        allowCreate
        direction="down"
        selectedPosition="above"
        label="Choose a term"
        onChange={this.handleTermChange}
        source={no_dup}
        value={this.state.my_term}
        suggestionMatch="anywhere"
        multiple={false}
      />
      {(this.state.my_term !== "" && my_entries.length === 0) &&
        <div style={{textAlign: 'center', color: '#212121'}}> No definitions yet. You can add one or request that this term be defined. </div>
      }
      <ResultList entries={this.getDefList(this.state.my_term)} />
      <div style={{position: 'fixed', bottom: '15px', right: '15px'}}>
        <TooltipButton icon='feedback' mini floating primary href="https://docs.google.com/forms/d/e/1FAIpQLSfKF0yyleI5XdPVtl-bEuQUGy2HZPfnUU-e2sDjL31eLuygUA/viewform?usp=sf_link" target="new" style={{margin: '5px'}} tooltip='Define'/>
        <TooltipButton icon='live_help' mini floating primary style={{margin: '5px'}} tooltip='Request'/>
        <TooltipButton icon='info' mini floating primary href="http://saragw6.github.io/capstone/about.html" target="new" style={{margin: '5px'}} tooltip="About"/>

      </div>
    </div>
    </ThemeProvider>
  );
  }
}


    //<SearchForm handleChangeFn={this.handleChange} handleSubmitFn={this.handleSubmit} searchTerm={this.searchTerm} />

//    <SearchResults def={this.state.def} />
//BROKEN!!
// class SearchResults extends Component {
//   constructor(props) {
//     super(props);
//     this.setDef = [{"defenition": ""}]; 
//   }
  
//   getDef() {
//     if (typeof this.props.def === 'undefined' || this.props.def === null || this.props.def === '') {
//     } else {
//           this.setDef = JSON.parse(this.props.def);
//     }
//   }

//   render() {
//     this.getDef();
//     return(
//       <div>{this.setDef[0]["defenition"]}</div>
//     );
//   }

// }


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

  // function httpGet(theUrl)
  // {
  //     var xmlHttp = new XMLHttpRequest();
  //     xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
  //     xmlHttp.send( null );
  //     return xmlHttp.responseText;
  // }


export default App;
