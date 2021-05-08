import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Users from "./screens/Users";
import Dashboard from "./screens/Dashboard";
import Drawer from "./components/drawer/Drawer";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Publications from "./screens/Publications";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,

  content: {
    width: "100%",
    marginTop:15,
    [theme.breakpoints.up("sm")]: {
      marginTop: 10,
    }
  },
  container: {
    marginTop: 10,
   
  },
}));

function App() {
  const classes = useStyles();
  return (
    // <Router>
    <div className={classes.root}>
      <Router>
        <Drawer />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
            <Route path="/" component={Dashboard} exact />
            <Route path="/users" component={Users} exact />
            <Route path="/publications" component={Publications} exact />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
