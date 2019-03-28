import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, Image } from 'react-native';
import { Constants, MapView, Location, Permissions } from 'expo';

export default class App extends Component {
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
        headerLeft: (
            <View style={{
                    margin:5,
                    paddingHorizontal:5,
                }}>
                <Image source={require('../assets/sidemenu.png')} />
            </View>
        ),
        headerRight:(
            <View style={{
                margin:5,
                paddingHorizontal:10,
            }}>
                <Image source={require('../assets/search.png')} />
            </View>
        )
    
    };
    
  state = {
    mapRegion: null,
    hasLocationPermissions: false,
    locationResult: null
  };

  componentDidMount() {
    this.getLocationAsync();
  }

  _handleMapRegionChange = mapRegion => {
    console.log(mapRegion);
    this.setState({ mapRegion });
  };

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

  render() {
    return (
        <View style={styles.container}>
        
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
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    marginTop:'75%'
  },
  subText: {
      fontSize: 15,
      color: 'grey',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop:'10%'
  }
});
