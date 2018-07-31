import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

// COMMENT THESE IN FOR PRODUCTION BUILD
import ReactGA from 'react-ga';
ReactGA.initialize('UA-58549536-5');
ReactGA.pageview(window.location.pathname + window.location.search);

import Autocomplete from 'react-toolbox/lib/autocomplete/Autocomplete.js';

import theme from './assets/react-toolbox/theme.js';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import './assets/react-toolbox/theme.css';
//import logo from './logo.svg';

import Button from 'react-toolbox/lib/button/Button';
import Tooltip from 'react-toolbox/lib/tooltip';
const TooltipButton = Tooltip(Button);

//import Dialog from 'react-toolbox/lib/dialog/Dialog';
import {Helmet} from 'react-helmet'

import DocumentTitle from 'react-document-title';

import './App.css';

import ResultList from './ResultList.js';
import PotentialDefs from './PotentialDefs.js'

import history from './history';

const welcomeBlurb = "welcome to queer undefined, a site detailing  the many" +
"meanings of lgbtq+ labels and phrases. each definition" +
"you see here was submitted by an individual and may" +
"not align with your understanding or even with the" +
"other definitions displayed alongside it. the lgbtq+" +
"community is multifaceted and ever-shifting," +
"as is our vernacular. none of these definitions is" +
"official or final. this site is not all-encompassing." +
"it is an attempt to decrease barriers to" +
"conversation and understanding by opening a" +
"space of learning and knowledge-sharing, where we can collaboratively make meaning as a community. ";

//TODO: separate out buttons div into new component?
//TODO stop inline styling -- use className on buttons

//TODO: change theme colors to be from rainblog

class App extends Component {
  constructor(props) {
  super();
  console.log(props.term);
    this.state = {
      searchTerm: 'filler text',
      def: '',
      // my_term: decodeURIComponent(window.location.hash.substring(2)), //grab term from url
      my_term: props.term, //grab term from url
      // info_modal: decodeURIComponent(window.location.hash) === "#/about",
      entries: [],
      terms: []
    };
    console.log(this.state.my_term);
    console.log("updates are effective");

    fetch('/terms').then(res => {return res.json()}).then(res => {this.setState({terms: res.sort()})}); //i think this is causing an error
    this.getDefListWithSortAs(this.state.my_term.toLowerCase());
    this.handleChange = this.handleTermChange.bind(this);
  }

  handleHashChange = () => {
    var hash = decodeURIComponent(window.location.hash.substring(2));
    if (hash === "about") {
      this.setState({info_modal: true});
    } else {
      this.setState({my_term: hash});
      this.getDefListWithSortAs(hash); //is this needed?
    }
  }

  componentDidMount() {
    window.addEventListener("hashchange", this.handleHashChange, false);
  }

  componentWillUnmount() {
      window.removeEventListener("hashchange", this.handleHashChange, false);
  }

  getDefListWithSortAs(searchterm) {
    if (searchterm === "") {this.setState({entries: []}); return [];}
    var url = '/entries/' + encodeURIComponent(searchterm.toLowerCase());
    fetch(url).then(res => {return res.json()}).then(res => {this.setState({entries: res})});
  }


  toggleAbout = () => {
    this.setState({info_modal: !this.state.info_modal});
  }

  aboutOnClick = () => {
    // this.toggleAbout();
    // // var newURL = this.state.info_modal ? "/definitions" : "/definitions/about"; //because its hosted on github for now
    // // history.pushState(null, null, newURL);
    // if (!this.state.info_modal) {
    //   //history.pushState(null, null, "/#/about");
    // } else {
    //   var new_term = this.state.my_term === "about" ? "" : this.state.my_term;
    //   this.handleTermChange(new_term);
    // }
    this.setState({my_term: ""});
    this.getDefListWithSortAs("");
    history.push("/about");
  }

//took definitions out of link
  handleTermChange = (value) => {
    var new_query = value === "" ? "" : "search/" + encodeURIComponent(value);
    this.setState({my_term: value});
    //history.pushState(null, null, "/" + new_query); //add term to url
    history.push("/" + new_query);
    this.getDefListWithSortAs(value);

    //COMMENT IN FOR PRODUCTION BUILD
    ReactGA.pageview(window.location.pathname);    
  };

