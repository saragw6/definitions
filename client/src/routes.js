import React from 'react';
import { Route, Router } from 'react-router-dom'; //yarn add
import history from './history';
import { getTermFromPath, searchHashRedirect } from "./utils/UtilityFunctions";

import { Callback, PotentialDefs, DefineForm,
    RequestForm, ReportedDefs, Glossary, About, App, Auth } from './ComponentsLibrary';

const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

const makeMainRoutes = () => {
  return (
      <Router history={history}>
        <div>
          <Route path="/*" render={(props) => {searchHashRedirect(); return <App auth={auth} term={getTermFromPath(props.match.params[0])}/>;} }/>
          <Route path="/potentialdefs" render={() => <PotentialDefs auth={auth}/>} />
          <Route path="/defineform" render={() => <DefineForm/>} />
          <Route path="/requestform" render={() => <RequestForm/>} />
          <Route path="/reporteddefs" render={() => <ReportedDefs auth={auth}/>} />
          <Route path="/about" render={(props) => <About auth={auth}/>} />
          <Route path="/glossary" render={(props) =>  <Glossary auth={auth}/>} />
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback/>
          }}/>
        </div>
      </Router>
  );
}

export default makeMainRoutes;
