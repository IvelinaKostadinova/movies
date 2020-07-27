import movieReducer from './movieReducer';
import * as actions from '../actions/movieActions';

describe('Movie Reducer', () => {
  it('should add movie when passed CREATE_MOVIE_SUCCESS', () => {
    const initalState = [{ title: 'A' }, { title: 'B' }];

    const newMovie = {
      title: 'C',
    };

    const action = actions.createMovieSuccess(newMovie);

    const newState = movieReducer(initalState, action);

    expect(newState.length).toEqual(3);
    expect(newState[0].title).toEqual('A');
    expect(newState[1].title).toEqual('B');
    expect(newState[2].title).toEqual('C');
  });

  it('should update movie when passed UPDATE_MOVIE_SUCCESS', () => {
    const initalState = [
      { id: 1, title: 'A' },
      { id: 2, title: 'B' },
    ];

    const newMovie = {
      id: 1,
      title: 'C',
    };

    const action = actions.updateMovieSuccess(newMovie);

    const newState = movieReducer(initalState, action);

    expect(newState.length).toEqual(2);
    expect(newState[0].title).toEqual('C');
    expect(newState[1].title).toEqual('B');
  });

  it('should delete movie when passed DELETE_MOVIE_SUCCESS', () => {
    const initalState = [
      { id: 1, title: 'A' },
      { id: 2, title: 'B' },
    ];

    const newMovie = {
      id: 1,
      title: 'A',
    };

    const action = actions.deleteMovieSuccess(newMovie);

    const newState = movieReducer(initalState, action);

    expect(newState.length).toEqual(1);
    expect(newState[0].title).toEqual('B');
  });

  it('should load movies when passed LOAD_MOVIES_SUCCESS', () => {
    const state = [
      { id: 1, title: 'A' },
      { id: 2, title: 'B' },
    ];

    const action = actions.loadMoviesSuccess(state);

    const newState = movieReducer([], action);

    expect(newState.length).toEqual(2);
    expect(newState[0].title).toEqual('A');
    expect(newState[1].title).toEqual('B');
  });

  it('should load movie when passed LOAD_MOVIE_SUCCESS', () => {
    const state = [{ id: 1, title: 'A' }];

    const initalState = [
      { id: 1, title: 'A' },
      { id: 2, title: 'B' },
    ];

    const action = actions.loadMovieSuccess(state);

    const newState = movieReducer(initalState, action);

    expect(newState.length).toEqual(2);
    expect(newState[0].title).toEqual('A');
  });
});
