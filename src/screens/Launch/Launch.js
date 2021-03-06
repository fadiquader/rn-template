import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'

// Styles
import styles from './Styles'

export default class Launch extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          <View style={styles.section} >
            <Text style={styles.sectionText}>
              This probably isn't what your app is going to look like. Unless your designer handed you this screen and, in that case, congrats! You're ready to ship. For everyone else, this is where you'll see a live preview of your fully functioning app using Ignite.
            </Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}
