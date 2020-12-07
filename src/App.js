import './App.css';
import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/home';

function App() {

  const [userDetails, setUserDetails] = useState({name: "Puneet", role: "teacher"});



  return (
    <div className="App">
      <header className="App-header">
        <React.Fragment>
          <CssBaseline />
          <Container>
            <Router>
                <Switch>
                  <Route path="/teacher/:id">
                    <div></div>
                  </Route>
                  <Route path="/student/:id">
                  <div></div>
                  </Route>
                  <Route path="/">
                    <Home  userDetails={userDetails} />
                  </Route>
                </Switch>
            </Router>
          </Container>
        </React.Fragment>
      </header>
    </div>
  );
}

export default App;
