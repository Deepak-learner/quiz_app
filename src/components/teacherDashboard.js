import React ,{useState} from 'react';
import AddQuiz from './addQuiz';
import DisplayQuestion from './displayQuestion';
import Button from '@material-ui/core/Button';
import StudentData from './studentData';

const TeacherDashboard = (props) => {

let valid=false;
const [showProfile , setShowProfile] = useState(valid);


    return (<div>

        <h1>Hello {props.userDetails.Name} Teacher!!</h1>
        <AddQuiz {...props}></AddQuiz>

        <  Button style={{margin : '20px' }} variant="contained" color="secondary" onClick={()=>{setShowProfile(valid => !valid) }} >
            Show student profiles
        </Button>

        {!showProfile ? (

           <div></div>
         ) : (
         <div>
        <StudentData {...props}/>
    </div>)}
    </div>)
}

export default TeacherDashboard;
