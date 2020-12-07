import TeacherDashboard from './teacherDashboard'
import StudentDashboard from './studentDashboard'
import Login from './login';
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


const Home = (props) => {
    let { userDetails } = props;
    const [showLogin, setShowLogin] = React.useState(false);
    const [role, setRole] = useState('student')

    const handleClickOpen = (roleParam) => {
        setRole(roleParam);
        setShowLogin(true);
    }

    if (!userDetails) {
        return <div>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Button variant="contained" color="secondary" onClick={() => { handleClickOpen('teacher') }}>
                        Login as Teacher
                    </Button>
                </Grid>

                <Grid item xs={6}>
                    <Button variant="contained" color="secondary" onClick={() => { handleClickOpen('student') }}>
                        Login as Student
                    </Button>
                </Grid>
            </Grid>

            <Login role={role} show={showLogin} handleClose={() => { setShowLogin(false) }} ></Login>
        </div>
    }
    return <div>
        {
            userDetails.role == "student" && <StudentDashboard  {...props}></StudentDashboard>
        }
        {
            userDetails.role == "teacher" && <TeacherDashboard {...props}></TeacherDashboard>
        }
    </div>
}

export default Home;