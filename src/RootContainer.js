import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
//
import ReduxNavigation from './navigation/ReduxNavigation'
import { PrimaryNav } from './navigation/AppNavigation'
import * as startupActions from './redux/startup/actions'
import ReduxPersist from './config/reduxPersist'
import NavigationService from './services/NavigationService';

// Styles
import styles from './RootContainerStyles'

class RootContainer extends Component {
  componentDidMount () {
    if (!ReduxPersist.active) {
      this.props.startup()
    }
  }
  render () {
    return (
      <View style={styles.applicationView}>
        <StatusBar barStyle='light-content' />
        <PrimaryNav
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </View>
    )
  }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatch = (dispatch) => bindActionCreators({
    startup: startupActions.startup
}, dispatch);

export default connect(null, mapDispatch)(RootContainer)
