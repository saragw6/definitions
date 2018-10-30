import React, { Component } from 'react';
//import Auth from './Auth.js';
import { ResultList } from '../ComponentsLibrary';

import theme from '../assets/react-toolbox/theme.js';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import '../assets/react-toolbox/theme.css';

class ReportedDefs extends Component {

  componentDidMount(){
    let { auth } = this.props;

    if(!auth.isAuthenticated()) { auth.login(); }
    fetch('/reported').then(res => {return res.json()}).then((res) => this.setState({reported: res}));
  }

  render() {
    //fix this up:
    return (
    <ThemeProvider theme={theme}>
      <div>
        {this.props.auth.isAuthenticated() && <ResultList style={{display:"flex", flexDirection:"column", alignContent:"center"}} entries={this.state.reported}/>}
      </div>
    </ThemeProvider>
    );
  }

}

export default ReportedDefs;