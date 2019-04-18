import React from 'react';
import { TextInputState } from './state'
import { ReportForm } from './presentation'

export default class ReportFormContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}

    this.emailState = TextInputState(this, 'email')
    this.emailState.initialize()

    this.reasonState = TextInputState(this, 'reason')
    this.reasonState.initialize()
  }

  render() {
    const { active, entry, hideCb, reportCb } = this.props

    const emailParams = this.emailState.createInputParams(this.state)
    const reasonParams = this.reasonState.createInputParams(this.state)

    return <ReportForm entry={entry}
                       active={active}
                       hideCb={hideCb}
                       reportCb={() => reportCb(entry)}
                       emailParams={emailParams}
                       reasonParams={reasonParams } />
  }
}

