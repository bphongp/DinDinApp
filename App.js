import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from './components/SplashScreen';
import HomeScreen from './components/HomeScreen';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const rootStack = createStackNavigator(
  {
  Splash: SplashScreen,
  Home: HomeScreen,
  },
  {
  initialRouteName: 'Splash',
  }
 );

const AppContainer = createAppContainer(rootStack)

export default class App extends React.Component {
  render() {
    return (
        <AppContainer/>
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
