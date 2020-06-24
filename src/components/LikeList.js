import React, { Component } from "react";
import LikedItem from "./LikedItem";
import "./Lists.css";

export default class LikeList extends Component {
  render() {
    const { likedMovies, clickBlockBtn, clickLikeBtn } = this.props;
    return (
      <div className="likeMovie">
        {likedMovies.map((movie) => (
          <LikedItem
            key={movie.id}
            movie={movie}
            clickBlockBtn={clickBlockBtn}
            clickLikeBtn={clickLikeBtn}
          />
        ))}
      </div>
    );
  }
}
