import React from "react";

export default function Game(props) {
  return (
    <div className="game">
      <h2>{props.App}</h2>
      <div className="game_contentrating">Content Rating: {props["Content Rating"]}</div>
      <div className="game_price">Price: {props.Type}, ${props.Price}</div>
      <div className="game_rating">Rating: {props.Rating}</div>
      <div className="game_size">File Size: {props.Size}</div>
    </div>
  );
}
