import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CreateQuestion from './createQuestion';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

const AddQuiz = () => {
  const classes = useStyles();
  const [quizDetails, setQuizDetails] = useState({
      questions: [],
      startTime: null,
      duration: 0,
      name: ""
  });

  const [currentQuestion, setCurrentQuestion] = useState(null);

  const handleChange = (event, newValue) => {
      if(newValue == quizDetails.questions.length) {
          setQuizDetails({...quizDetails, questions: [...quizDetails.questions, {
              question: "",
              options: [],
              correctAnswer: "",
              marks: 0
          }] });
          
      }
      setCurrentQuestion(newValue);
    
  };

  const updateQuestion = (question, i) => {
    let quizDetailsQuestions = quizDetails.questions;
    quizDetailsQuestions[i] = question;
    setQuizDetails({...quizDetails, questions: quizDetailsQuestions });
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={currentQuestion}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          {
              quizDetails.questions.map((question, i) => {
                  return <Tab label={"Question " + (i+1)} />
              })
          }

          <Tab label="Add Question" />
        </Tabs>
      </AppBar>
      {currentQuestion && <TabPanel value={currentQuestion} index={currentQuestion}>
                <CreateQuestion update={(questionParam) => {  updateQuestion(questionParam, currentQuestion) }}  question={quizDetails.questions[currentQuestion]}></CreateQuestion>
      </TabPanel>}
    </div>
  );
}

export default AddQuiz;
