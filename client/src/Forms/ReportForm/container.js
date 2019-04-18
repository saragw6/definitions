import React from 'react';
import { ReportFormState } from './state'
import { ReportForm } from './presentation'

export default class ReportFormContainer extends React.Component {

  constructor(props) {
    super(props)
    this.reportFormState = ReportFormState(this)
    this.reportFormState.initialize()
  }

  render() {
    const { active, entry, hideCb, reportCb } = this.props

    const inputParams = this.reportFormState.createInputParams(this.state)
  
    return <ReportForm entry={entry}
                       active={active}
                       hideCb={hideCb}
                       reportCb={() => reportCb(entry)}
                       inputParams={inputParams} />
  }
}

