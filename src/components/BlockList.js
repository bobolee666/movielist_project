import React, { Component } from "react";
import BlockedItem from "./BlockedItem";
import "./Lists.css";

export default class BlockList extends Component {
  render() {
    const { blockedMovies, clickBlockDelete, clickFav } = this.props;
    return (
      <div className="blockedMovie">
        {blockedMovies.map((movie) => (
          <BlockedItem
            key={movie.id}
            movie={movie}
            clickBlockDelete={clickBlockDelete}
            clickFav={clickFav}
          />
        ))}
      </div>
    );
  }
}
