import React from 'react';
import { ActivityIndicator, Text, Button, Platform, StyleSheet, View, TextInput } from 'react-native';
import { Permissions, Location, MapView } from 'expo';

export default class GeocodingScreen extends React.Component {
  static navigationOptions = {
    title: 'Geocoding',
  };

  constructor(props) {
    super(props)
    this.state = {
    mapRegion: { latitude: 37.78825, longitude: -78.4766781, latitudeDelta: 0.0922, longitudeDelta: 0.0421 },
    selectedExample: '',
    result: {coords: { latitude: 37.78825, longitude: -78.4766781}},
    inProgress: false,
    location: null,

    
    }
  };

  componentDidMount() {
    Permissions.askAsync(Permissions.LOCATION);
  }
  _handleMapRegionChange = mapRegion => {
    this.setState({ mapRegion });
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Select a location</Text>
        </View>


                <TextInput style ={{alignSelf:'center'}}
                    placeholder="Choose a location"
                    onChangeText={(selectedExample) => this.setState({selectedExample})}
                    onEndEditing={this._attemptGeocodeAsync}
                    //onBlur = {() => this._attemptGeocodeAsync}
                />
        <View style={styles.separator} />
        {this._maybeRenderResult()}
        <View style={{flex:1}}>
            <MapView
                style={{ alignSelf: 'stretch', flex:1 }}
                region={{ latitude: this.state.result.coords.latitude, longitude: this.state.result.coords.longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }}
                onRegionChange={this._handleMapRegionChange}
            >
            <MapView.Marker
                coordinate={this.state.result.coords}
                title="My Location"
            />
            </MapView>
            </View>
      </View>
    );
  }

  _attemptReverseGeocodeAsync = async () => {
    this.setState({ inProgress: true });
    try {
      let result = await Location.reverseGeocodeAsync(
        this.state.selectedExample
      );
    } catch (e) {
      this.setState({ error: e });
    } finally {
      this.setState({ inProgress: false });
    }
  };

  _attemptGeocodeAsync = async () => {
    this.setState({ inProgress: true, error: null });
    try {
      let result = await Location.geocodeAsync(this.state.selectedExample);
      this.setState({ location: JSON.stringify(result[0]), result: {coords:result[0]} });
      this.setState({mapRegion: { latitude: this.state.result.coords.latitude, longitude: this.state.result.coords.longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }});
      //this.setState({result})
    } catch (e) {
      this.setState({ error: e.message });
    } finally {
      this.setState({ inProgress: false });
    }
  };

  _maybeRenderResult = () => {
    let { selectedExample } = this.state;
    let text = typeof selectedExample === 'string'
      ? selectedExample
      : JSON.stringify(selectedExample);

    if (this.state.inProgress) {
      return <ActivityIndicator style={{ marginTop: 10 }} />;
    } 
    else if (this.state.location) {

      return (
        <Text>
          {text} resolves to {this.state.location} and latitude: {this.state.location.latitude}//
          {JSON.stringify(this.state.result.coords.latitude)}
        </Text>

      );
    } else if (this.state.error) {
      return (
        <Text style={styles.errorResultText}>
          {text} cannot resolve: {JSON.stringify(this.state.error)}
        </Text>
      );
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  separator: {
    height: 1,
    backgroundColor: '#eee',
    marginTop: 10,
    marginBottom: 5,
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
  exampleText: {
    fontSize: 15,
    color: '#ccc',
    marginVertical: 10,
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
