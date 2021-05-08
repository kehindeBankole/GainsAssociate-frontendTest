import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import './memes.css'
export default function Memes({ title, bgColor , value  , image}) {
  const useStyles = makeStyles({
    root: {
      minWidth: 275,
      backgroundColor: '#cb80fc',
     
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
      <CardContent className='memesCardContent'>
           <Typography className={classes.title} variant="h5" gutterBottom>
          {"memes" }
        </Typography>
        <Typography className={classes.value} variant="h3" gutterBottom>
          {"9025"}
        </Typography>
      </CardContent>
    </Card>
  );
}
