import React from "react";

const Square = ({ value }) => {
  const handleClick = () => {
    console.log("clicked!");
  };

  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
};

const Board = () => (
  <React.Fragment>
    <div className="board-row">
      <Square value="1" />
      <Square value="2" />
      <Square value="3" />
    </div>
    <div className="board-row">
      <Square value="4" />
      <Square value="5" />
      <Square value="6" />
    </div>
    <div className="board-row">
      <Square value="7" />
      <Square value="8" />
      <Square value="9" />
    </div>
  </React.Fragment>
);

export default Board;
