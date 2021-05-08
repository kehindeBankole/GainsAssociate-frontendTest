import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import './user.css'
export default function User({ title, bgColor , value  , image}) {
  const useStyles = makeStyles({
    root: {
      minWidth: 275,
      backgroundColor: '#fc725a',
     
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)",
    },
    title: {
    //   fontSize: 14,
      color: "white",
      textTransform:'capitalize'
    },
    value: {
     fontWeight:'600',
     color:'white'
    },
  });
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent className='userCardContent'>
           <Typography className={classes.title} variant="h5" gutterBottom>
          {"users" }
        </Typography>
        <Typography className={classes.value} variant="h3" gutterBottom>
          {"3025"}
        </Typography>
      </CardContent>
    </Card>
  );
}
