import * as movieActions from './movieActions';
import * as types from './actionTypes';
import { movies } from '../../tools/mockData';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async Actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  describe('Load Movies Thunk', () => {
    it('should create LOAD_MOVIES_SUCCESS when loading movies', () => {
      fetchMock.mock('*', {
        body: { data: movies },
        headers: { 'content-type': 'application/json' },
      });

      const expectedAction = [{ type: types.LOAD_MOVIES_SUCCESS, movies }];

      const store = mockStore({ movies: [] });
      return store
        .dispatch(movieActions.loadMovies('title', 'release_date'))
        .then(() => {
          expect(store.getActions()).toEqual(expectedAction);
        });
    });

    it('should alert an error when loading movies', () => {
      fetchMock.mock('*', () => {
        throw new Error('message');
      });

      global.alert = jest.fn();

      const store = mockStore({ movies: [] });
      return store
        .dispatch(movieActions.loadMovies('title', 'release_date'))
        .catch(() => {
          expect(global.alert.mock.calls.length).toBe(1);
        });
    });
  });

  describe('Load Movie Thunk', () => {
    it('should create LOAD_MOVIE_SUCCESS when loading a movie', () => {
      fetchMock.mock('*', {
        body: movies[0],
        headers: { 'content-type': 'application/json' },
      });

      const expectedAction = [
        { type: types.LOAD_MOVIE_SUCCESS, movie: movies[0] },
      ];

      const store = mockStore({ movies: [] });
      return store.dispatch(movieActions.loadMovie(1)).then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
    });

    it('should alert an error when loading a movie', () => {
      fetchMock.mock('*', () => {
        throw new Error('message');
      });

      global.alert = jest.fn();

      const store = mockStore({ movies: [] });
      return store.dispatch(movieActions.loadMovie(1)).catch(() => {
        expect(global.alert.mock.calls.length).toBe(1);
      });
    });
  });

  describe('Update Movie Thunk', () => {
    it('should create UPDATE_MOVIE_SUCCESS when upadating a movie', () => {
      fetchMock.mock('*', {
        body: movies[0],
        headers: { 'content-type': 'application/json' },
      });

      const expectedAction = [
        { type: types.UPDATE_MOVIE_SUCCESS, movie: movies[0] },
      ];

      const store = mockStore({ movies: [] });
      return store.dispatch(movieActions.saveMovie(movies[0])).then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
    });

    it('should alert an error when updating a movie', () => {
      fetchMock.mock('*', () => {
        throw new Error('message');
      });

      global.alert = jest.fn();

      const store = mockStore({ movies: [] });
      return store.dispatch(movieActions.saveMovie(movies[0])).catch(() => {
        expect(global.alert.mock.calls.length).toBe(1);
      });
    });
  });

  describe('Create Movie Thunk', () => {
    it('should create CREADE_MOVIE_SUCCESS when creating a movie', () => {
      const movie = movies[0];
      delete movie.id;

      fetchMock.mock('*', {
        body: movie,
        headers: { 'content-type': 'application/json' },
      });

      const expectedAction = [
        { type: types.CREATE_MOVIE_SUCCESS, movie: movie },
      ];

      const store = mockStore({ movies: [] });
      return store.dispatch(movieActions.saveMovie(movie)).then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
    });

    it('should alert an error when creating a movie', () => {
      const movie = movies[0];
      delete movie.id;

      fetchMock.mock('*', () => {
        throw new Error('message');
      });

      global.alert = jest.fn();

      const store = mockStore({ movies: [] });
      return store.dispatch(movieActions.saveMovie(movie)).catch(() => {
        expect(global.alert.mock.calls.length).toBe(1);
      });
    });
  });

  describe('Delete Movie Thunk', () => {
    it('should create DELETE_MOVIE_SUCCESS when deleting a movie', () => {
      fetchMock.mock('*', {
        body: movies[0],
        headers: { 'content-type': 'application/json' },
      });

      const expectedAction = [
        { type: types.DELETE_MOVIE_SUCCESS, movie: movies[0] },
      ];

      const store = mockStore({ movies: [] });
      return store.dispatch(movieActions.deleteMovie(movies[0])).then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
    });

    it('should alert an error when deleting a movie', () => {
      fetchMock.mock('*', () => {
        throw new Error('message');
      });

      global.alert = jest.fn();

      const store = mockStore({ movies: [] });
      return store.dispatch(movieActions.deleteMovie(movies[0])).catch(() => {
        expect(global.alert.mock.calls.length).toBe(1);
      });
    });
  });
});

describe('Create Actions', () => {
  it('should create a CREATE_MOVIE_SUCCESS action', () => {
    const movie = movies[0];
    const expectedAction = {
      type: types.CREATE_MOVIE_SUCCESS,
      movie,
    };

    const action = movieActions.createMovieSuccess(movie);

    expect(action).toEqual(expectedAction);
  });

  it('should create a LOAD_MOVIES_SUCCESS action', () => {
    const expectedAction = {
      type: types.LOAD_MOVIES_SUCCESS,
      movies,
    };

    const action = movieActions.loadMoviesSuccess(movies);

    expect(action).toEqual(expectedAction);
  });

  it('should create a LOAD_MOVIE_SUCCESS action', () => {
    const movie = movies[0];
    const expectedAction = {
      type: types.LOAD_MOVIE_SUCCESS,
      movie,
    };

    const action = movieActions.loadMovieSuccess(movie);

    expect(action).toEqual(expectedAction);
  });

  it('should create a UPDATE_MOVIE_SUCCESS action', () => {
    const movie = movies[0];
    const expectedAction = {
      type: types.UPDATE_MOVIE_SUCCESS,
      movie,
    };

    const action = movieActions.updateMovieSuccess(movie);

    expect(action).toEqual(expectedAction);
  });

  it('should create a DELETE_MOVIE_SUCCESS action', () => {
    const movie = movies[0];
    const expectedAction = {
      type: types.DELETE_MOVIE_SUCCESS,
      movie,
    };

    const action = movieActions.deleteMovieSuccess(movie);

    expect(action).toEqual(expectedAction);
  });
});
