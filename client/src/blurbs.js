import React from 'react';
import { welcomeBlurb } from "./utils/TextBlurbs";

function DisagreementBlurb(props) {
  return (
    <div className="blurb less-padding">Disagree with these definitions? <a href={props.addDefinitionUrl}>Add your own</a></div>
  );
}

function LoadingDefinitionsBlurb(props) {
  return (<div className="blurb"> Loading definitions... </div>);
}

function NoDefinitionsBlurb(props) {
  return (
    <div className="blurb">
      No definitions yet. You can <a href={props.addDefinitionUrl}>add one</a> or <a href={props.requestDefinitionUrl}>request</a> that this term be defined.
    </div>
  );
}

function WelcomeBlurb(props) {
  return (<div className="blurb">{welcomeBlurb}</div>);
}

export {
  DisagreementBlurb,
  LoadingDefinitionsBlurb,
  NoDefinitionsBlurb,
  WelcomeBlurb
};
