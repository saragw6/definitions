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
      potentials: []
    };
    if(!this.props.auth.isAuthenticated()) { this.props.auth.login(); }

    fetch('/potentials').then(res => {return res.json()}).then((res) => this.setState({potentials: res}));

  }
//fix this up:


  render() {
      //temp:
  //console.log(this.state.potentials);


    //fix this up:
    return (
    <ThemeProvider theme={theme}>
      <div>
        {this.props.auth.isAuthenticated() && <ResultList style={{display:"flex", flexDirection:"column", alignContent:"center"}} entries={this.state.potentials} potentials={true}/>}
      </div>
    </ThemeProvider>
    );
  }

}

export default PotentialDefs;

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