import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import defaultImage from "../../../img/showcase.jpg";

export default function MovieDialog({
  movie,
  show,
  handleCloseModal,
  isAuthenticated
}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    handleCloseModal();
  };

  useEffect(() => {
    if (show) handleClickOpen();
  }, [show]);

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {movie.title} PRICE: {movie.price}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <img
              width={"100%"}
              style={{ objectFit: "cover", height: "20em" }}
              src={defaultImage}
            />{" "}
            {movie.description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
          <Button
            startIcon={<ShoppingCartIcon />}
            onClick={handleClose}
            color="primary"
            autoFocus
            disabled={!isAuthenticated}
          >
            Add to cart
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
