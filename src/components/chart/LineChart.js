import React from "react";
import { Line } from "react-chartjs-2";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
const data = {
  labels: ["1", "2", "3", "4", "5", "6"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgba(255, 99, 132, 0.2)",
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};
const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
  },
  chartTitle: {
    fontSize: 12,
    fontWeight: "600",
    color: "#313131",
    marginTop:10,
    display:'none',
        [theme.breakpoints.up("sm")]: {
          display:'block'
        }
  },
  buttonGroup: {
    backgroundColor: "#d9a4fc",
  },
  mainChart:{
    marginTop:50
  }
}));
function LineChart() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.header}>
        <Typography className={classes.chartTitle}>
          User activity per hour
        </Typography>
        <div>
          <Grid container direction="row" alignItems="center">
            <Grid item xs={12}>
              <ButtonGroup
                variant="contained"
                className={classes.buttonGroup}
                aria-label="split button"
              >
                <Button>{"free"}</Button>
                <Button
                  size="small"
                  aria-label="select merge strategy"
                  aria-haspopup="menu"
                >
                  <Typography>today</Typography>
                  <ArrowDropDownIcon />
                </Button>
              </ButtonGroup>
            </Grid>
          </Grid>
        </div>
      </div>
      <div className={classes.mainChart}>
        <Line data={data} options={options} />
      </div>
    </>
  );
}

export default LineChart;
