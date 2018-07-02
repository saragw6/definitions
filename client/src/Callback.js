//may need react router to get this working. look at auth0 github for example

import React, { Component } from 'react';
import loading from './loading.svg';

class Callback extends Component {
  render() {
    //const style = //...
    // (then use <div style={style}>)

    return (
      <div>
        <img src={loading} alt="loading"/>
      </div>
    );
  }
}

export default Callback;