import React from "react";
import ReactDOM from "react-dom";
import {createStore} from 'redux';
import App from "./components/App";
import movies from './reducer/index';
import {data as MovieList } from './data';
import "./index.css";



const store = createStore(movies);
// store.dispatch({
//   type: 'ADD_Movie',
//   movies: MovieList
// })
console.log('State', MovieList);
ReactDOM.render(<App store = {store}/>, document.getElementById("root"));
