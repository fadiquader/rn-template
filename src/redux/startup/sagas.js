import { put, select, takeLatest } from 'redux-saga/effects'
import * as actions from './Actions';

// exported to make available for tests

// process STARTUP actions
export function * startupAsync (action) {

}

export default function* startupSagas() {
    yield takeLatest(actions.startup, startupAsync)
}

