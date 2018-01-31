import React, { Component } from 'react';
//import { Card, CardTitle, CardText} from 'react-toolbox/lib/card';

import ResultCard from './ResultCard.js'

function ResultList(props) {
  const entries = props.entries;
  const listItems = entries.map((entry) =>
    <ResultCard term={entry["term"]} def={entry["definition"]} />
  );

//change the formatting below:

  return (
    <div style={{display: 'flex'}}>{listItems}</div>
  );
}

export default ResultList;