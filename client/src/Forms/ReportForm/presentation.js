import React from 'react';
import {theme, ThemeProvider, Dialog} from "../../Libraries/ReactToolboxLibrary";
import Form from '../FormComponent';

const safely = (entry, field) => entry ? entry[field] : null

// TODO extract styles to CSS
const identityStyle = {
  textDecoration: 'underline'
}

const definitionStyle = {
  fontWeight: 'bold',
  paddingLeft: '2em',
  paddingTop: '1em',
  paddingBottom: '1em',
}

const authorP = entry => {
  const name = safely(entry, 'name')
  const identity = safely(entry, 'identity')

  const nameStr = name ? `${name},` : 'someone'

  const identityStyle = {textDecoration: 'underline'}
  return <p>Definition submitted by {nameStr} who identifies as <span style={identityStyle}>{identity}</span>:</p>
}

const ReportFormTitle = entry => 
  `Report "${safely(entry, 'term')}"`

const ReportFormContent = entry => (
  <div>
    {authorP(entry)}
    <p style={definitionStyle}>{safely(entry, 'definition')}</p>
    <p>Thank you for taking the time to report a definition you find offensive. Please include a brief explanation of why this definition should not be included. We also request that you provide your email.</p>
  </div>
)

const ModalButtons = (reportCb, hideCb) => 
  [{
    label: 'Cancel',
    onClick: hideCb
   }, {
    label: 'Report',
    primary: true,
    raised: true,
    onClick: reportCb
  }]

export const ReportForm = ({entry, active, hideCb, reportCb, inputParams}) =>
  <ThemeProvider theme={theme}>
    <Dialog actions={ModalButtons(reportCb, hideCb)}
            active={active}
            title={ReportFormTitle(entry)}
            onOverlayClick={hideCb}>
  
            <Form hideTitle={true}
                  hideButton={true}
                  content={ReportFormContent(entry)}
                  inputs={inputParams} />
    </Dialog>
  </ThemeProvider>

