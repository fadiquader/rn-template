import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
//
import ReduxPersist from '../config/reduxPersist'
import rootSaga from './rootSaga';
import configureStore from './createStore'

export const reducers = combineReducers({
  startup: require('./startup/reducer').reducer,
});

export default () => {
    let finalReducers = reducers;
    // If rehydration is on use persistReducer otherwise default combineReducers
    if (ReduxPersist.active) {
        const persistConfig = ReduxPersist.storeConfig;
        finalReducers = persistReducer(persistConfig, reducers);
    }

    let { store, sagasManager, sagaMiddleware } = configureStore(finalReducers, rootSaga);

    if (module.hot) {
        module.hot.accept(() => {
            const nextRootReducer = require('./').reducers;
            store.replaceReducer(nextRootReducer);
            const newYieldedSagas = require('./rootSaga').default;
            sagasManager.cancel();
            sagasManager.done.then(() => {
                sagasManager = sagaMiddleware.run(newYieldedSagas)
            })
        })
    }

    return store
}
