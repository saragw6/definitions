import React from 'react';

import Masonry from 'react-masonry-component';

import ResultCard from '../ResultCard.js';

var masonryOptions = {
    transitionDuration: ".5s"
};

function ResultList(props) {

  const entries = props.entries;
  const listItems = entries.map((entry) => {
    return <ResultCard key={entry["entry_id"]} entry={entry}/>
  });

  return (
    <Masonry className="defs" options={masonryOptions}>{listItems}</Masonry>
  );
}

export default ResultList;