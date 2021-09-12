import React, { Component } from "react";
import { addfav } from "../actions/index";
class MovieCard extends Component {
  handlefavourite = () => {
    const { movie } = this.props;
    this.props.dispatch(addfav(movie));
  };
  handleUnfavourite = () =>{}
  
  render() {
    const { movie, isFavoutrite } = this.props;

    return (
      <div className="movie-card">
        <div className="left">
          <img src={movie.Poster} alt="movie-pic" />
        </div>
        <div className="right">
          <div className="title">
            {movie.Title} ({movie.Year})
          </div>
          <div className="plot">{movie.Plot}</div>
          <div className="footer">
            <div className="rating">{movie.imdbRating}</div>
            {isFavoutrite ? (
              <button
                className="unfavourite-btn"
                onClick={this.unfavourite}
              >
                Unfavourite
              </button>
            ) : (
              <button className="favourite-btn" onClick={this.handlefavourite}>
                Favourite
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
