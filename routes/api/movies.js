const express = require("express");
const router = express.Router();
const passport = require("passport");

const validateMovieInput = require("../../validation/movie");

const Movie = require("../../models/Movie");

// @route GET api/movies/all
// @desc Get all movies
// @access Public
router.get("/all", (req, res) => {
  const errors = {};

  Movie.find()
    .then(movies => {
      if (!movies) {
        errors.nomovies = "No movies found";
        return res.status(400).json(errors);
      }

      res.json(movies);
    })
    .catch(err => res.status(404).json({ movie: "No movies not found" }));
});

// @route POST api/movies/add
// @desc Add a new movie
// @access Private
router.post(
  "/add",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateMovieInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newMovie = new Movie({
      title: req.body.title,
      genre: req.body.genre.split(","),
      price: req.body.price,
      description: req.body.description
    });

    newMovie
      .save()
      .then(user => res.json(user))
      .catch(err => console.log(err));
  }
);

// @route POST api/movies/search
// @desc Search movies
// @access Public
router.get("/searchby", (req, res) => {
  const errors = {};
  const match = {};
  const sort = {};

  const resPerPage = +req.query.resPerPage || 10; // results per page
  const page = req.query.page || 1; // Page

  if (req.query.search) {
    match.title = { $regex: ".*" + req.query.search.toLowerCase() + ".*" };
  }

  if (req.query.sortBy) {
    sort.price = req.query.sortBy === "desc" ? -1 : 1;
  }

  Movie.find(match)
    .sort(sort)
    .skip(resPerPage * page - resPerPage)
    .limit(resPerPage)
    .then(movies => {
      if (!movies) {
        errors = `Not movies found for record ${req.query.search}`;
        return res.status(400).json(errors);
      }

      res.json(movies);
    })
    .catch(err => console.log(err));
});

module.exports = router;
