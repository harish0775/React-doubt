import { ADD_MOVIES } from '../actions';

const IntitalState = {
  list : [],
  favourite : []
}
export default function movies(state = IntitalState, action) {
  // fetch movies and save in store, for now we are getting it from a file
  // later we will get it from an API
  if (action.type === ADD_MOVIES) {
    // movies coming from action obj, explain we can add any props to action obj
    return {
        ...state,
        list: action.movies,
        favourite : action.movies
    } // returning a new array not changing in state
  }


  // if no action type matches
  return state;
}
