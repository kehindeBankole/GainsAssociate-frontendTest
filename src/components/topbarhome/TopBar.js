import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontWeight: "600",
    color: "black",
  },
  subtitle: {
    color: "black",
    fontWeight: "400",
  },
  appBar: {
    backgroundColor: "transparent",
    boxShadow: "none",
  },
}));

export default function TopBar({title , subtitle}) {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <div>
            <Typography variant="h5" className={classes.title}>
             {title}
            </Typography>
            <Typography variant="subtitle2" className={classes.subtitle}>
              {subtitle}
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
