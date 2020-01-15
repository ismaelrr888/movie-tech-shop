const express = require("express");
const router = express.Router();
const passport = require("passport");

const Cart = require("../../models/Cart");

// @route GET api/carts/:user_id
// @desc Get all products in a cart
// @access Private
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};

    Cart.find({ user: req.user.id })
      .populate("user", ["name"])
      .then(carts => {
        if (!carts) {
          errors.notcarts = "This user haven't yet movies in the cart";
          return res.json(errors);
        }

        res.json(carts);
      })
      .catch(err =>
        res
          .status(400)
          .json({ cart: "This user haven't yet movies in the cart" })
      );
  }
);

// @route POST api/carts
// @desc Add movie to cart
// @access Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const cartMovie = {};
    if (req.body.movies) cartMovie.movies = req.body.movies;
    if (req.body.quantity) cartMovie.quantity = req.body.quantity;

    Cart.findOne({ user: req.user.id }).then(cart => {
      if (cart) {
        cart.movies.unshift(cartMovie);
        cart.save().then(cart => res.json(cart));
      } else {
        new Cart({
          user: req.user.id,
          ...cartMovie
        })
          .save()
          .then(cart => res.json(cart));
      }
    });
  }
);

module.exports = router;
