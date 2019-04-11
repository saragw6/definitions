import React, { Component } from 'react';
import { welcomeBlurb } from "./utils/TextBlurbs";

const add_definition_url = "https://docs.google.com/forms/d/e/1FAIpQLSfKF0yyleI5XdPVtl-bEuQUGy2HZPfnUU-e2sDjL31eLuygUA/viewform?usp=sf_link";
const request_definition_url = "https://goo.gl/forms/xrZyTzaVo8Addq8d2";

function DisagreementBlurb(props) {
  return props.requirement && (
    <div className="blurb">Disagree with these definitions? <a href={add_definition_url} target="new">Add your own</a></div>
  );
}

function LoadingDefinitionsBlurb(props) {
  return props.requirement && (<div className="blurb"> Loading definitions... </div>);
}

function NoDefinitionsBlurb(props) {
  return props.requirement && (
    <div className="blurb">
      No definitions yet. You can <a href={add_definition_url} target="new">add one</a> or <a href={request_definition_url} target="new">request</a> that this term be defined.
    </div>
  );
}

function WelcomeBlurb(props) {
  return props.requirement && (<div className="blurb">{welcomeBlurb}</div>);
}

export {
  DisagreementBlurb,
  LoadingDefinitionsBlurb,
  NoDefinitionsBlurb,
  WelcomeBlurb
};
