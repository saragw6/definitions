import React, {Component} from 'react';
import Form from './FormComponent';
import {theme, ThemeProvider, Dialog} from "../Libraries/ReactToolboxLibrary";

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

// TODO extract presentation components
const authorP = entry => {
  const name = safely(entry, 'name')
  const identity = safely(entry, 'identity')

  const nameStr = name ? `${name},` : 'someone'

  const identityStyle = {textDecoration: 'underline'}
  return <p>Definition submitted by {nameStr} who identifies as <span style={identityStyle}>{identity}</span>:</p>
}

const formContentFor = (entry) => (
  <div>
    {authorP(entry)}
    <p style={definitionStyle}>{safely(entry, 'definition')}</p>
  </div>
)

const setupFormState = function(component, key, label, isRequired) {
  const updateCb = (label, isRequired, showError, value) => {
    component.setState(prevState => ({
      [key]: {
        error: value === '',
        value
      }
    }))
  }

  const blurCb = () => {
    component.setState(prevState => ({
      [key]: {
        error: prevState[key].value === '',
        value: prevState[key].value
      }
    }))
  }

  return {
    // Only to be called from component constructor
    initialize: function () {
      component.state[key] = {
        value: '',
        error: false
      }
    },

    // Only to be called in component render method
    createInputParams: function(state) {
      return {
        labelInput: label,
        isRequired: isRequired,
        onChange: updateCb,
        onBlur: blurCb,
        showError: state[key].error,
        value: state[key].value
      }
    }
  }
}

const reportFormState = component => {
  const questions = [
    setupFormState(component, 'email', 'Email address', true),
    setupFormState(component, 'reason', 'Why should this definition be taken down?', true)
  ]

  return {
    initialize: function () {
      component.state = {}
      questions.forEach(q => q.initialize())
    },

    createInputParams: function (state) {
      return questions.map(q => q.createInputParams(state))
    }
  }
}

export default class ReportForm extends React.Component {

  constructor(props) {
    super(props)
    this.reportFormState = reportFormState(this)
    this.reportFormState.initialize()
  }

  render() {
    const { active, entry, hideCb, reportCb } = this.props

    const title = `Report "${safely(entry, 'term')}"`
    const content = formContentFor(entry)
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
  
    return (
      <ThemeProvider theme={theme}>
        <Dialog actions={buttonParams}
                active={active}
                title={title}
                onOverlayClick={hideCb}>
  
                <Form hideTitle={true}
                      hideButton={true}
                      content={content}
                      inputs={inputParams} />
        </Dialog>
      </ThemeProvider>
    )
  }
}

