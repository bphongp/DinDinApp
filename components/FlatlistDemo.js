import * as React from 'react'
import { StyleSheet, Text, View, Image, FlatList, Button, TouchableOpacity } from 'react-native'

import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAfNTdT8nd5lNr5E_t8XsQyuGGC3zlppS8",
    authDomain: "mobile-d433b.firebaseapp.com",
    databaseURL: "https://mobile-d433b.firebaseio.com",
    projectId: "mobile-d433b",
    storageBucket: "mobile-d433b.appspot.com",
    messagingSenderId: "528264911283"
};

export default class FlatlistDemo extends React.Component {
    constructor() {
        super()
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }
        this.setupPeopleListener()

        this.state = {
            podCastList: null, 
            hasData:  false
        }
    }

    async getPodCastData() {
        let response = await fetch("https://randomuser.me/api/?seed=${seed}&page=${page}&results=20")
        let extractedJson = await response.json()
        this.setState({
            podCastList: extractedJson.results
        })
    }
    componentWillMount() {
        //Check to see if already initialized
       

        this.getPodCastData()
    }



    setupPeopleListener() {
        let currentState = this.state
        console.log("fired listener")
        firebase.database().ref('Invitations/').on('value', (snapshot) => {
            console.log(JSON.stringify(snapshot.val()))
            invitations = snapshot.val()
                currentState.setState({
                invitationsData : invitations, 
                hasData: true
            })
        });
    }
    keyExtractor(item) {
        return item.email.toString()
    }

    renderRow({ item }) {

        return (
            <View style={styles.card}>
                <View style={styles.topContainer}>
                    <Image style={styles.image} source={{ uri: item.picture.thumbnail }} />
                    <View style={{ marginTop: '3%', flex: 2 }}>
                        <Text style={styles.text}>{item.name.first}</Text>
                        <Text style={styles.text}>8:00 pm</Text>
                    </View>
                    <View style={{ flex: .75, flexDirection: 'row'}}>
                        <TouchableOpacity style ={{marginTop:'40%'}} onPress={() => {this.props.navigation.navigate('AddNewEvent')}}>
                                <Image source={require('../assets/call.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity style ={{marginTop:'40%', marginLeft: '20%'}} onPress={() => {this.props.navigation.navigate('AddNewEvent')}}>
                                <Image source={require('../assets/email.png')} />
                        </TouchableOpacity>

                    </View>
                </View>
            </View>

        )
    }
    static navigationOptions = {
        title: "DinDin",
        headerTitleStyle: {
            fontSize: 20,
            fontWeight: undefined,
            alignSelf: 'center',
            flexGrow: 1,
            textAlign: 'center',
        },
        headerStyle: {
            paddingVertical: 15,
        },
        headerLeft: (
            <View style={{
                margin: 5,
                paddingHorizontal: 5,
            }}>
                <Image source={require('../assets/sidemenu.png')} />
            </View>
        ),
        headerRight: (
            <View style={{
                margin: 5,
                paddingHorizontal: 10,
            }}>
                <Image source={require('../assets/search.png')} />
            </View>
        )

    };
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
    render() {
        if(this.state.hasData){
            console.log(this.state.invitationsData)
        }else{
            console.log(this.state.hasData)
        }
        

        if (this.state.podCastList !== null) {
            return (
                <View style={styles.container}>
                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('AddNewEvent')}}>
                                <Image source={require('../assets/addnewevent.png')} />
                            </TouchableOpacity>
                    <FlatList
                        style={styles.ScollablePodCasts}
                        data={this.state.podCastList}
                        renderItem={this.renderRow}
                        keyExtractor={this.keyExtractor}
                        ItemSeparatorComponent={this.renderSeparator}
                    />
                </View>
            )
        } else {
            return (<View style={{ flex: 1 }} />)
        }
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