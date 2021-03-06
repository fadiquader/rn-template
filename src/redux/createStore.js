import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
//
import Rehydration from '../services/Rehydration';
import ReduxPersist from '../config/reduxPersist';
import { navigationMiddleware } from '../navigation/ReduxNavigation'

// creates the store
export default (rootReducer, rootSaga,) => {
  /* ------------- Redux Configuration ------------- */

  const middleware = [];
  const enhancers = [];
    middleware.push(navigationMiddleware);

  /* ------------- Saga Middleware ------------- */

  const sagaMiddleware = createSagaMiddleware({});
  middleware.push(sagaMiddleware);

  /* ------------- Assemble Middleware ------------- */

  enhancers.push(applyMiddleware(...middleware));

  const store = createStore(rootReducer, compose(...enhancers));

  // configure persistStore and check reducer version number
  if (ReduxPersist.active) {
    Rehydration.updateReducers(store)
  }

  // kick off root saga
  let sagasManager = sagaMiddleware.run(rootSaga);

  return {
    store,
    sagasManager,
    sagaMiddleware
  }
}
