export const  ADD_MOVIES = 'ADD_MOVIES';
export const  ADDTOFAV = 'ADD_FAV';

export  function addmovie(movies) {
  return {
      type: ADD_MOVIES,
      movies
  }
}
export  function addfav(movies) {
  return {
      type: ADDTOFAV,
      movies
  }
}