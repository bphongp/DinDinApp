import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import { ListItem, CheckBox } from 'react-native-elements';
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD50J9Y7FH9l2tfwZ_qOJCCjnjpRBaFrR4",
    authDomain: "dindin-46b55.firebaseapp.com",
    databaseURL: "https://dindin-46b55.firebaseio.com",
    projectId: "dindin-46b55",
    storageBucket: "dindin-46b55.appspot.com",
    messagingSenderId: "36010701085", 
};

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            eventsDataAll: [],
            eventsData: [],
            hasData: false,
            invitesData: [],
            inviteKey:null,
            hasInviteData: false,
            checked:false,
        }
    }
    press = () => {
        this.setState((state) => ({
        checked: !state.checked,
        }));
    }
    render() {
        return (
        <View style={styles.container}>
            <ListItem
                title={
                <CheckBox
                    title="Click Here!"
                    onPress={this.press}
                    checked={this.state.checked}
                />
                }
            />
                    <ListItem
                title={
                <CheckBox
                    title="Click Here!"
                    onPress={this.press}
                    checked={this.state.checked}
                />
                }
            />
        </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
});
