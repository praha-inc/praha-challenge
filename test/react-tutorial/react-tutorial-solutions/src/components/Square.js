import React from "react";

const Square = props => {
  return (
    <button
      data-e2e={props.id}
      className={props.highlightWinSquares}
      onClick={props.updateStateOnClick}
    >
      {props.value}
    </button>
  );
};

export default Square;
