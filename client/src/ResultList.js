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
    // if (!props.potentials) {
    //   return <ResultCard key={entry["entry_id"]} entry_id={entry["entry_id"]} term={entry["term"]} definition={entry["definition"]} explanation={entry["explanation"]} name={entry["name"]} author_id={entry["identity"]} /> //just pass the whole json object?
    // } else {
    //   //return <PotentialCard key={entry["potential_id"]} entry_id={entry["potential_id"]} term={entry["term"]} definition={entry["definition"]} explanation={entry["explanation"]} name={entry["name"]} author_id={entry["identity"]} /> //just pass the whole json object?
    //   return <PotentialCard key={entry["entry_id"]} entry_id={entry["entry_id"]} term={entry["term"]} definition={entry["definition"]} explanation={entry["explanation"]} name={entry["name"]} author_id={entry["identity"]} /> //just pass the whole json object?
    // }


    return <ResultCard key={entry["entry_id"]} entry={entry}/>
    //return <ResultCard key={entry["entry_id"]} entry_id={entry["entry_id"]} term={entry["term"]} definition={entry["definition"]} explanation={entry["explanation"]} name={entry["name"]} author_id={entry["identity"]} action={entry["action"]}/>
  });

  return (
    <Masonry className="defs" options={masonryOptions}>{listItems}</Masonry>
  );
}

//<div style={{display: 'flex', width: 'inherit', 'flexWrap': 'wrap', justifyContent: 'center'}}>{listItems}</div>

export default ResultList;