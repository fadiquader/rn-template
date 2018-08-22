import React, { Component } from 'react'
import { ScrollView, Text, Button, View } from 'react-native'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//
import { signout } from '../../redux/startup/actions';

class Trial extends Component {
  render () {
    return (
      <View>
        <Text>Trial</Text>
        <Button title="Signout" onPress={this.props.signout}/>

      </View>
    )
  }
}

const mapState = ({}) => ({});
const mapDispatch = dispatch => {
  return bindActionCreators({
    signout
  }, dispatch)
};

export default connect(mapState, mapDispatch)(Trial);
