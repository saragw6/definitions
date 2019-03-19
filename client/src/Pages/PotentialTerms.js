import React, { Component } from 'react';

import { ResultList } from '../Libraries/ComponentsLibrary';
import { theme, ThemeProvider } from '../Libraries/ReactToolboxLibrary';

import '../assets/react-toolbox/theme.css';

export default class PotentialTerms extends Component {
  state = {
    terms: []
  }

  componentDidMount () {
    fetch('/requested')
      .then(res => res.json())
      .then(data => data.map((term, index) => Object.assign(term, { entry_id: index })))
      .then(data => this.setState({ terms: data }))
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <ResultList
            style={{display:"flex", flexDirection:"column", alignContent:"center"}}
            entries={this.state.terms} />
        </div>
      </ThemeProvider>
    )
  }
}
