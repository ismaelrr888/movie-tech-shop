import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import { useSelector, useDispatch } from "react-redux";
import { getMovies, getAllMovies } from "../../store/actions/movieActions";
import SkeletonMovie from "./SkeletonMovie";
import Divider from "@material-ui/core/Divider";

import MovieItems from "./MovieItems";
import Paginate from "../common/paginate/Paginate";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 20
  }
}));

export default function Movie() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [data, setData] = useState({
    search: "",
    sortBy: "asc",
    resPerPage: 10,
    page: 1
  });
  const onChangeData = data => {
    const { resPerPage, search, page } = data;
    setData(state => ({
      ...state,
      resPerPage: resPerPage,
      search: search,
      page: page
    }));
  };

  const myCallBack = type => {
    switch (type) {
      case "PREVIOWS":
        onChangeData({
          page: data.page - 1,
          search: data.search,
          resPerPage: data.resPerPage
        });
        return data;
      case "NEXT":
        onChangeData({
          page: data.page + 1,
          search: data.search,
          resPerPage: data.resPerPage
        });
        return data;
      case "VIEW_LESS":
        onChangeData({
          page: data.page,
          search: data.search,
          resPerPage: data.resPerPage - 10
        });
        return data;
      case "VIEW_MORE":
        onChangeData({
          page: data.page,
          search: data.search,
          resPerPage: data.resPerPage + 10
        });
        return data;

      default:
        return data;
    }
  };

  const { movies, loading, total } = useSelector(state => state.movies);
  const { isAuthenticated } = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(getMovies(data));
  }, [data, dispatch]);

  useEffect(() => {
    dispatch(getAllMovies());
  }, [dispatch]);

  let movieContent;
  if (movies === null || loading) {
    movieContent = <SkeletonMovie />;
  } else {
    movieContent = movies.map((movie, index) => (
      <MovieItems key={index} movie={movie} isAuthenticated={isAuthenticated} />
    ));
  }

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justify="flex-end"
        alignItems="flex-start"
      >
        <Paginate data={data} total={total} handleClick={myCallBack} />
      </Grid>
      <Grid
        container
        direction="row"
        justify="flex-end"
        alignItems="flex-start"
      ></Grid>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="flex-start"
      >
        {movieContent}
      </Grid>
      <Divider orientation="horizontal" flexItem />
      <Grid
        container
        direction="row"
        justify="flex-end"
        alignItems="flex-start"
      >
        <Paginate data={data} total={total} handleClick={myCallBack} />
      </Grid>
    </div>
  );
}
