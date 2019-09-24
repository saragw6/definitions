import React from 'react';
import Masonry from 'react-masonry-component';

import { ResultCard, ReportForm } from '../Libraries/ComponentsLibrary';

var masonryOptions = {
    transitionDuration: ".5s"
};

class ResultList extends React.Component {
  state = {
    reportFormActive: false,
    reportedEntry: null
  }

  showReportForm = entry => {
    this.setState({
      reportFormActive: true,
      reportedEntry: entry
    })
  }

  hideReportForm = () => {
    this.setState({
      reportFormActive: false
    })
  }

  report = (entry, email, reason) => {
    this.hideReportForm()

    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };

    fetch('/reported', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
        entryId: entry.entry_id,
        email,
        reason
      })
    })
  }

  render() {
    const { entries, auth } = this.props
    const { reportFormActive, reportedEntry } = this.state

    const listItems = entries.map((entry) =>
      <ResultCard
        key={entry["entry_id"]}
        entry={entry}
        isAuthenticated={auth && auth.isAuthenticated()}
        reportCb={() => this.showReportForm(entry)}
      />);
  
    return (
      <div>
        <Masonry className="defs" options={masonryOptions}>
          {listItems}
        </Masonry>
        <ReportForm
          active={reportFormActive}
          entry={reportedEntry}
          hideCb={this.hideReportForm}
          reportCb={this.report}
        />
      </div>
    );
  }
}

export default ResultList;
