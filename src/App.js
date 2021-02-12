import './App.css';
import React, { useState } from 'react';
import FirstPage from './components/firstPage';
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
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Login from './components/login';
import Quiz from './components/takeQuiz';
import quizDetails from './components/quizArray';

function App() {

  const [userDetails, setUserDetails] = useState({
    Name: "",
    Number: null,
    Email: null,
    Role: "",
    Marks:0
  });

  const [showLogin, setShowLogin] = React.useState(false);

  const [role, setRole] = useState('teacher');
  const [quizQuestion, setQuizQuestion] = useState({questions: []});

const c=0;

  const check= (e) =>{




      setUserDetails({Role : e.loginDetails.Role , Name : e.loginDetails.Name , Email : e.loginDetails.Email , Number : e.loginDetails.Number });





  }

  const handleClickOpen = (roleParam) => {
      setRole(roleParam);
      setShowLogin(true);
  }

  return (
    <div className="App">
    <header className="App-header">
    <Router>
    <Switch>
    <Route path="/dashboard/quiz">
      <Quiz/>
    </Route>
         <Route path="/dashboard">
           <Home userDetails={userDetails} />
         </Route>
         <Route path="/">
         <div>
         <h1>Online Quiz Platform</h1>


                     <Button variant="contained" color="secondary" onClick={() => { handleClickOpen('teacher') }}>
                         Login
                     </Button>


               <Login checkSubmit={(e) => {check(e)}}  userDetails={userDetails}  show={showLogin} handleClose={() => { setShowLogin(false) }} ></Login>
        </div>
         </Route>

       </Switch>
</Router>



      </header>
    </div>
  );
}

export default App;
