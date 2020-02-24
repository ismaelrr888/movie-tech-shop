import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import defaultImage from "../../img/showcase.jpg";

import { truncate } from "../../utils/Util";

import MovieDialog from "../common/dialogs/MovieDialog";

const useStyles = makeStyles(theme => ({
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
  InputQuantity: {
    backgroundColor: "rgba(0, 0, 0, 0.12)",
    color: "rgba(0, 0, 0, .8)",
    padding: "5px 50px 7px;"
  }
}));

export default function MovieItems({ movie, isAuthenticated }) {
  const classes = useStyles();

  const [quantity, setQuantity] = useState(0);

  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea onClick={handleShow}>
          <CardMedia
            className={classes.media}
            image={defaultImage}
            title={movie.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {truncate(movie.title, 15)}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {truncate(movie.description, 80)}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            onClick={setQuantity.bind(null, quantity - 1)}
            variant="contained"
            color="secondary"
            size="small"
            disabled={quantity === 0 ? true : false}
          >
            <RemoveIcon />
          </Button>
          <Box className={classes.InputQuantity} boxShadow={1}>
            {quantity !== 0 ? quantity : "_"}
          </Box>
          <Button
            onClick={setQuantity.bind(null, quantity + 1)}
            variant="contained"
            color="primary"
            size="small"
          >
            <AddIcon />
          </Button>
        </CardActions>
        <CardActions>
          <Button
            style={{ width: "100%" }}
            variant="contained"
            color="secondary"
            size="large"
            className={classes.button}
            startIcon={<ShoppingCartIcon />}
            disabled={!isAuthenticated}
          >
            Add
          </Button>
        </CardActions>
      </Card>

      <MovieDialog
        movie={movie}
        show={show}
        handleCloseModal={handleClose}
        isAuthenticated={isAuthenticated}
      />
    </div>
  );
}
