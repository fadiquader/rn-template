import React from 'react';
import {connect} from 'react-redux';
import { BackHandler, Platform } from 'react-native'
import {
  createReactNavigationReduxMiddleware,
  reduxifyNavigator,
} from 'react-navigation-redux-helpers';
//
import { PrimaryNav } from './AppNavigation';


export const navigationMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
);

const mapState = state => ({
  state: state.nav,
});
export default connect(mapState)(reduxifyNavigator(PrimaryNav, 'root'));


