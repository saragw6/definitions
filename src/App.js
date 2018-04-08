import React, { Component } from 'react';



// COMMENT THESE IN FOR PRODUCTION BUILD
// import ReactGA from 'react-ga';
// ReactGA.initialize('UA-58549536-4');
// ReactGA.pageview(window.location.pathname + window.location.search);

import Autocomplete from 'react-toolbox/lib/autocomplete/Autocomplete.js';

import theme from './assets/react-toolbox/theme.js';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import './assets/react-toolbox/theme.css';
//import logo from './logo.svg';

import Button from 'react-toolbox/lib/button/Button';
import Tooltip from 'react-toolbox/lib/tooltip';
const TooltipButton = Tooltip(Button);

import Dialog from 'react-toolbox/lib/dialog/Dialog';

import './App.css';

import ResultList from './ResultList.js';

//TODO : switch over to making calls to od-api and/or get CORS working

//TODO: separate out buttons div into new component?
//TODO stop inline styling -- use className on buttons

//TODO: change theme colors to be from rainblog

//todo: change the css so when you collapse the page all the way, the overflowing title makes the grainblog extend further
// - right now it has negative left margin on the title to simply avoid the title collapsing

//TODO: make a modal for the info page
//TODO: could use js to adjust css to center defs when there are only 1 or 2 defs


import * as mydefs from './defs.js';
import * as mydefswithsort from './defswithsort.js';

const defs = mydefs.defs;
const defswithsort = mydefswithsort.defswithsort;

const available_terms = defs.map((entry) => {return entry["term"].toLowerCase()});
const no_dup = Array.from(new Set(available_terms)).sort();


class App extends Component {
  constructor() {
  super();
    this.state = {
      searchTerm: 'filler text',
      def: '',
      my_term: decodeURIComponent(window.location.search.substring(2)), //grab term from url
      info_modal: decodeURIComponent(window.location).includes("about")
    };

    this.handleChange = this.handleTermChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    document.title = this.state.my_term === "" ? "queer undefined" : "queer undefined | " + this.state.my_term;
  }
  

  getDefList(searchterm) {
    var searchdefs = defs.filter((entry) => { return entry["term"].toUpperCase() === searchterm.toUpperCase() });

    var resultList = searchdefs[0] === undefined ? [] : searchdefs; //change this

    return resultList;
  }

  getDefListWithSortAs(searchterm) {
    //console.log(defswithsort[0]["sort-as"].includes(searchterm));
    //search term will always be lowercase

    var searchdefs = defswithsort.filter((entry) => { return entry["sort-as"].includes(searchterm) || entry["term"].toLowerCase() === searchterm });

    console.log(searchdefs);

    var resultList = searchdefs[0] === undefined ? [] : searchdefs; //change this

    return resultList;
  }


  toggleAbout = () => {
    this.setState({info_modal: !this.state.info_modal});
  }

  aboutOnClick = () => {
    this.toggleAbout();
    // var newURL = this.state.info_modal ? "/definitions" : "/definitions/about"; //because its hosted on github for now
    // history.pushState(null, null, newURL);
    if (!this.state.info_modal) {
      history.pushState(null, null, "/definitions/about");
    } else {
      this.handleTermChange(this.state.my_term);
    }
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
    var new_query = value === "" ? "" : "?=" + encodeURIComponent(value);
    this.setState({my_term: value});
    history.pushState(null, null, "/definitions/" + new_query); //add term to url //definitions bc github

    //COMMENT IN FOR PRODUCTION BUILD
    //ReactGA.pageview(window.location.pathname + window.location.search);    
  };

