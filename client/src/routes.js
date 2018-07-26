import React from 'react';
import { Route, Router } from 'react-router-dom'; //yarn add
import App from './App';
// import Home from './Home/Home';
import Callback from './Callback';
import PotentialDefs from './PotentialDefs';
import ReportedDefs from './ReportedDefs';
import Auth from './Auth';
import history from './history';

const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {
  return (
      <Router history={history}>
        <div>
          <Route path="/" render={(props) => <App auth={auth}/>} />
          <Route path="/potentials" render={(props) => <PotentialDefs auth={auth}/>} />
          <Route path="/reported" render={(props) => <ReportedDefs auth={auth}/>} />
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback/>
          }}/>
        </div>
      </Router>
  );
}