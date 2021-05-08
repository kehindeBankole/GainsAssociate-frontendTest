import React from 'react';
import { Bar } from 'react-chartjs-2';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
const data = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      label: 'users',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: '#26c6da',
    },
    {
      label: 'memes',
      data: [2, 3, 20, 5, 1, 4],
      backgroundColor: '#816ad6',
    },

  ],
};

const options = {
  scales: {
    yAxes: [
      {
        stacked: true,
        ticks: {
          beginAtZero: true,
        },
      },
    ],
    xAxes: [
      {
        stacked: true,
      },
    ],
  },
};
const useStyles = makeStyles((theme) => ({
    header:{
        display:'flex',
        width:'100%',
        justifyContent:'space-between'
    },
    chartTitle:{
        fontSize:14,
        fontWeight:'600',
        color:'#313131',
        display:'none',
        [theme.breakpoints.up("sm")]: {
          display:'block'
        }
    },
    buttonGroup:{
        backgroundColor:'#d9a4fc'
    }
  }));
function ColumChart () {
    const classes = useStyles()

    const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };


  return(
    <>
    <div className={classes.header}>
     <Typography className={classes.chartTitle}>Annual statistics of new users and published media content </Typography>
     <div>
     <Grid container direction="row" alignItems="center">
      <Grid item xs={12}>
        <ButtonGroup variant="contained" className={classes.buttonGroup} ref={anchorRef} aria-label="split button">
          <Button onClick={handleClick}>{'Year'}</Button>
          <Button
            size="small"
            aria-controls={open ? 'split-button-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-label="select merge strategy"
            aria-haspopup="menu"
            onClick={handleToggle}
          >
              <Typography>2021</Typography>
            <ArrowDropDownIcon />
          </Button>
        </ButtonGroup>
      </Grid>
    </Grid>
     </div>

    </div>
    <Bar data={data} options={options}/>
  </>
  )
}


export default ColumChart;