 //TODO: edit the request form to say the url/title instead of "the site"
//the && for the ne defs section in this render causes it to only render when the 1st clause is true
  render() {
    const terms = this.state.terms;
    const my_entries = this.state.entries;
    const pageTitle = this.state.my_term === "" ? "Queer Undefined" : this.state.my_term + " | Queer Undefined" ;
    const description = this.state.my_term === "about" ? "Queer Undefined: a crowd-sourced dictonary of LGBTQ+ terms. You can also submit your own definitions or request a word you want to be defined." : "Queer Undefined: a crowd-sourced dictonary of LGBTQ+ terms. Find the definition of " + this.state.my_term + " and more! You can also submit your own definitions or request a word you want to be defined."

  return(
    <DocumentTitle title={pageTitle}>
    <ThemeProvider theme={theme}>
    <div>
    {(this.props.admin && !this.props.auth.isAuthenticated()) && <PotentialDefs auth={this.props.auth}/>}
    <Helmet>
      <meta property="og:image" content="http://queerundefined.com/quthumbnail.png" />
      <meta property="og:description" content={description} />
      <meta property="description" content={description} />
      <meta property="og:site_name" content="Queer Undefined"/>
      <meta property="og:title" content={pageTitle}/>
    </Helmet>
    <div className="header-wrapper">
      <div className="header">queer undefined</div>
      <Autocomplete
        allowCreate
        direction="down"
        selectedPosition="above"
        label="enter a term"
        onChange={this.handleTermChange}
        source={terms}
        value={this.state.my_term}
        suggestionMatch="anywhere"
        showSuggestionsWhenValueIsSet={false}
        multiple={false}
      />
    </div>

      {(this.state.my_term !== "" && my_entries.length === 0) &&
        <div className="blurb"> No definitions yet. You can <a href="https://docs.google.com/forms/d/e/1FAIpQLSfKF0yyleI5XdPVtl-bEuQUGy2HZPfnUU-e2sDjL31eLuygUA/viewform?usp=sf_link" target="new">add one</a> or <a href="https://goo.gl/forms/xrZyTzaVo8Addq8d2" target="new">request</a> that this term be defined. </div>
      }
      {(this.state.my_term === "" && window.location.pathname === "/") &&
        <div className="blurb">{welcomeBlurb}</div>
      }
      <ResultList style={{display:"flex", flexDirection:"column", alignContent:"center"}} entries={my_entries} />
      <div style={{position: 'fixed', bottom: '15px', right: '15px'}}>
        {this.props.auth.isAuthenticated() && <TooltipButton icon="clear" onClick={this.props.auth.logout} mini floating primary style={{margin: '5px'}} tooltip="logout"/>}
        <TooltipButton icon='feedback' mini floating primary href="https://docs.google.com/forms/d/e/1FAIpQLSfKF0yyleI5XdPVtl-bEuQUGy2HZPfnUU-e2sDjL31eLuygUA/viewform?usp=sf_link" target="_blank" style={{margin: '5px'}} tooltip='define'/>
        <TooltipButton icon='live_help' mini floating primary style={{margin: '5px'}} tooltip='request' href="https://goo.gl/forms/xrZyTzaVo8Addq8d2" target="_blank" />
        <TooltipButton icon='info' onClick={this.aboutOnClick} mini floating primary style={{margin: '5px'}} tooltip="info"/>


      </div>
    </div>
    </ThemeProvider>
    </DocumentTitle>
  );
  }
}

export default withRouter(App);
