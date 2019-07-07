import React from 'react';
import { TextInputState, SnackbarState } from './state'
import { ReportForm } from './presentation'

export default class ReportFormContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}

    this.emailState = TextInputState(this, 'email', [
      value => value.match(/[^@]+@[^.]+\..+/) ? null : 'Valid email required'
    ])
    this.emailState.initialize()

    this.reasonState = TextInputState(this, 'reason')
    this.reasonState.initialize()

    this.snackbarState = SnackbarState(this)
    this.snackbarState.initialize()
  }

  render() {
    const { active, entry, hideCb, reportCb } = this.props

    const emailParams = this.emailState.createInputParams(this.state)
    const reasonParams = this.reasonState.createInputParams(this.state)
    const snackbarParams = this.snackbarState.createSnackbarParams(this.state)

    const resetAnd = fn => () => {
      fn()
      this.emailState.reset()
      this.reasonState.reset()
    }
    const hide = resetAnd(hideCb)
    const report = resetAnd(() => {
      reportCb(entry, emailParams.value, reasonParams.value)
      this.snackbarState.show()
    })

    const preventSubmission = this.emailState.isErrorOrEmpty(this.state)
      || this.reasonState.isErrorOrEmpty(this.state)

    return <ReportForm entry={entry}
                       active={active}
                       hideCb={hide}
                       reportCb={report}
                       emailParams={emailParams}
                       reasonParams={reasonParams}
                       snackbarParams={snackbarParams}
                       preventSubmission={preventSubmission} />
  }
}

