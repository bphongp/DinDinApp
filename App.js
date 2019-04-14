import React from 'react';
import { StyleSheet, Text, View, Dime} from 'react-native';
import SplashScreen from './components/SplashScreen2';
import HomeScreen from './components/HomeScreen';
import FlatlistDemo from './components/FlatlistDemo';
import InvitationCard from './components/InvitationCard';
import AddNewEvent from './components/AddNewEvent';
import InvitationDetails from './components/InvitationDetails';
import InvitePeople from './components/InvitePeople';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const rootStack = createStackNavigator(
  {
    Splash: SplashScreen,
    Home: HomeScreen,
    Flatlist: FlatlistDemo,
    InvitationCard: InvitationCard,
    AddNewEvent:AddNewEvent,
    InvitationDetails:InvitationDetails,
    InvitePeople: InvitePeople,
  },
  {
    initialRouteName: 'Splash',
  }
 );

const AppContainer = createAppContainer(rootStack);



export default class App extends React.Component {

  render() {
    return (
      <AppContainer persistenceKey={"NavigationState"} />
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