import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { ScrollView, Text, Image, View, ActivityIndicator } from 'react-native';
//
import ReduxPersist from '../../config/reduxPersist'
import * as startupActions from '../../redux/startup/actions'

// Styles
import styles from './Styles'

class Launch extends Component {
  componentDidMount() {
    const { startup, startupAction } = this.props;
    if(startup.launched || !ReduxPersist.active) {
      startupAction();
    }
  }
  render () {
    return (
      <View style={styles.mainContainer}>
        <ActivityIndicator />
      </View>
    )
  }
}


const mapState = ({ startup }) => ({
  startup
})
// wraps dispatch to create nicer functions to call within our component
const mapDispatch = (dispatch) => bindActionCreators({
  startupAction: startupActions.startup
}, dispatch);

export default connect(mapState, mapDispatch)(Launch);
