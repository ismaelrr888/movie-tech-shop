import React from "react";

import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

export default function Paginate({ data, total, handleClick }) {
  return (
    <ButtonGroup
      style={{ marginTop: "10px" }}
      color="secondary"
      aria-label="outlined secondary button group"
    >
      <Button disabled={data.page <= 1} onClick={() => handleClick("PREVIOWS")}>
        <SkipPreviousIcon />
      </Button>
      <Button
        disabled={data.page >= total / data.resPerPage}
        onClick={() => handleClick("NEXT")}
      >
        <SkipNextIcon />
      </Button>{" "}
      <Button
        disabled={data.resPerPage <= 10}
        onClick={() => handleClick("VIEW_LESS")}
      >
        <RemoveIcon />
      </Button>
      <Button
        disabled={data.page >= total / data.resPerPage}
        onClick={() => handleClick("VIEW_MORE")}
      >
        <AddIcon />
      </Button>
    </ButtonGroup>
  );
}
