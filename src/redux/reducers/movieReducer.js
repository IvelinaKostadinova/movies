import * as types from '../actions/actionTypes';

export default function movieReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_MOVIE_SUCCESS:
      return [...state, { ...action.movie }];
    case types.UPDATE_MOVIE_SUCCESS:
      return state.map((movie) => {
        return movie.id === action.movie.id ? action.movie : movie;
      });
    case types.DELETE_MOVIE_SUCCESS:
      return state.filter((movie) => {
        return movie.id !== action.movie.id;
      });
    case types.LOAD_MOVIES_SUCCESS:
      return action.movies;
    case types.LOAD_MOVIE_SUCCESS:
      return state.map((movie) => {
        return movie.id === action.movie.id ? action.movie : movie;
      });
    default:
      return state;
  }
}
