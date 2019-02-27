import React, { Component } from 'react'

import Button from 'react-toolbox/lib/button/Button'
import Tooltip from 'react-toolbox/lib/tooltip'
const TooltipButton = Tooltip(Button)

// need to pass in auth as prop....that means u must move Auth to App.js
class LoginButton extends Component {
  login () {
    this.props.auth.login()
  }

  logout () {
    this.props.auth.logout()
  }

  render () {
    const { isAuthenticated } = this.props.auth

    return (
      <div>
        {
          !isAuthenticated() && (' ')
        }
        {
          isAuthenticated() && (
            <TooltipButton icon='feedback' mini floating primary onClick={this.logout.bind(this)} style={{ margin: '5px' }} tooltip='Log Out' />
          )
        }
      </div>
    )
  }
}

export default LoginButton
