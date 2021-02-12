import TeacherDashboard from './teacherDashboard'
import StudentDashboard from './studentDashboard'
import Login from './login';
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


const Home = (props) => {






    if (props.userDetails.Role == 'Student') {
        return <div>


          <StudentDashboard  {...props}></StudentDashboard>


        </div>
    }
    else{
      return <div>


             <TeacherDashboard {...props}></TeacherDashboard>

      </div>
    }

}

export default Home;
