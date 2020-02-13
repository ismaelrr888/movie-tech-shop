import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Skeleton from "@material-ui/lab/Skeleton";

const useStyles = makeStyles({
  root: {
    maxWidth: 270,
    marginTop: 20,
    marginRight: 5,
    marginLeft: 5,
    marginBottom: 5
  },
  skeleton: {
    marginTop: 20
  }
});

export default function SkeletonMovie() {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      justify="space-evenly"
      alignItems="flex-start"
    >
      <div className={classes.root}>
        <Skeleton variant="rect" width={210} height={90} />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          className={classes.skeleton}
        >
          <Skeleton variant="rect" width={50} height={30} />
          <Skeleton variant="rect" width={50} height={30} />
        </Grid>
      </div>
      <div className={classes.root}>
        <Skeleton variant="rect" width={210} height={90} />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          className={classes.skeleton}
        >
          <Skeleton variant="rect" width={50} height={30} />
          <Skeleton variant="rect" width={50} height={30} />
        </Grid>
      </div>
      <div className={classes.root}>
        <Skeleton variant="rect" width={210} height={90} />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          className={classes.skeleton}
        >
          <Skeleton variant="rect" width={50} height={30} />
          <Skeleton variant="rect" width={50} height={30} />
        </Grid>
      </div>
      <div className={classes.root}>
        <Skeleton variant="rect" width={210} height={90} />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          className={classes.skeleton}
        >
          <Skeleton variant="rect" width={50} height={30} />
          <Skeleton variant="rect" width={50} height={30} />
        </Grid>
      </div>
      <div className={classes.root}>
        <Skeleton variant="rect" width={210} height={90} />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          className={classes.skeleton}
        >
          <Skeleton variant="rect" width={50} height={30} />
          <Skeleton variant="rect" width={50} height={30} />
        </Grid>
      </div>
      <div className={classes.root}>
        <Skeleton variant="rect" width={210} height={90} />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          className={classes.skeleton}
        >
          <Skeleton variant="rect" width={50} height={30} />
          <Skeleton variant="rect" width={50} height={30} />
        </Grid>
      </div>
    </Grid>
  );
}
