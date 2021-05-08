import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import TopBar from "../components/topbarhome/TopBar";
import Divider from "@material-ui/core/Divider";
import { useHistory } from "react-router";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,

  content: {
    width: "100%",
  },
}));

function Users() {
  let history = useHistory()
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <main className={classes.content}>
        <TopBar title="Users" subtitle={history.location.pathname} />
        <Divider/>
      </main>
    </div>
  );
}

export default Users;
