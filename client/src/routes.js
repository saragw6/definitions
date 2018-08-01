import React from 'react';
import { Route, Router } from 'react-router-dom'; //yarn add
import App from './App';
// import Home from './Home/Home';
import Callback from './Callback';
import PotentialDefs from './PotentialDefs';
import ReportedDefs from './ReportedDefs';
import About from './About';
import Auth from './Auth';
import history from './history';

const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

  function getTermFromPath(path){
    var term = "";
    if (path.startsWith("search")) {
      term = path.substring(7);
    }
    return term;
  }

export const makeMainRoutes = () => {
  return (
      <Router history={history}>
        <div>
          <Route path="/*" render={(props) => <App auth={auth} term={getTermFromPath(props.match.params[0])}/>} />
          <Route path="/potentialdefs" render={(props) => <PotentialDefs auth={auth}/>} />
          <Route path="/reporteddefs" render={(props) => <ReportedDefs auth={auth}/>} />
          <Route path="/about" render={(props) => <About auth={auth}/>} />
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback/>
          }}/>
        </div>
      </Router>
  );
}
