import React, { Component } from 'react'
import { ScrollView, Text, Image, View, Button } from 'react-native'


export default class Home extends Component {
  render () {
    const { navigation } = this.props;
    return (
      <View>
        <Text>Home</Text>
        <Button title="trial" onPress={() => navigation.navigate('TrialScreen')}/>
      </View>
    )
  }
}
