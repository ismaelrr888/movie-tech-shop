import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import { logoutUser } from "../../store/actions/authActions";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  link: {
    textDecoration: "none",
    color: "inherit",
    fontWeight: 500,
    fontSize: "1.25rem",
    fontFamily: `Roboto, Helvetica, Arial, sans-serif`
  }
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const history = useHistory();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = parameter => {
    setAnchorEl(null);
    switch (parameter) {
      case "logout":
        dispatch(logoutUser(history));
        break;

      default:
        break;
    }
  };

  const { isAuthenticated, user } = useSelector(state => state.auth);

  let menuUser;
  if (isAuthenticated && user) {
    menuUser = (
      <div>
        <IconButton
          aria-label="more"
          aria-controls="long-menu"
          aria-haspopup="true"
          onClick={handleClick}
          color="inherit"
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              width: 200
            }
          }}
        >
          {/* TODO */}
          {/* <MenuItem onClick={handleClose}>My profile</MenuItem>
          <MenuItem onClick={handleClose}>Change password</MenuItem> */}
          <MenuItem onClick={handleClose.bind(null, "logout")}>Logut</MenuItem>
        </Menu>
      </div>
    );
  } else {
    menuUser = (
      <Link to="/login" className={classes.link}>
        Login
      </Link>
    );
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid
              container
              direction="row"
              justify="space-between"
              wrap="nowrap"
              alignItems="center"
              style={{ width: "15%", minWidth: "172px" }}
            >
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
              <Link to="/" className={classes.link}>
                <Typography variant="h6" className={classes.title}>
                  Movies-Shop
                </Typography>
              </Link>
            </Grid>
            <Grid
              container
              direction="row"
              justify="flex-end"
              wrap="nowrap"
              alignItems="center"
              style={{ width: "10%", minWidth: "77px" }}
            >
              {menuUser}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
