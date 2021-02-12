import React ,{useState} from 'react';
import quizDetails from './quizArray';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
function Quiz(props) {

const [ques , setQues] = useState(0);
const [showScore , setShowScore]= useState(true);
const [score , setScore] = useState(0);

const [seconds, setSeconds] = React.useState(20);

  React.useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      setShowScore(false);
      setSeconds('BOOOOM!');
    }
  });


const btnClick = (option) =>
{
  if(option == quizDetails.questions[ques].correctAnswer)
  {
    setScore(score+1);
  }

  let next=ques + 1;
  if(next > quizDetails.questions.length - 1)
  {
    setShowScore(false);
  }
  else{

    setQues(next);
}}


  return (
    <div className="App">
   {showScore ? (
     <div>
     <h1> Online Quiz Exam </h1>
     <Grid container spacing={3}>
     <Grid item xs={12} sm={8}>
        <h2> <AccessAlarmIcon style={{ fontSize: 30, color:"primary",marginRight:'5px' }}/>Time left : {seconds}</h2>
       </Grid>
       <Grid item xs={12} sm={4}>
          <h2> Marks : 1</h2>
        </Grid>
      </Grid>

     <div style={{color : 'black ' ,backgroundColor : '#F7DC6F ', textAlign : 'left' ,padding : '30px', border:'10px solid orange'}}>
     <React.Fragment>

      <Container maxWidth="sm">
      Question : {quizDetails.questions[ques].question}??
      Choose the correct option :
      {quizDetails.questions[ques].options.map((options) => (
        <li><Button color='secondary' style={{margin:'10px'}}onClick={() => btnClick(options) }> {options} </Button></li> ))}
        </Container>
    </React.Fragment>
    </div>
    </div>

  ):(<h1>You Scored {score} Marks !</h1>)}

    </div>
  );

}

export default Quiz;
