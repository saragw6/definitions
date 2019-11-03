import React from 'react';
import {theme, ThemeProvider, Dialog} from "../../Libraries/ReactToolboxLibrary";
import Form from '../FormComponent';
import {Snackbar} from '../../Libraries/ReactToolboxLibrary';
import ResultCard from '../../Pages/ResultCard';

const safely = (entry, field) => entry ? entry[field] : null

const ReportFormTitle = entry =>
  `Report "${safely(entry, 'term')}"`

const ReportFormContent = entry => (
  <div className='report'>
    <ResultCard entry={entry} reporting={true} />
    <p>Thank you for taking the time to report a definition you find offensive. Please include a brief explanation of why this definition should not be included. We also request that you provide your email.</p>
  </div>
)

const InputParams = (emailParams, reasonParams) =>
  [{
    labelInput: 'Email address',
    isRequired: true,
    ...emailParams
  }, {
    labelInput: 'Why should this definition be taken down?',
    isRequired: true,
    ...reasonParams
  }]

const ModalButtons = (reportCb, hideCb, preventSubmission) =>
  [{
    label: 'Cancel',
    onClick: hideCb
   }, {
    label: 'Report',
    className: 'queerButton',
    raised: true,
    onClick: reportCb,
    disabled: preventSubmission
  }]

export const ReportForm = ({ entry, active, hideCb, reportCb, emailParams, reasonParams, preventSubmission, snackbarParams }) =>
  <ThemeProvider theme={theme}>
    <div>
      <Dialog actions={ModalButtons(reportCb, hideCb, preventSubmission)}
              active={active}
              title={ReportFormTitle(entry)}
              onOverlayClick={hideCb}>

              <Form hideTitle={true}
                    hideButton={true}
                    content={ReportFormContent(entry)}
                    inputs={InputParams(emailParams, reasonParams)} />
      </Dialog>
      <Snackbar
        action='Dismiss'
        type='accept'
        label='Thank you for helping improve the quality of Queer Undefined!'
        className='queerSnackbar'
        active={snackbarParams.active}
        timeout={3000}
        onClick={snackbarParams.hide}
        onTimeout={snackbarParams.hide}
      />
    </div>
  </ThemeProvider>
