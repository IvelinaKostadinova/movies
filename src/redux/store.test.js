import { createStore } from 'redux';
import rootReducer from './reducers';
import * as movieActions from './actions/movieActions';

it('Should handle create movie', () => {
  const store = createStore(rootReducer, {});
  const movie = { title: 'A' };

  const action = movieActions.createMovieSuccess(movie);
  store.dispatch(action);

  const createdMovie = store.getState().movies[0];
  expect(createdMovie).toEqual(movie);
});
