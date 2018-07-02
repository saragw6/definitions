import React, { Component } from 'react';


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

import Dialog from 'react-toolbox/lib/dialog/Dialog';
import {Helmet} from 'react-helmet'

import DocumentTitle from 'react-document-title';

import './App.css';

import ResultList from './ResultList.js';
import PotentialDefs from './PotentialDefs.js'

//TODO: separate out buttons div into new component?
//TODO stop inline styling -- use className on buttons

//TODO: change theme colors to be from rainblog

class App extends Component {
  constructor() {
  super();
    this.state = {
      searchTerm: 'filler text',
      def: '',
      my_term: decodeURIComponent(window.location.hash.substring(2)), //grab term from url
      info_modal: decodeURIComponent(window.location.hash) === "#/about",
      entries: [],
      terms: []
    };

    fetch('/terms').then(res => {return res.json()}).then(res => {this.setState({terms: res.sort()})});
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
    if (searchterm === "") {return [];}
    var url = '/entries/' + searchterm;
    fetch(url).then(res => {return res.json()}).then(res => {this.setState({entries: res})});
  }


  toggleAbout = () => {
    this.setState({info_modal: !this.state.info_modal});
  }

  aboutOnClick = () => {
    this.toggleAbout();
    // var newURL = this.state.info_modal ? "/definitions" : "/definitions/about"; //because its hosted on github for now
    // history.pushState(null, null, newURL);
    if (!this.state.info_modal) {
      //history.pushState(null, null, "/#/about");
    } else {
      var new_term = this.state.my_term === "about" ? "" : this.state.my_term;
      this.handleTermChange(new_term);
    }
  }

//took definitions out of link
  handleTermChange = (value) => {
    var new_query = value === "" ? "" : "#/" + encodeURIComponent(value);
    this.setState({my_term: value});
    history.pushState(null, null, "/" + new_query); //add term to url
    this.getDefListWithSortAs(value);

    //COMMENT IN FOR PRODUCTION BUILD
    ReactGA.pageview(window.location.hash);    
  };

 //TODO: edit the request form to say the url/title instead of "the site"
//the && for the ne defs section in this render causes it to only render when the 1st clause is true
  render() {
    const terms = this.state.terms;
    const my_entries = this.state.entries;
    const pageTitle = this.state.my_term === "" ? "queer undefined" : this.state.my_term + " | Queer Undefined" ;
    const description = this.state.my_term === "about" ? "Queer Undefined: a crowd-sourced dictonary of LGBTQ+ terms. You can also submit your own definitions or request a word you want to be defined." : "Queer Undefined: a crowd-sourced dictonary of LGBTQ+ terms. Find the definition of " + this.state.my_term + " and more! You can also submit your own definitions or request a word you want to be defined."


  return(
    <DocumentTitle title={pageTitle}>
    <PotentialDefs />
    <ThemeProvider theme={theme}>
    <div>
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
    <Dialog
      actions={ [{label: "Done", onClick: this.aboutOnClick}] }
      active={this.state.info_modal}
      onEscKeyDown={this.aboutOnClick}
      onOverlayClick={this.aboutOnClick}
      title='About queer undefined'
      style={{overflow:"scroll"}}
    >

            <p>I'm making a site that defines terms having to do with gender and sexuality. This site will be for people who are questioning their gender or sexual identity, and for allies looking to know more about LGBTQ+ terms. </p>

            <p>There are so many words used to describe gender and orientation. The variety of terms can be freeing, but it can also make things trickier for people who aren't familiar with the vocabulary yet. The aim of this project is to help people navigate the dozens and dozens of terms out there, whether they are looking to understand themselves or others better.</p>

            <p> If you want to contribute a definition use <a href="https://goo.gl/forms/Jk1DogBiCZ2asnJq1">this google form</a>!</p>

            <h6 className="_2J-aP" style={{marginTop: "16px"}}>Background</h6>

            <p>I often get questions about the meaning of LGBTQ+ terms. I use resources like Human Rights Campaign's <a href="https://www.hrc.org/resources/glossary-of-terms">Glossary of Terms</a> to explain terms that I don't personally identify with – but lists like that are limited. They only include so many words, and for each term they just give an impersonal dictionary definition.</p>

            <p>These words have a lot of nuance and depth. For example, two people who identify as bisexual might have completely different explanations of what that word means to them. That's why I'm gathering informal definitions from LGBTQ+ people – to give multiple personal perspectives. That way people learning these words can get more of the full story, and if they're looking for a way to label themself they can find something they connect to.</p>

            <h6 className="_2J-aP" style={{marginTop: "16px"}}>About Me</h6>
            <p>I'm a senior at Tufts University studying Gender Studies and Computer Science. I'm creating this site as my capstone for my Gender Studies Major.</p>

            

            <p> If you have any questions/feedback, email me at <a href="mailto:info@queerundefined.com">info@queerundefined.com</a>.</p>
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
        <TooltipButton icon='feedback' mini floating primary href="https://docs.google.com/forms/d/e/1FAIpQLSfKF0yyleI5XdPVtl-bEuQUGy2HZPfnUU-e2sDjL31eLuygUA/viewform?usp=sf_link" target="_blank" style={{margin: '5px'}} tooltip='define'/>
        <TooltipButton icon='live_help' mini floating primary style={{margin: '5px'}} tooltip='request' href="https://goo.gl/forms/xrZyTzaVo8Addq8d2" target="_blank" />
        <TooltipButton icon='info' onClick={this.aboutOnClick} mini floating primary style={{margin: '5px'}} tooltip="about"/>

      </div>
    </div>
    </ThemeProvider>
    </DocumentTitle>
  );
  }
}

export default App;
