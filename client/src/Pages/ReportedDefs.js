import React, { Component } from 'react';
//import Auth from './Auth.js';
import { ResultList } from '../Libraries/ComponentsLibrary';
import { theme, ThemeProvider } from '../Libraries/ReactToolboxLibrary';

import '../assets/react-toolbox/theme.css';

const formatForResultList = apiResponse => apiResponse.map(record =>
    Object.assign(record, {
      rejectCb: function () {
        alert("reject reported definition: " + this.term + " id: " + this.entry_id);
        fetch('/entries/setstatus/3/id/' + this.entry_id, {method: 'POST'});
      },

      acceptCb: function () {
        alert("dismiss (accept) reported definition: " + this.term + " id: " + this.entry_id);
        fetch('/entries/setstatus/2/id/' + this.entry_id, {method: 'POST'});
      }
    })
)

class ReportedDefs extends Component {
  constructor() {
    super();
    this.state = {
      reported: []
    }
  }

  componentDidMount(){
    let { auth } = this.props;

    if(!auth.isAuthenticated()) { auth.login(); }
    fetch('/reported')
        .then(res => {return res.json()})
        .then(formatForResultList)
        .then((res) => this.setState({reported: res}));
  }

  render() {
    //fix this up:
    return (
    <ThemeProvider theme={theme}>
      <div>
        {this.props.auth.isAuthenticated() && <ResultList style={{display:"flex", flexDirection:"column", alignContent:"center"}} entries={this.state.reported} auth={props.auth}/>}
      </div>
    </ThemeProvider>
    );
  }

}

export default ReportedDefs;