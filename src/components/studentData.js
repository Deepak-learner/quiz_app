import React ,{useState} from 'react';
import AddQuiz from './addQuiz';
import DisplayQuestion from './displayQuestion';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});






const StudentData = (props) => {

   const classes = useStyles();




  function createData(name, calories, fat, carbs) {


    return { name, calories, fat, carbs};
  }

   const rows = [
     createData( props.userDetails.Name, props.userDetails.Number , props.userDetails.Email, props.userDetails.Marks),

   ];

   if(props.userDetails.Role=='Student')
   {
     return(
     <div>
     {console.log(props.userDetails.Role)}
           <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Registration Number</TableCell>
                <TableCell align="right">Email Address</TableCell>
                <TableCell align="right">Marks</TableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>

                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

                </div>
  );}
  return (<div style={{backgroundColor : 'blue'}}>
       No student added !
  </div>)

}





export default StudentData;
