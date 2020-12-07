import React from 'react';
import AddQuiz from './addQuiz';


const TeacherDashboard = (props) => {
    return <div>
        Hello {props.name} Teacher!!
        <AddQuiz></AddQuiz>
    </div>
}

export default TeacherDashboard;