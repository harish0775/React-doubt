export const  ADD_MOVIES = 'ADD_MOVIES';
export  function addmovie(movies) {
  return {
      type: ADD_MOVIES,
      movies
  }
}
