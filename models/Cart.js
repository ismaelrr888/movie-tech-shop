const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CartSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  movies: [
    {
      movie: {
        type: Schema.Types.ObjectId,
        ref: "movies"
      },
      quantity: {
        type: Number,
        default: 1
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  },
  active: {
    type: Boolean,
    default: false
  }
});

module.exports = Cart = mongoose.model("carts", CartSchema);
