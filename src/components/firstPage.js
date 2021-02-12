
import Login from './login';
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const FirstPage=(props)=>{

  const [showLogin, setShowLogin] = React.useState(false);

  const [role, setRole] = useState('Teacher');
  let { userDetails } = props;
const c=0;

  const update= (e) =>{

     console.log(e);

  }

  const handleClickOpen = (roleParam) => {
      setRole(roleParam);
      setShowLogin(true);
  }
  return (
    <div>
    Online Quiz Platform

            <Grid>
                <Button variant="contained" color="secondary" onClick={() => { handleClickOpen('teacher') }}>
                    Login
                </Button>

            </Grid>
                        <Login update={(e) => {update(e)}}  userDetails={props.userDetails}  show={showLogin} handleClose={() => { setShowLogin(false) }} ></Login>
   </div>

  )
}

export default FirstPage ;
