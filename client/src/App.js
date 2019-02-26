import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import DocumentTitle from 'react-document-title';
import { Helmet } from 'react-helmet'

// COMMENT THESE IN FOR PRODUCTION BUILD
import ReactGA from 'react-ga';
ReactGA.initialize('UA-58549536-5');
ReactGA.pageview(window.location.pathname + window.location.search);

//import logo from './logo.svg';
//import Dialog from 'react-toolbox/lib/dialog/Dialog';

import './assets/react-toolbox/theme.css';
import './stylesheets/App.css';

import { Autocomplete, theme, ThemeProvider, TooltipButton } from './Libraries/ReactToolboxLibrary';
import { ResultList, PotentialDefs } from './Libraries/ComponentsLibrary';
import history from './history';
import { welcomeBlurb } from "./utils/TextBlurbs";
import Boop from "./Pages/Boop";

//TODO: separate out buttons div into new component?
//TODO stop inline styling -- use className on buttons

//TODO: change theme colors to be from rainblog

class App extends Component {
  constructor(props) {
  super();
    this.state = {
      searchTerm: 'filler text',
      def: '',
      // my_term: decodeURIComponent(window.location.hash.substring(2)), //grab term from url
      my_term: props.term, //grab term from url
      // info_modal: decodeURIComponent(window.location.hash) === "#/about",
      entries: [],
      terms: [],
      entriesLoading: true
    };

    fetch('/terms').then(res => {return res.json()}).then(res => {this.setState({terms: res.sort()})}); //i think this is causing an error
    // this.getDefListWithSortAs(this.state.my_term.toLowerCase()); //moved because setState caused warning
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
    this.getDefListWithSortAs(this.state.my_term.toLowerCase());
    window.addEventListener("hashchange", this.handleHashChange, false);
  }

  componentWillUnmount() {
      window.removeEventListener("hashchange", this.handleHashChange, false);
  }

  getDefListWithSortAs(searchterm) {
    this.setState({entries: []});
    if (searchterm === "") {return [];}

    this.setState({entriesLoading: true});
    var url = '/entries/' + encodeURIComponent(searchterm.toLowerCase());
    fetch(url).then(res => {return res.json()}).then(res => {this.setState({entries: res, entriesLoading: false})});
  }


  toggleAbout = () => {
    this.setState({info_modal: !this.state.info_modal});
  }

  aboutOnClick = () => {
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
    const showLoading = this.state.entriesLoading;
    const locationStrings = window.location.href.split(".com/");
    const canonicalUrl = "https://www.queerundefined.com/" + locationStrings[1];
    

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
      <link rel="canonical" href={canonicalUrl} />
      
    </Helmet>
    <div className="header-wrapper">
      <Boop/>
      <a className="header" href="/">queer undefined</a>
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

      {(!showLoading && this.state.my_term !== "" && my_entries.length === 0) &&
        <div className="blurb"> No definitions yet. You can <a href="https://docs.google.com/forms/d/e/1FAIpQLSfKF0yyleI5XdPVtl-bEuQUGy2HZPfnUU-e2sDjL31eLuygUA/viewform?usp=sf_link" target="new">add one</a> or <a href="https://goo.gl/forms/xrZyTzaVo8Addq8d2" target="new">request</a> that this term be defined. </div>
      }
      {(this.state.my_term !== "" && showLoading) &&
        <div className="blurb"> Loading definitions... </div>
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
