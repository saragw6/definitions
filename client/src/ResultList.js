import React from 'react';

import Masonry from 'react-masonry-component';

import ResultCard from './ResultCard.js';
import PotentialCard from './PotentialCard.js';

var masonryOptions = {
    transitionDuration: ".5s"
};

function ResultList(props) {

  const entries = props.entries;
  //const long_def = entry["definition"] + " \n" + entry["whatHasThisTermMeantInYourExperienceHowHaveYouEmbodiedThisTerm"];
  const listItems = entries.map((entry) => {
    if (!props.potentials) {
      return <ResultCard key={"entry" + entry["entry_id"]} term={entry["term"]} def={entry["definition"]} explanation={entry["explanation"]} name={entry["name"]} id={entry["identity"]} /> //just pass the whole json object?
    } else {
      return <PotentialCard key={"potential" + entry["potential_id"]} term={entry["term"]} def={entry["definition"]} explanation={entry["explanation"]} name={entry["name"]} id={entry["identity"]} /> //just pass the whole json object?
    }
  });

  return (
    <Masonry className="defs" options={masonryOptions}>{listItems}</Masonry>
  );
}

//<div style={{display: 'flex', width: 'inherit', 'flexWrap': 'wrap', justifyContent: 'center'}}>{listItems}</div>

export default ResultList;