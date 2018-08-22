import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation'
//
import * as Screens from '../screens'

import styles from './Styles/NavigationStyles'

const Auth = createStackNavigator({
  SignInScreen: { screen: Screens.SignIn },
  SignUpScreen: { screen: Screens.SignUp },
}, {
  initialRouteName: 'SignInScreen',
});

// Manifest of possible screens
export const PrimaryNav = createSwitchNavigator({
  LaunchScreen: { screen: Screens.Launch },
  HomeScreen: { screen: Screens.Home },
  Auth
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
});

