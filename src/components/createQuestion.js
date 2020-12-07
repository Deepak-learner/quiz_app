import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));



const CreateQuestion = (props) => {
    const classes = useStyles();
    const [question, setQuestion] = React.useState(props.question)

    const handleOption = (e, index) => {
        let quesOptions = question.options;
        quesOptions[index] = e.target.value;
        setQuestion({...question, options: quesOptions });
    }

    return <form className={classes.root} noValidate autoComplete="off">
    <TextField
          value={question.question}
          onChange={(e) => { setQuestion({...question, question: e.target.value }) }}
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Type Question"
          variant="outlined"
        />
    <TextField
          id="standard-multiline-flexible"
          label="Option 1"
          value={question.options[0]}
          onChange={(e) => { handleOption(e, 0)  }}
        />
    <TextField
          id="standard-multiline-flexible"
          label="Option 1"
          value={question.options[1]}
          onChange={(e) => { handleOption(e, 1)  }}
        />
    <TextField
          id="standard-multiline-flexible"
          label="Option 1"
          value={question.options[2]}
          onChange={(e) => { handleOption(e, 2)  }}
        />
    <TextField
          id="standard-multiline-flexible"
          label="Option 1"
          value={question.options[3]}
          onChange={(e) => { handleOption(e, 3)  }}
        />
    <Button variant="contained" color="secondary" onClick={() => { props.update(question) }}>
                        Submit
                    </Button>
  </form>
}

export default CreateQuestion


