import React, { Component } from 'react';

import ResultCard from './ResultCard.js'

function ResultList(props) {
  const entries = props.entries;
  const listItems = entries.map((entry) =>
    <ResultCard term={entry["term"]} def={entry["definition"]} name={entry["name"]} id={entry["identity"]} /> //just pass the whole json object
  );

  return (
    <div style={{display: 'flex', width: '100vw', 'flex-wrap': 'wrap' }}>{listItems}</div>
  );
}

export default ResultList;