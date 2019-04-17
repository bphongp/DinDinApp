import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
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
            contactsData: [],
            hasData: false,
            invitesData: [],
            inviteKey:null,
            hasInviteData: false,
            checked:[],
            countSelected:0,
        }
    }
       
    componentWillMount() {
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }
        this.readUserData()
        
    }
    readUserData() {
        //console.log("readUserData Fired")
        let currentContext = this
         this.database = firebase.database();
         firebase.database().ref('Contacts/').on("value", snapshot => {
             this.setState({ contactsData: Object.values(snapshot.val()), hasData: true, eventsDataAll: Object.values(snapshot.val())})
            
         })

         
     }
     renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "90%",
                    backgroundColor: "#CED0CE",
                    marginLeft: "5%"
                }}
            />
        );
    };
    handleChange = (index) => {
        let checked = [...this.state.checked];
        let countchecked = this.state.countSelected
        checked[index] = !checked[index];
        this.setState({ checked });
        if (checked[index]==true){
            this.setState({countSelected: countchecked +1});
        }
        else{
            this.setState({countSelected: countchecked -1});
        }
    }

    render() {
        let {contactsData, checked, countSelected} = this.state;
        return (
            <View style={{flex:1}}>
                <View style={{flex:.5}}>
                
                    <View style={{flex: 1, flexDirection: 'row', paddingVertical:'10%', marginTop:'20%'}}>

                        <View style={{flex: 1}}>

                            <Text style={{color: '#808080'}}> Who would you like to invite?</Text>
                        </View>
                        <View style={{flex: 1}}>

                            <Text style={{color:'#2FB3FD', textAlign:'right', marginRight:'5%'}}>{this.state.countSelected} Selected</Text>
                        </View>
                    </View>
                </View>
                <View style={{ height: 1, width: "90%", backgroundColor: "#CED0CE", marginLeft: "5%" }} />

                    {this.state.hasData == true ? (
                                    
                                <FlatList
                                    style={{}}
                                    ItemSeparatorComponent={this.renderSeparator}
                                    data={this.state.contactsData}
                                    extraData={this.state}
                                    renderItem={({ item, index}) =>
                                        <View style={styles.card}>
                                            <View style={{flex:1,flexDirection:'row'}}>
                                                <Image style={styles.image} source={{ uri: item.photo }} />
                                                <View style={{ marginTop: '3%', flex: 2 }}>
                                                    <Text style={styles.text}>{item.name}</Text>
                                                    <Text style={styles.text}>{ item.phone}</Text>
                                                </View>
                                                <View style={{ flex: .75, flexDirection: 'row'}}>
                                                <CheckBox
                                                    onPress={() => this.handleChange(index)}
                                                    checked={checked[index]} 
                                                />
                                                </View>
                                            </View>
                                        </View>
                                    }
                                    keyExtractor={this.keyExtractor}
                                    
                                /> )
                                : <View></View>
                    }
            </View>
        );
    }
}

const styles = StyleSheet.create(
    {
        card: {
            overflow: 'hidden',
            backgroundColor: 'white',
            margin: 15,
            height: 75,

            //borderWidth: 1,
            //borderColor: 'lightgrey',
            //borderRadius: 8,
        },
        topContainer: {
            flex: 1,
            flexDirection: 'row',
        },
        image: {
            width: 60,
            height: 60,
            borderRadius: 50,
            margin: 10,
            marginLeft: 15,
        },
        text: {
            marginTop: 5,
            marginLeft: 10
        },
        button: {
            marginTop: 10,
            borderRadius: 8,
        },

    }
)
