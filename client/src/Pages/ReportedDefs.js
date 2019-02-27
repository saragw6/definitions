import React, { Component } from 'react'
// import Auth from './Auth.js';
import { ResultList } from '../Libraries/ComponentsLibrary'
import { theme, ThemeProvider } from '../Libraries/ReactToolboxLibrary'

import '../assets/react-toolbox/theme.css'

class ReportedDefs extends Component {
  componentDidMount () {
    let { auth } = this.props

    if (!auth.isAuthenticated()) { auth.login() }
    fetch('/reported').then(res => { return res.json() }).then((res) => this.setState({ reported: res }))
  }

  render () {
    // fix this up:
    return (
      <ThemeProvider theme={theme}>
        <div>
          {this.props.auth.isAuthenticated() && <ResultList style={{ display: 'flex', flexDirection: 'column', alignContent: 'center' }} entries={this.state.reported} />}
        </div>
      </ThemeProvider>
    )
  }
}

export default ReportedDefs