 //TODO: edit the request form to say the url/title instead of "the site"
//the && for the ne defs section in this render causes it to only render when the 1st clause is true
  render() {
    const my_entries = this.getDefListWithSortAs(this.state.my_term.toLowerCase());

  return(
    <ThemeProvider theme={theme}>
    <div>
    <div className="header-wrapper">
      <div className="header">queer undefined</div>
      <Autocomplete
        allowCreate
        direction="down"
        selectedPosition="above"
        label="enter a term"
        onChange={this.handleTermChange}
        onQueryChange={this.handleTermChange}
        source={no_dup}
        value={this.state.my_term}
        suggestionMatch="anywhere"
        multiple={false}
        showSuggestionsWhenValueIsSet={false}
      />
    </div>
    <Dialog
      actions={ [{label: "Done", onClick: this.aboutOnClick}] }
      active={this.state.info_modal}
      onEscKeyDown={this.aboutOnClick}
      onOverlayClick={this.aboutOnClick}
      title='About queer undefined'
    >

            <p>I'm making a site that defines terms having to do with gender and sexuality. This site will be for people who are questioning their gender or sexual identity, and for allies looking to know more about LGBTQ+ terms. </p>

            <p>There are so many words used to describe gender and orientation. The variety of terms can be freeing, but it can also make things trickier for people who aren't familiar with the vocabulary yet. The aim of this project is to help people navigate the dozens and dozens of terms out there, whether they are looking to understand themselves or others better.</p>

            <p> If you want to contribute a definition use <a href="https://goo.gl/forms/Jk1DogBiCZ2asnJq1">this google form</a>!</p>

            <h6 className="_2J-aP" style={{marginTop: "16px"}}>Background</h6>

            <p>I often get questions about the meaning of LGBTQ+ terms. I use resources like Human Rights Campaign's <a href="https://www.hrc.org/resources/glossary-of-terms">Glossary of Terms</a> to explain terms that I don't personally identify with – but lists like that are limited. They only include so many words, and for each term they just give an impersonal dictionary definition.</p>

            <p>These words have a lot of nuance and depth. For example, two people who identify as bisexual might have completely different explanations of what that word means to them. That's why I'm gathering informal definitions from LGBTQ+ people – to give multiple personal perspectives. That way people learning these words can get more of the full story, and if they're looking for a way to label themself they can find something they connect to.</p>

            <h6 className="_2J-aP" style={{marginTop: "16px"}}>About Me</h6>
            <p>I'm a senior at Tufts University studying Gender Studies and Computer Science. I'm creating this site as my capstone for my Gender Studies Major.</p>

            

            <p> If you have any questions/feedback, email me at <a href="mailto:sgwcapstone@gmail.com">sgwcapstone@gmail.com</a>.</p>
    </Dialog>
      {(this.state.my_term !== "" && my_entries.length === 0) &&
        <div className="blurb"> No definitions yet. You can <a href="https://docs.google.com/forms/d/e/1FAIpQLSfKF0yyleI5XdPVtl-bEuQUGy2HZPfnUU-e2sDjL31eLuygUA/viewform?usp=sf_link" target="new">add one</a> or <a href="https://goo.gl/forms/xrZyTzaVo8Addq8d2" target="new">request</a> that this term be defined. </div>
      }
      {(this.state.my_term === "") &&
        <div className="blurb">
        welcome to queer undefined, a site detailing  the many
meanings of lgbtq+ labels and phrases. each definition
you see here was submitted by an individual and may
not align with your understanding or even with the
other definitions displayed alongside it. the lgbtq+
community is multifaceted and ever-shifting,
as is our vernacular. none of these definitions is
official or final. this site is not all-encompassing.
it is an attempt to decrease barriers to
conversation and understanding by opening a
space of learning and knowledge-sharing, where we can collaboratively make meaning as a community. </div>
      }
      <ResultList style={{display:"flex", flexDirection:"column", alignContent:"center"}} entries={my_entries} />
      <div style={{position: 'fixed', bottom: '15px', right: '15px'}}>
        <TooltipButton icon='feedback' mini floating primary href="https://docs.google.com/forms/d/e/1FAIpQLSfKF0yyleI5XdPVtl-bEuQUGy2HZPfnUU-e2sDjL31eLuygUA/viewform?usp=sf_link" target="new" style={{margin: '5px'}} tooltip='define'/>
        <TooltipButton icon='live_help' mini floating primary style={{margin: '5px'}} tooltip='request' href="https://goo.gl/forms/xrZyTzaVo8Addq8d2" target="new" />
        <TooltipButton icon='info' onClick={this.aboutOnClick} mini floating primary style={{margin: '5px'}} tooltip="about"/>

      </div>
    </div>
    </ThemeProvider>
  );
  }
}

//href="http://saragw6.github.io/capstone/about.html" target="new"


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
