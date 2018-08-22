import { createReducer } from 'redux-act';
//
import * as actions from './actions';

const initialState = {
  launched: false,
  isLoggedIn: false,
};

export const reducer = createReducer({
  [actions.launch]: (state, payload) => ({
    ...state,
    launched: true
  }),
  [actions.login]: (state, payload) => ({
    ...state,
    isLoggedIn: true
  })
}, initialState);
