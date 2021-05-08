import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import progress from '../../assets/progress.svg'
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    height:200,
    textAlign:'center'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 18,
    textTransform:'capitalize',
    color:"#828282",
    fontWeight:'500'
  },
  value: {
    fontSize: 25,
    textTransform:'capitalize',
   fontWeight:'700',
   color:"#816ad6"
  },
  pos: {
    marginBottom: 12,
  },
});

export default function AnalyticsCard({title ,value}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         {title}
        </Typography>
        <Typography className={classes.value} >
          {value}
        </Typography>
        <div>
            <img src={progress}/>
        </div>
      </CardContent>
    </Card>
  );
}
