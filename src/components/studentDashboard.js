import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));



const StudentDashboard = (props) => {

  const [open, setOpen] = React.useState(false);

   const handleClickOpen = () => {
     setOpen(true);
   };

   const handleClose = () => {
     setOpen(false);
   };

   const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


return <div>
<h2>Hello {props.userDetails.Name} Student!!</h2>

<Button variant="outlined" color="secondary" onClick={handleClickOpen}>
    Join the group
   </Button>
   <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
     <DialogTitle id="form-dialog-title">Join Group</DialogTitle>
     <DialogContent>
       <DialogContentText>
        Join your faculty group by acess code provided by faculty
       </DialogContentText>
       <TextField
         autoFocus
         margin="dense"
         id="name"
         label="Acess Code"
         type="text"
         fullWidth
       />
     </DialogContent>
     <DialogActions>
       <Button onClick={handleClose} color="primary">
         Cancel
       </Button>
       <Button onClick={handleClose} color="primary">
         Join
       </Button>

     </DialogActions>
   </Dialog>

   <h3> Courses you are enrolled in : </h3>
   <Card style={{color : 'black ' , textAlign : 'left' ,padding : '30px', border:'10px solid orange'}} className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            S
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Science subject"

        subheader="Faculty Name : Mr rajesh ,      Course Enrolled in : September 14, 2016"
      />
      <CardMedia
        className={classes.media}
        image="public/logo192.png"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          The quiz contain 10 question . For each correct answer , you will be alloted one marks and for wrong answer you will be alloted zero marks i.e no negative marking .
        </Typography>
        <Link to="/dashboard/quiz"  >
         Take Quiz </Link>

      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
          </Typography>
          <Typography paragraph>
         Quiz
          </Typography>
          <Typography paragraph>
          Quiz
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    <Button >  <Link to="/" >
       Login </Link></Button>


</div>
}

export default StudentDashboard;
