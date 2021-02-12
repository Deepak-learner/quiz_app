import React, {useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';


const DisplayQuestion = (props) => {
  const[question , setquestion] = useState(props.ques);


  if(props.user.userDetails.Role == 'Teacher')
  {
  return (<div style={{backgroundColor : 'blue', textAlign : 'left' ,padding : '30px'}}>


            <h2>Your Added Questions</h2>
            {question.map((question) => {

             return <div >
             <p>{question.question}</p>
             {question.options.map((options) => {return <p> <li> {options} </li> </p>})}
             <hr/>
             </div>
           })}
           </div>);
    }


    return (<div style={{backgroundColor : 'blue'}}>
    
    </div>)

}

export default DisplayQuestion ;
