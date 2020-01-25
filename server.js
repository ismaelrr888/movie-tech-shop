const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");
const movies = require("./routes/api/movies");
const cart = require("./routes/api/cart");

const app = express();

// Body Parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Add Cors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

// DB Config
const db = require("./config/keys").mongoURI;

// Conect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Conected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require("./config/passport")(passport);

// Use Routes
app.use("/api/users", users);
app.use("/api/movies", movies);
app.use("/api/carts", cart);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server runing on port ${port}`));
