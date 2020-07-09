import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import reduxImmutableInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE || compose; // add support for Redux dev tools

  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk, reduxImmutableInvariant()))
  );
}
