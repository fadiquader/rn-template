import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation'
//
import * as Screens from '../screens'

import styles from './Styles/NavigationStyles'

const AuthStack = createStackNavigator({
  SignInScreen: { screen: Screens.SignIn },
  SignUpScreen: { screen: Screens.SignUp },
}, {
  initialRouteName: 'SignInScreen',
});

const AppStack = createStackNavigator({
  HomeScreen: { screen: Screens.Home },
  TrialScreen: { screen: Screens.Trial },
}, {
  initialRouteName: 'HomeScreen',
});


// Manifest of possible screens
export const PrimaryNav = createSwitchNavigator({
  LaunchScreen: { screen: Screens.Launch },
  App: AppStack,
  Auth: AuthStack,
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
});

