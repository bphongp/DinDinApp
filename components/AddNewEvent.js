import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, Image, TouchableOpacity, TextInput, DatePickerIOS } from 'react-native';
import { Constants, MapView, Location, Permissions } from 'expo';
//import { TimePicker, WheelPicker } from 'react-native-wheel-picker-android'

import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyD50J9Y7FH9l2tfwZ_qOJCCjnjpRBaFrR4",
  authDomain: "dindin-46b55.firebaseapp.com",
  databaseURL: "https://dindin-46b55.firebaseio.com",
  projectId: "dindin-46b55",
  storageBucket: "dindin-46b55.appspot.com",
  messagingSenderId: "36010701085"
};
export default class AddNewEvent extends Component {
    constructor(props) {
      super(props)
      this.state = {
          mapRegion: null,
          hasLocationPermissions: false,
          locationResult: null,
          text:'',
          chosenDate: new Date()
      }
    };
    setDate(newDate) {
      this.setState({chosenDate: newDate})
    }
    static navigationOptions = {
        title:"DinDin",
        headerTitleStyle:{
            fontSize: 20,
            fontWeight: undefined,
            alignSelf: 'center',
            flexGrow:1,
            textAlign:'center',
        },
        headerStyle: {
            paddingVertical:15,
        },
        headerRight:(
            <View style={{
                margin:5,
                paddingHorizontal:10,
            }}>
            </View>
        )
    };
    componentDidMount() {
      this.getLocationAsync();
    }
  
    _handleMapRegionChange = mapRegion => {
      console.log(mapRegion);
      this.setState({ mapRegion });
    };
    //added for firebase things
    componentWillMount() {
      if (!firebase.apps.length) {
          firebase.initializeApp(firebaseConfig);
      }
      
    }
    async getLocationAsync (){
     let { status } = await Permissions.askAsync(Permissions.LOCATION);
     if (status !== 'granted') {
       this.setState({
         locationResult: 'Permission to access location was denied',
       });
     } else {
       this.setState({ hasLocationPermissions: true });
     }
  
     let location = await Location.getCurrentPositionAsync({});
     this.setState({ locationResult: JSON.stringify(location) });
     
     // Center the map on the location we just fetched.
      this.setState({mapRegion: { latitude: location.coords.latitude, longitude: location.coords.longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }});
    }
/*            <MapView
                style={{ alignSelf: 'stretch', height: 400 }}              
                initialRegion={{
                latitude: 38.0293059,
                longitude: -78.4766781,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            />  
            */
/*            
{
            this.state.locationResult === null ?
            <Text>Finding your current location...</Text> :
            this.state.hasLocationPermissions === false ?
                <Text>Location permissions are not granted.</Text> :
                this.state.mapRegion === null ?
                <Text>Map region doesn't exist.</Text> :
                <MapView
                style={{ alignSelf: 'stretch', height: 400 }}
                region={this.state.mapRegion}
                onRegionChange={this._handleMapRegionChange}
                />
            }
            */
           onTimeSelected = date => {}

  render() {
    return (
      <View style={{flex:1}}>
        <Text style = {styles.subText}>What time is dinner?</Text>
            <View style ={styles.card}>
                <TextInput style ={{alignSelf:'center'}}
                    placeholder="Choose a location"
                    onChangeText={(text) => this.setState({text})}
                    />
                <Text style={{padding: 10, fontSize: 30}}>
                    {this.state.text.split(' ')}
                </Text>
            </View>
            <MapView
                style={{ alignSelf: 'stretch', height: 300 }}              
                initialRegion={{
                latitude: 38.0293059,
                longitude: -78.4766781,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            />  
            <View style = {{flex: .25}}>

              <TouchableOpacity style = {{flex: 1}} onPress={() => {this.props.navigation.navigate('InvitePeople')}}>
                  <Image style= {{width: '100%', height: '100%'}} source={require('../assets/invitebtn.png')} />
              </TouchableOpacity>
            </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    overflow: 'hidden',
    backgroundColor: 'white',
    margin: 15,
    height: '14%',

    borderWidth: 1,
    borderColor: 'lightgrey',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:'75%'
  },
  subText: {
      fontSize: 15,
      color: 'grey',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      paddingVertical: '5%'
  }
});
