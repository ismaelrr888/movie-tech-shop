import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import defaultImage from "../../img/showcase.jpg";

import { useSelector, useDispatch } from "react-redux";
import { getMovies } from "../../store/actions/movieActions";
import SkeletonMovie from "./SkeletonMovie";

const useStyles = makeStyles({
  root: {
    maxWidth: 270,
    marginTop: 20,
    marginRight: 5,
    marginLeft: 5,
    marginBottom: 5
  },
  media: {
    height: 140
  },
  skeleton: {
    marginTop: 20
  }
});

export default function Movie() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [data, setData] = useState({
    search: "",
    sortBy: "asc",
    resPerPage: 10
  });

  const { movies, loading } = useSelector(state => state.movies);

  useEffect(() => {
    dispatch(getMovies(data));
  }, []);

  let movieContent;
  if (movies === null || loading) {
    movieContent = <SkeletonMovie />;
  } else {
    movieContent = movies.map((movie, index) => (
      <Card key={index} className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={defaultImage}
            title={movie.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {movie.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {movie.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    ));
  }

  return (
    <Grid
      container
      direction="row"
      justify="space-evenly"
      alignItems="flex-start"
    >
      {movieContent}
    </Grid>
  );
}
