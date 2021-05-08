import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import './ads.css'
export default function Ads({ title, bgColor , value  , image}) {
  const useStyles = makeStyles({
    root: {
      minWidth: 275,
      backgroundColor: '#26c6da',
     
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
      <CardContent className='adsCardContent'>
           <Typography className={classes.title} variant="h5" gutterBottom>
          {"ads posted" }
        </Typography>
        <Typography className={classes.value} variant="h3" gutterBottom>
          {"9025"}
        </Typography>
      </CardContent>
    </Card>
  );
}
