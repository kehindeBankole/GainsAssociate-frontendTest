import React from "react";
import Divider from "@material-ui/core/Divider";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TopBar from "../components/topbarhome/TopBar";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router";
import User from "../components/dashboardcard/user/User";
import Memes from "../components/dashboardcard/memes/Memes";
import Ads from "../components/dashboardcard/ads/Ads";
import ColumChart from "../components/chart/ColumnChart";
import LineChart from "../components/chart/LineChart";
import { Card, CardContent, Typography } from "@material-ui/core";
import AnalyticsCard from "../components/analyticscard/AnalyticsCard";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import SaveIcon from "@material-ui/icons/Save";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,

  content: {
    width: "100%",
    // padding: theme.spacing(1),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  container: {
    marginTop: 10,
  },
  analyticsButtons: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px 0",
  },
  internalDataButton: {
    backgroundColor: "#816ad6",
    color: "white",
    fontWeight: "500",
    fontSize: 13,
    textTransform: "lowercase",
    width: "150px",
  },
  tagline:{
    display:'flex'
  },
  googleAnalyticsText:{
    marginLeft:30,
    marginTop:10,
    fontWeight:'700',
    textTransform:'capitalize',
    fontSize:15
  },
  daysButton:{
    backgroundColor:'transparent',
    fontWeight:'700',
    fontSize:12,
    textTransform:'capitalize',
    display:'none',
        [theme.breakpoints.up("sm")]: {
          display:'flex'
        }
  }
}));

function Dashboard() {
  let history = useHistory();
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <main className={classes.content}>
        <TopBar title="Dashboard" subtitle={history.location.pathname} />
        <Divider />

        <Container className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={4}>
              <User />
            </Grid>
            <Grid item xs={12} lg={4}>
              <Memes />
            </Grid>
            <Grid item xs={12} lg={4}>
              <Ads />
            </Grid>
          </Grid>
        </Container>
        <Container className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={8}>
              <Card>
                <CardContent>
                  <ColumChart />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Card style={{ height: "100%" }}>
                <CardContent>
                  <LineChart />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
        <Container className={classes.container}>
          <div className={classes.analyticsButtons}>
            <div className={classes.tagline}>
              <Button
                variant="contained"
                className={classes.internalDataButton}
              >
                internal data
              </Button>
              <Typography className={classes.googleAnalyticsText}>google analytics</Typography>
            </div>
            <Button
              variant="contained"
              className={classes.daysButton}
              endIcon={<ExpandMoreIcon />}
            >
              last 7 days
            </Button>
          </div>
        </Container>
        <Container className={classes.container}>
          <Grid container spacing={2}>
            {[
              { title: "new users", value: 55466 },
              { title: "total active hours", value: 456451 + " " + "hr" },
              { title: "uploaded memes", value: 2262542 },
              { title: "reports", value: 8 },
              { title: "deleted account", value: 56 },
              { title: "published ad", value: 8 },
            ].map((data, index) => (
              <>
                <Grid item xs={12} lg={4} key={index}>
                  <AnalyticsCard title={data.title} value={data.value} />
                </Grid>
              </>
            ))}
          </Grid>
        </Container>
      </main>
    </div>
  );
}

export default Dashboard;
