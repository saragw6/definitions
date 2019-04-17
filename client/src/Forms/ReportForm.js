import React, {Component} from 'react';
import Form from './FormComponent';
import {theme, ThemeProvider, Dialog} from "../Libraries/ReactToolboxLibrary";

const safely = (entry, field) => entry ? entry[field] : null

const identityStyle = {
  textDecoration: 'underline'
}
const authorP = entry => {
  const name = safely(entry, 'name')
  const identity = safely(entry, 'identity')

  const nameStr = name ? `${name},` : 'someone'

  const identityStyle = {textDecoration: 'underline'}
  return <p>Definition submitted by {nameStr} who identifies as <span style={identityStyle}>{identity}</span>:</p>
}

const definitionStyle = {
  fontWeight: 'bold',
  paddingLeft: '2em',
  paddingTop: '1em',
  paddingBottom: '1em',
}

export default class ReportForm extends React.Component {
  state = {
    email: {
      value: '',
      error: false
    },
  }

  updateEmail = (label, isRequired, showError, value) => {
    console.log('updateEmail', value.target.value)
    const error = value === ''
    this.setState({
      email: {
        error,
        value: value.target.value }
    })
  }


  render() {
    const { active, entry, hideCb, reportCb } = this.props
    const { email } = this.state

    const term = safely(entry, 'term')
    const author = authorP(entry)
    const definition = safely(entry, 'definition')
  
    const actions = [{
      label: 'Cancel',
      onClick: hideCb
    }, {
      label: 'Report',
      primary: true,
      raised: true,
      onClick: () => reportCb(entry)
    }]
  
    const content = (
      <div>
        {author}
        <p style={definitionStyle}>{definition}</p>
      </div>
    )
  
    const questions = [{
        labelInput: 'Email address',
        isRequired: true,
        onChange: this.updateEmail,
        showError: email.error,
        value: email.value
    }]
  
    return (
      <ThemeProvider theme={theme}>
        <Dialog actions={actions}
                active={active}
                title={`Report "${term}"`}>
  
                <Form hideTitle={true}
                      hideButton={true}
                      content={content}
                      inputs={questions}
                      />
  
  
        </Dialog>
      </ThemeProvider>
    )
  }
}
