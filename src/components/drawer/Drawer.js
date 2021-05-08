import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import PersonIcon from "@material-ui/icons/Person";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import CachedIcon from "@material-ui/icons/Cached";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import { withStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import logo from "../../assets/Logo@1X.png";
import adminimage from "../../assets/userimage.png";
import { NavLink } from "react-router-dom";
import "./drawer.css";
const drawerWidth = 240;

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: 10,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    width: 15,
    height: 15,
    borderRadius: "100%",
  },
}))(Badge);

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    backgroundColor: "white",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
    color: "blue",
  },
  logodesktop: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("lg")]: {
      display: "flex",

    },
    display:'flex',
    justifyContent: "center",
    alignItems: "center",
    padding: "10px 0",
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  menu: {
    justifyContent: "flex-end",
    width: "100%",
  },
  adminName: {
    fontSize: "15px",
    fontWeight: "bold",
    color:"black",
    textAlign:'right',
    textTransform:'capitalize'
  },
  adminRank: {
    fontSize: "12px",
    fontWeight: "300",
    color:'black',
    textAlign:'right'
  },
  adminIcon: {
    width: 40,
    height: 40,
    border: "1px solid blue",
    borderRadius: "100%",
    
  },
  refreshButton: {
    color: "grey",
  },
  sideBarText: {
    fontWeight: "700",
    textTransform: "capitalize",
    fontSize: 14,
  },
  sideBarListIcon: {
    color: "black",
  },
  sideBarListItem: {
    color: "black",
    borderRadius: 10,
    marginTop: 15,
    width: 200
  },
}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar}>
        <div className={classes.logodesktop}>
          <img src={logo} alt="dashboard logo" />
        </div>
      </div>
      <List className={classes.sideBarList}>
        {[
          { name: "Dashboard", icon: <DashboardIcon />, href: "/" },
          { name: "users", icon: <PeopleIcon />, href: "/users" },
          {
            name: "publications",
            icon: <PhotoLibraryIcon />,
            href: "/publications",
          },
          { name: "agents", icon: <PersonIcon />, href: "/agents" },
          {
            name: "category/tags",
            icon: <AlternateEmailIcon />,
            href: "/category",
          },
          {
            name: "maintenance",
            icon: <LibraryBooksIcon />,
            href: "/maintenance",
          },
          {
            name: "activity log",
            icon: <LibraryBooksIcon />,
            href: "/activities",
          },
        ].map((text, index) => (
          <div style={{ padding: "0 15px", width: "100%" }}>
            <NavLink
              to={`${text.href}`}
              className="navLink"
              activeClassName="activeNavLink"
              exact
            >
              <ListItem
                button
                key={index}
                className={classes.sideBarListItem}
              >
                <ListItemIcon className={classes.sideBarListIcon}>
                  {text.icon}
                </ListItemIcon>
                <Typography
                  className={classes.sideBarText}
                  style={{ marginLeft: -15 }}
                >
                  {text.name}
                </Typography>
              </ListItem>
            </NavLink>
          </div>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Toolbar className={classes.menu}>
            <IconButton className={classes.refreshButton}>
              <CachedIcon fontSize="large" />
            </IconButton>

            <IconButton aria-label="cart">
              <StyledBadge variant="dot" color="secondary">
                <NotificationsNoneIcon fontSize="large" />
              </StyledBadge>
            </IconButton>
            <div>
              <Typography
                variant="h6"
                color="error"
                className={classes.adminName}
              >
                alexander
              </Typography>
              <Typography
                variant="h6"
                color="error"
                className={classes.adminRank}
              >
                S.admin
              </Typography>
            </div>
            <IconButton className={classes.IconButton}>
              <img
                src={adminimage}
                alt="admin icon"
                className={classes.adminIcon}
              />
              <ExpandMoreIcon />
            </IconButton>
          </Toolbar>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}
export default ResponsiveDrawer;
