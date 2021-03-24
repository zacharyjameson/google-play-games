import React from "react";

export default function Game(props) {
  return (
    <div className="game">
      <h2>{props.App}</h2>
      <div className="game_contentrating">by {props["Content Rating"]}</div>
      <div className="game_price">{props.Price}</div>
      <div className="game_rating">Rating: {props.Rating}</div>
      <div className="game_size">File Size: {props.Size}</div>
    </div>
  );
}
