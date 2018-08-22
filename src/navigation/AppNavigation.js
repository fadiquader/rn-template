import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation'
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
//
import * as Screens from '../screens'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
export const PrimaryNav = createSwitchNavigator({
  LaunchScreen: { screen: Screens.Launch },
  HomeScreen: { screen: Screens.Home }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
});

