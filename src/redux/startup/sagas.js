import { AsyncStorage } from 'react-native';
import { put, select, takeLatest } from 'redux-saga/effects';
import NavigationService from '../../services/NavigationService'
import * as actions from './actions';

// exported to make available for tests

// process STARTUP actions
export function * startupAsync () {
  try {
    const userToken = yield AsyncStorage.getItem('userToken');
    console.log('userToken ', userToken);
    yield NavigationService.navigate(userToken ? 'HomeScreen' : 'Auth');
    // this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  } catch (e) {

  }
}

export default function* startupSagas() {
    yield takeLatest(actions.startup, startupAsync)
}

