import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

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

  const { isAuthenticated, user } = useSelector(state => state.auth);

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
            <Link to="/login" className={classes.link}>
              <AccountCircleIcon /> Login
            </Link>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
