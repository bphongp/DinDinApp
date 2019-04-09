import React, { Component } from 'react';
import { View, ScrollView, Image, StyleSheet, Dimensions } from 'react-native';
import { Constants } from 'expo';

const { width } = Dimensions.get('window');
const height = width * 0.8

class Carousel extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
        invitesData: this.props.invitesData,
    }
    console.log("Invites DATA" + this.state.invitesData)
}
  render() {
    const invites  = this.props.invitesData;
    if (invites && invites.length) {
      return (
        <View
          style={styles.scrollContainer}
        >
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
          >
            {invites.map(invite => (
              <Image style={styles.image} source={invite.photo} />
            ))}
          </ScrollView>
        </View>
      );
    }
    console.log('Please provide images');
    return null;    
  }
}

export default class CarouselTest extends Component {
  render() {
    

    return (
      <View style={styles.container}>
        <Carousel navigation = {this.props.navigation} invitesData={this.props.navigation.state.params.invitesData} />
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
  },
  scrollContainer: {
    height,
  },
  image: {
    width,
    height,
  },
});
