import { AsyncStorage } from 'react-native';
import { put, select, takeLatest } from 'redux-saga/effects';
import { purgeStoredState } from 'redux-persist';

import NavigationService from '../../services/NavigationService'
import ReduxPersist from '../../config/reduxPersist'
import * as actions from './actions';

const startupSelector = state => state.startup;

// process STARTUP actions
export function * startupAsync (action) {
  try {
    const userToken = yield AsyncStorage.getItem('userToken');
    yield NavigationService.navigate(userToken ? 'App' : 'Auth');

  } catch (e) {
    yield NavigationService.navigate('Auth');

  } finally {
    yield put(actions.launch())
  }
}

export function* signoutAsync() {
  try {
    yield AsyncStorage.clear();

    yield  NavigationService.navigate('Auth');
  } catch (err) {

  }
}

export default function* startupSagas() {
    yield takeLatest(actions.startup, startupAsync)
    yield takeLatest(actions.signout, signoutAsync)
}

