import React, {Component} from 'react';
import Form from './FormComponent';
import {theme, ThemeProvider, Dialog} from "../Libraries/ReactToolboxLibrary";

const safely = (entry, field) => entry ? entry[field] : null

const authorP = entry => {
  const name = safely(entry, 'name')
  const identity = safely(entry, 'identity')

  const nameStr = name ? `${name},` : 'someone'

  const identityStyle = {textDecoration: 'underline'}
  return <p>Definition submitted by {nameStr} who identifies as <span style={identityStyle}>{identity}</span>:</p>
}

const identityStyle = {
  textDecoration: 'underline'
}

const definitionStyle = {
  fontWeight: 'bold',
  paddingLeft: '2em',
  paddingTop: '1em',
  paddingBottom: '1em',
}

export default ({
  active, entry, hideCb, reportCb
}) => {
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

  const authorInfo = (name, identity) => {
    const nameStr = ``
  }

  return (
    <ThemeProvider theme={theme}>
      <Dialog
        actions={actions}
        active={active}
        title={`Report "${term}"`}>

        {author}
        <p style={definitionStyle}>{definition}</p>

      </Dialog>
    </ThemeProvider>
  )
}
