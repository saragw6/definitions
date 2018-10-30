import React from 'react';
import { Route, Router } from 'react-router-dom'; //yarn add
import App from './App';
// import Home from './Home/Home';
import Callback from './Callback';
import PotentialDefs from './PotentialDefs';
import DefineForm from './DefineForm';
import RequestForm from './RequestForm';
import ReportedDefs from './ReportedDefs';
import Glossary from './Glossary';
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
      term = decodeURIComponent(path.substring(7));
    }
    return term;
  }

  function searchHashRedirect(){
    var term = window.location.hash.substring(2);
    console.log(term);
    if (term && window.location.pathname === "/") {
      console.log("redirecting");
      window.location.replace("/search/" + term);
    }
  }

const makeMainRoutes = () => {
  return (
      <Router history={history}>
        <div>
          <Route path="/*" render={(props) => {searchHashRedirect(); return <App auth={auth} term={getTermFromPath(props.match.params[0])}/>;} }/>
          <Route path="/potentialdefs" render={(props) => <PotentialDefs auth={auth}/>} />
          <Route path="/defineform" render={(props) => <DefineForm auth={auth}/>} />
          <Route path="/requestform" render={(props) => <RequestForm auth={auth}/>} />
          <Route path="/reporteddefs" render={(props) => <ReportedDefs auth={auth}/>} />
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
