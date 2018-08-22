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
              Loading...
            </Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}
