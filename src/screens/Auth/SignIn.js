import React from 'react';
import PropTypes from 'prop-types';
import { Button, StyleSheet, Text, View, AsyncStorage } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

class SignInScreen extends React.Component {

  _signInAsync = async () => {
    try {
      await AsyncStorage.setItem('userToken', 'fadi');
      this.props.navigation.navigate('HomeScreen');
    } catch (err) {
      console.log('err ', err)
    }
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Screen A
        </Text>
        <Text style={styles.instructions}>
          This is great
        </Text>
        <Button
          onPress={this._signInAsync}
          title="Log in"
        />
      </View>
    );
  }
}

SignInScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

SignInScreen.navigationOptions = {
  title: 'Log In',
};

export default SignInScreen;
