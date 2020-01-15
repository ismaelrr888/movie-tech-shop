const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateMovieInput(data) {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : "";
  data.genre = !isEmpty(data.genre) ? data.genre : "";
  data.price = !isEmpty(data.price) ? data.price : "";
  data.description = !isEmpty(data.description) ? data.description : "";

  if (Validator.isEmpty(data.title)) {
    errors.title = "Title field is required";
  }

  if (Validator.isEmpty(data.genre)) {
    errors.genre = "Genre field is required";
  }

  if (Validator.isEmpty(data.genre)) {
    errors.genre = "Genre field is required";
  }

  if (Validator.isEmpty(data.price)) {
    errors.price = "Price field is required";
  }

  if (Validator.isEmpty(data.description)) {
    errors.description = "Description field is required";
  }

  if (!Validator.isNumeric(data.price)) {
    errors.price = "Price must be a number";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
