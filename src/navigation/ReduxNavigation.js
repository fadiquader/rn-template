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


// class ReduxNavigation extends React.Component {
//   componentWillMount () {
//     if (Platform.OS === 'ios') return;
//     BackHandler.addEventListener('hardwareBackPress', () => {
//       const { dispatch, nav } = this.props;
//       console.log(this.props.nav)
//       // change to whatever is your first screen, otherwise unpredictable results may occur
//       // if (nav.routes.length && nav.routes.length === 1 && (nav.routes[0].routeName === 'LaunchScreen')) {
//       //   return false
//       // }
//       // if (shouldCloseApp(nav)) return false
//       // dispatch({ type: 'Navigation/BACK' });
//       return true
//     })
//   }
//
//   componentWillUnmount () {
//     if (Platform.OS === 'ios') return;
//     // BackHandler.removeEventListener('hardwareBackPress')
//   }
//
//   render() {
//     const { state } = this.props;
//     return <AppWithNavigationState />
//   }
// }

// export default connect(mapState)(ReduxNavigation);
