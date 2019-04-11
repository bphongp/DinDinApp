import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, Image, TouchableOpacity, TextInput, DatePickerIOS, Picker, Platform, Button,ActivityIndicator } from 'react-native';
import { Constants, MapView, Location, Permissions} from 'expo';

import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyD50J9Y7FH9l2tfwZ_qOJCCjnjpRBaFrR4",
  authDomain: "dindin-46b55.firebaseapp.com",
  databaseURL: "https://dindin-46b55.firebaseio.com",
  projectId: "dindin-46b55",
  storageBucket: "dindin-46b55.appspot.com",
  messagingSenderId: "36010701085", 
};

const EXAMPLES = [
  'Rogers Arena, Vancouver',
  { latitude: 49.28, longitude: -123.12 },
'Palo Alto Caltrain Station (this one will error)',
{ latitude: 0, longitude: 0 },
];

export default class AddNewEvent extends Component {
    constructor(props) {
      super(props)
      this.state = {
          hasLocationPermissions: false,
          mapRegion: { latitude: 37.78825, longitude: -78.4766781, latitudeDelta: 0.0922, longitudeDelta: 0.0421 },
          locationResult: null,
          location: {coords: { latitude: 37.78825, longitude: -78.4766781}},
          text:'',
          hr:'',
          min:'',
          ampm:'', 
          result: '',
          selectedExample: '',
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
    /*addEvent(object) {
      //console.log("Accept entered")
      //console.log(this.state.inviteKey)
      firebase.database().ref('events/').push({
          time: this.state.hr +":"+ this.state.min+" "+ this.state.ampm,
      })
  }*/
    componentDidMount() {
      this._getLocationAsync();
    }
  
    _handleMapRegionChange = mapRegion => {
      this.setState({ mapRegion });
    };
    //added for firebase things
    componentWillMount() {
      if (!firebase.apps.length) {
          firebase.initializeApp(firebaseConfig);
      }
      
    }
    _getLocationAsync = async () => {
      let { status } = await Permissions.askAsync(Permissions.LOCATION);
      if (status !== 'granted') {
        this.setState({
          locationResult: 'Permission to access location was denied',
          location,
        });
      }
   
      let location = await Location.getCurrentPositionAsync({});
      this.setState({ locationResult: JSON.stringify(location), location, });
    };

    _attemptGeocodeAsync = async () => {
      this.setState({ inProgress: true, error: null });
      try {
        let result = await location.geocodeAsync(this.state.text);
        this.setState({ result });
      } catch (e) {
        this.setState({ error: e.message });
      } finally {
        this.setState({ inProgress: false });
      }
    };

    _attemptReverseGeocodeAsync = async () => {
      this.setState({ inProgress: true });
      try {
        let result = await Location.reverseGeocodeAsync(
          this.state.selectedExample
        );
        this.setState({ result });
      } catch (e) {
        this.setState({ error: e });
      } finally {
        this.setState({ inProgress: false });
      }
    };

    /*_maybeRenderResult = () => {
      let { text } = this.state;
      let text = typeof selectedExample === 'string'
        ? selectedExample
        : JSON.stringify(selectedExample);
  
      if (this.state.inProgress) {
        return <ActivityIndicator style={{ marginTop: 10 }} />;
      } else if (this.state.result) {
        return (
          <Text style={styles.resultText}>
            {text} resolves to {JSON.stringify(this.state.result)}
          </Text>
        );
      } else if (this.state.error) {
        return (
          <Text style={styles.errorResultText}>
            {text} cannot resolve: {JSON.stringify(this.state.error)}
          </Text>
        );
      }
    };*/

  
  render() {
    console.log(this.state.ampm);
    console.log(this.state.min);
    console.log(this.state.hr);
    console.log(this.state.text);
    let { selectedExample } = this.state;
    return (
      <View style={{flex:1}}>
        <View style ={{flex:1, alignItems:'center'}}>
        <Text style = {styles.subText}>What time is dinner?</Text>
        <View style ={{flexDirection:"row", height:"15%", alignItems:'center'}}>        
          <Picker
            selectedValue={this.state.hr}
            onValueChange={hr => this.setState({ hr})}
            style={styles.picker}
            mode="dropdown">
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="3" />
            <Picker.Item label="4" value="4" />
            <Picker.Item label="5" value="5" />
            <Picker.Item label="6" value="6" />
            <Picker.Item label="7" value="7" />
            <Picker.Item label="8" value="8" />
            <Picker.Item label="9" value="9" />
            <Picker.Item label="10" value="10" />
            <Picker.Item label="11" value="11" />
            <Picker.Item label="12" value="12" />
          </Picker>
          <Picker
            selectedValue={this.state.min}
            onValueChange={min => this.setState({min})}
            style={styles.picker}
            mode="dropdown">
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="3" />
            <Picker.Item label="4" value="4" />
            <Picker.Item label="5" value="5" />
            <Picker.Item label="6" value="6" />
            <Picker.Item label="7" value="7" />
            <Picker.Item label="8" value="8" />
            <Picker.Item label="9" value="9" />
            <Picker.Item label="10" value="10" />
            <Picker.Item label="11" value="11" />
            <Picker.Item label="12" value="12" />
            <Picker.Item label="13" value="13" />
            <Picker.Item label="14" value="14" />
            <Picker.Item label="15" value="15" />
            <Picker.Item label="16" value="16" />
            <Picker.Item label="17" value="17" />
            <Picker.Item label="18" value="18" />
            <Picker.Item label="19" value="19" />
            <Picker.Item label="20" value="20" />
            <Picker.Item label="21" value="21" />
            <Picker.Item label="22" value="22" />
            <Picker.Item label="23" value="23" />
            <Picker.Item label="24" value="24" />
            <Picker.Item label="25" value="25" />
            <Picker.Item label="26" value="26" />
            <Picker.Item label="17" value="27" />
            <Picker.Item label="28" value="28" />
            <Picker.Item label="29" value="29" />
            <Picker.Item label="30" value="30" />
            <Picker.Item label="31" value="31" />
            <Picker.Item label="32" value="32" />
            <Picker.Item label="33" value="33" />
            <Picker.Item label="34" value="34" />
            <Picker.Item label="35" value="35" />
            <Picker.Item label="36" value="36" />
            <Picker.Item label="37" value="37" />
            <Picker.Item label="38" value="38" />
            <Picker.Item label="39" value="39" />
            <Picker.Item label="40" value="40" />
            <Picker.Item label="41" value="41" />
            <Picker.Item label="42" value="42" />
            <Picker.Item label="43" value="43" />
            <Picker.Item label="44" value="44" />
            <Picker.Item label="45" value="45" />
            <Picker.Item label="46" value="46" />
            <Picker.Item label="47" value="47" />
            <Picker.Item label="48" value="48" />
            <Picker.Item label="49" value="49" />
            <Picker.Item label="50" value="50" />
            <Picker.Item label="51" value="51" />
            <Picker.Item label="52" value="52" />
            <Picker.Item label="53" value="53" />
            <Picker.Item label="54" value="54" />
            <Picker.Item label="55" value="55" />
            <Picker.Item label="56" value="56" />
            <Picker.Item label="57" value="57" />
            <Picker.Item label="58" value="58" />
            <Picker.Item label="59" value="59" />
          </Picker>
          <Picker
            selectedValue={this.state.ampm}
            onValueChange={ampm => this.setState({ ampm})}
            style={styles.picker}
            mode="dropdown">
            <Picker.Item label="AM" value="AM" />
            <Picker.Item label="PM" value="PM" />
          </Picker>
          </View>

          <View style ={styles.card}>
                <TextInput style ={{alignSelf:'center'}}
                    placeholder="Choose a location"
                    onChangeText={(text) => this.setState({text})}
                />

            </View>
            </View>
            <View style={{flex:1}}>
            <MapView
                style={{ alignSelf: 'stretch', flex:1 }}
                region={{ latitude: this.state.location.coords.latitude, longitude: this.state.location.coords.longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }}
                onRegionChange={this._handleMapRegionChange}
            >
            <MapView.Marker
                coordinate={this.state.location.coords}
                title="My Location"
            />
            </MapView>
            <View style = {{flex:0.2}}>

              <TouchableOpacity style = {{flex: 1}} onPress={() => {this.props.navigation.navigate('InvitePeople')}}>
                  <Image style= {{width: '100%', height: '100%'}} source={require('../assets/invitebtn.png')} />
              </TouchableOpacity>
            </View>
            </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    overflow: 'hidden',
    backgroundColor: 'white',
    marginTop: '20%',
    flex:.75,
    width:'90%',
    alignItems:'center',
    justifyContent: 'center',
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
      flex:.25,
      fontSize: 15,
      color: 'grey',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      paddingVertical: '5%'
  },
  picker:{
      flex:1,
      alignContent:'center'
    },
    headerText: {
      fontSize: 18,
      fontWeight: '600',
      marginBottom: 5,
    },
    headerContainer: {
      borderBottomWidth: 1,
      borderBottomColor: '#eee',
      marginHorizontal: 20,
      marginBottom: 0,
      marginTop: 20,
    },
    examplesContainer: {
      paddingTop: 15,
      paddingBottom: 5,
      paddingHorizontal: 20,
    },
    resultText: {
      padding: 20,
    },
    actionContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 10,
    },
    errorResultText: {
      padding: 20,
      color: 'red',
    },
    button: {
      ...Platform.select({
        android: {
          marginBottom: 10,
        },
      }),
    },
});
