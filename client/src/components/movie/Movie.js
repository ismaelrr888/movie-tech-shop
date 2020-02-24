import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import { useSelector, useDispatch } from "react-redux";
import { getMovies, getAllMovies } from "../../store/actions/movieActions";
import SkeletonMovie from "./SkeletonMovie";
import Divider from "@material-ui/core/Divider";

import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import PostAddIcon from "@material-ui/icons/PostAdd";

import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

import MovieItems from "./MovieItems";

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

  const { movies, loading, total } = useSelector(state => state.movies);
  const { isAuthenticated, user } = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(getMovies(data));
    dispatch(getAllMovies());
  }, [data]);

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
        <ButtonGroup
          color="secondary"
          aria-label="outlined secondary button group"
        >
          <Button
            disabled={data.page <= 1}
            onClick={() =>
              onChangeData({
                page: data.page - 1,
                search: data.search,
                resPerPage: data.resPerPage
              })
            }
          >
            <SkipPreviousIcon />
          </Button>
          <Button
            disabled={data.page >= total / data.resPerPage}
            onClick={() =>
              onChangeData({
                page: data.page + 1,
                search: data.search,
                resPerPage: data.resPerPage
              })
            }
          >
            <SkipNextIcon />
          </Button>
        </ButtonGroup>
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
        <ButtonGroup
          style={{ marginTop: "10px" }}
          color="secondary"
          aria-label="outlined secondary button group"
        >
          <Button
            disabled={data.page <= 1}
            onClick={() =>
              onChangeData({
                page: data.page - 1,
                search: data.search,
                resPerPage: data.resPerPage
              })
            }
          >
            <SkipPreviousIcon />
          </Button>
          <Button
            disabled={data.page >= total / data.resPerPage}
            onClick={() =>
              onChangeData({
                page: data.page + 1,
                search: data.search,
                resPerPage: data.resPerPage
              })
            }
          >
            <SkipNextIcon />
          </Button>{" "}
          <Button
            disabled={data.page >= total / data.resPerPage}
            color="primary"
            onClick={() =>
              onChangeData({
                page: data.page,
                search: data.search,
                resPerPage: data.resPerPage + 10
              })
            }
          >
            <PostAddIcon /> View more
          </Button>
        </ButtonGroup>
      </Grid>
    </div>
  );
}
