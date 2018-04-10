import React from 'react';

import Masonry from 'react-masonry-component';

import ResultCard from './ResultCard.js'

var masonryOptions = {
    transitionDuration: ".5s"
};

function ResultList(props) {
  const entries = props.entries;
  const listItems = entries.map((entry) =>
    <ResultCard key={entry["definition"] + entry["timestamp"]} term={entry["term"]} def={entry["definition"]} name={entry["name"]} id={entry["identity"]} /> //just pass the whole json object
  );

  return (
    <Masonry className="defs" options={masonryOptions}>{listItems}</Masonry>
  );
}

//<div style={{display: 'flex', width: 'inherit', 'flexWrap': 'wrap', justifyContent: 'center'}}>{listItems}</div>

export default ResultList;