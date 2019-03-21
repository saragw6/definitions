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
      .then(data => data.map((term, index) => Object.assign(term, {
        entry_id: index,

        rejectCb: function () {
          fetch(`/requested/${this.term}?action=reject`, {
            method: 'POST'
          })
        },

        acceptCb: function () {
          fetch(`/requested/${this.term}?action=accept`, {
            method: 'POST'
          })
        }
      })))
      .then(data => this.setState({ terms: data }))
  }

  render() {
    const results = this.state.terms.length === 0
      ? <h5 style={{textAlign: 'center'}}>No potential terms</h5>
      : <ResultList
            style={{display:"flex", flexDirection:"column", alignContent:"center"}}
            entries={this.state.terms} />
    return (
      <ThemeProvider theme={theme}>
        <div>
          {results}
        </div>
      </ThemeProvider>
    )
  }
}
