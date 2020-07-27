import * as types from './actionTypes';
import * as movieApi from '../../api/movieApi';

export function loadMoviesSuccess(movies) {
  return { type: types.LOAD_MOVIES_SUCCESS, movies };
}

export function loadMovieSuccess(movie) {
  return { type: types.LOAD_MOVIE_SUCCESS, movie };
}

export function createMovieSuccess(movie) {
  return { type: types.CREATE_MOVIE_SUCCESS, movie };
}

export function updateMovieSuccess(movie) {
  return { type: types.UPDATE_MOVIE_SUCCESS, movie };
}

export function deleteMovieSuccess(movie) {
  return { type: types.DELETE_MOVIE_SUCCESS, movie };
}

export function loadMovies(sortBy, filterBy, searchBy) {
  return function (dispatch) {
    return movieApi
      .getMovies(sortBy, filterBy, searchBy)
      .then((response) => {
        dispatch(loadMoviesSuccess(response.data));
      })
      .catch((error) => {
        alert('Loading movies failed'.concat(error));
      });
  };
}

export function loadMovie(id) {
  return function (dispatch) {
    return movieApi
      .getMovie(id)
      .then((response) => {
        dispatch(loadMovieSuccess(response));
      })
      .catch((error) => {
        alert('Loading movie failed'.concat(error));
      });
  };
}

export function saveMovie(movie) {
  return function (dispatch) {
    return movieApi
      .saveMovie(movie)
      .then((savedMovie) => {
        movie.id
          ? dispatch(updateMovieSuccess(savedMovie))
          : dispatch(createMovieSuccess(savedMovie));
      })
      .catch((error) => {
        alert('Saving movie failed'.concat(error));
      });
  };
}

export function deleteMovie(movie) {
  return function (dispatch) {
    return movieApi
      .deleteMovie(movie.id)
      .then((deletedMovie) => {
        dispatch(deleteMovieSuccess(deletedMovie));
      })
      .catch((error) => {
        alert('Deleting movie failed'.concat(error));
      });
  };
}
