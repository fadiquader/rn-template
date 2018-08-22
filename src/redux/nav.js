import { persistReducer } from 'redux-persist';
import { PrimaryNav } from '../navigation/AppNavigation'

// const initialNavState = PrimaryNav.router.getStateForAction(firstAction);

export const reducer = (state, action) => {
  const newState = PrimaryNav.router.getStateForAction(action, state);
  return newState || state
};
