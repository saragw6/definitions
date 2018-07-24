import React, { Component } from 'react';
//import Auth from './Auth.js';
import ResultList from './ResultList';

import theme from './assets/react-toolbox/theme.js';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import './assets/react-toolbox/theme.css';

//const auth = new Auth();

//call this when you want a user to have to login
//auth.login();

class PotentialDefs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      potentials: [{
        "timestamp": "2018-04-24T02:15:03.107Z",
        "term": "aspec",
        "definition": "\"Aspec\" means someone identifies on the asexual/aromantic spectrum. This can mean they're demisexual, aromantic, and much more!",
        "explanation": "Aspec is typically only used by aspec people, as asexual/aromantics don't have much visibility. This is used to be a sweeping term for anyone that either don't or rarely experience romantic or sexual attraction, and includes everyone that identifies under the umbrella! ",
        "identity": "Asexual Demiromantic (aspec!)",
        "action":1
    },
    {
        "timestamp": "2018-04-24T02:19:39.910Z",
        "term": "Gatekeeping",
        "definition": "Gatekeeping is where someone feels as if they are the ones in charge of deciding who is within a community or not, frequently excluding those who belong on poor opinions. ",
        "explanation": "An example of gatekeeping is gender gatekeeping - as some people believe anyone who doesn't fit the trans man/woman template aren't LGBT,  attempting to keep non binary individuals and other out of the community where they do belong.",
        "identity": "Asexual Demiromantic",
        "action":1
    }]
    };
    //if(!this.props.auth.isAuthenticated()) { this.props.auth.login(); }

    //fetch('/potentials').then(res => {return res.json()}).then((res) => this.setState({potentials: res}));

  }
//fix this up:


  render() {
      //temp:
  //console.log(this.state.potentials);


    //fix this up:
    return (
    <ThemeProvider theme={theme}>
      <div>
        <ResultList style={{display:"flex", flexDirection:"column", alignContent:"center"}} entries={this.state.potentials} potentials={true}/>
      </div>
    </ThemeProvider>
    );
  }

}

export default PotentialDefs;
//{this.props.auth.isAuthenticated() && <ResultList style={{display:"flex", flexDirection:"column", alignContent:"center"}} entries={this.state.potentials} potentials={true}/>}



// import Masonry from 'react-masonry-component';

// import ResultCard from './ResultCard.js'

// var masonryOptions = {
//     transitionDuration: ".5s"
// };

// function ResultList(props) {

//   const entries = props.entries;
//   const listItems = entries.map((entry) =>
//     <ResultCard key={entry["potential_id"]} term={entry["term"]} def={entry["definition"]} explanation={entry["explanation"]} name={entry["name"]} id={entry["identity"]} /> //just pass the whole json object
//   );

//   return (
//     <Masonry className="defs" options={masonryOptions}>{listItems}</Masonry>
//   );
// }

// //<div style={{display: 'flex', width: 'inherit', 'flexWrap': 'wrap', justifyContent: 'center'}}>{listItems}</div>

// export default ResultList;