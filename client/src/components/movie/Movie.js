import React, { useState, useEffect } from "react";
// import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import { useSelector, useDispatch } from "react-redux";
import { getMovies } from "../../store/actions/movieActions";
import SkeletonMovie from "./SkeletonMovie";

import MovieItems from "./MovieItems";

// const useStyles = makeStyles(theme => ({
//   root: {
//     maxWidth: 270,
//     marginTop: 20,
//     marginRight: 5,
//     marginLeft: 5,
//     marginBottom: 5
//   },
//   media: {
//     height: 140
//   },
//   skeleton: {
//     marginTop: 20
//   }
// }));

export default function Movie() {
  // const classes = useStyles();
  const dispatch = useDispatch();

  const [data, setData] = useState({
    search: "",
    sortBy: "asc",
    resPerPage: 10
  });

  const { movies, loading } = useSelector(state => state.movies);
  const { isAuthenticated, user } = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(getMovies(data));
  }, []);

  let movieContent;
  if (movies === null || loading) {
    movieContent = <SkeletonMovie />;
  } else {
    movieContent = movies.map((movie, index) => (
      <MovieItems key={index} movie={movie} isAuthenticated={isAuthenticated} />
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
