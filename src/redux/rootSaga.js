import { all, fork } from 'redux-saga/effects';
//
import startupSagas from './startup/sagas';

export default function* rootSaga() {
    yield all([
        startupSagas()
    ])
}
