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
    const buttonParams = [{
      label: 'Cancel',
      onClick: hideCb
    }, {
      label: 'Report',
      primary: true,
      raised: true,
      onClick: () => reportCb(entry)
    }]
  
    return <ReportForm entry={entry}
                       active={active}
                       hideCb={hideCb}
                       buttonParams={buttonParams}
                       inputParams={inputParams} />
  }
}

