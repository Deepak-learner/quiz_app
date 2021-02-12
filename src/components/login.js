import React ,{useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Home from './home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function Login(props) {

  const [value, setValue] = React.useState('Student');
let { userDetails } = props;
 const handleChange = (event) => {
   setValue(event.target.value);
   setLoginDetails({...loginDetails ,Role : value})

 };

 const handleData = (event) => {

   setArrayLogin([... {loginDetails:{
     Name: "",
     Number: null,
     Email: 0,
     Role: ""
   }}])



 };

 const [loginDetails, setLoginDetails] = useState(
     props.userDetails
 );





 const [arrayLogin, setArrayLogin] = useState([]);




  return (<Dialog open={props.show} onClose={props.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Login</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter your details
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="email"
            value={loginDetails.Name}
            onChange={(e) =>{setLoginDetails({...loginDetails,Name:e.target.value})}}

            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="ID number"
            type="number"
            value={loginDetails.Number}
            onChange={(e) =>{setLoginDetails({...loginDetails,Number:e.target.value})}}

            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            value={loginDetails.Email}
            onChange={(e) =>{setLoginDetails({...loginDetails,Email:e.target.value})}}

            fullWidth
          />
          <FormLabel component="legend">Role</FormLabel>
          <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
      <FormControlLabel value="Teacher" control={<Radio />} label="Student" />
      <FormControlLabel value="Student" control={<Radio />} label="Teacher" />

    </RadioGroup>

        </DialogContent>

        <DialogActions>
          <Button onClick={props.handleClose} color="primary">
            Cancel
          </Button>

      <Button >  <Link to="/dashBoard"  onClick={() => {props.checkSubmit({loginDetails})} }>
         Login </Link></Button>

        </DialogActions>
      </Dialog>
  );
}
