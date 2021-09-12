import React, { Component } from "react";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { data as MovieList } from "../data";
import {addmovie} from "../actions";
class App extends Component {
  componentDidMount() {
    const { store } = this.props;
    console.log("OUT_RETURN", store.getState());

    store.subscribe(() => {
      console.log("In_RETURN", store.getState());
      this.forceUpdate();
    });
    store.dispatch(addmovie(MovieList));
  }

  render() {
    const {list} = this.props.store.getState();
    console.log(`App_store`, list);

    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>

          <div id="list">
            {list.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
