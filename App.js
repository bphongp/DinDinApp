import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from './components/SplashScreen';
import HomeScreen from './components/HomeScreen';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SplashScreen/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
