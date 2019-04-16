import * as React from 'react'
import { StyleSheet, Text, View, Image, FlatList, Button, TouchableOpacity, ScrollView} from 'react-native'
import InvitationCard from './InvitationCard';
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD50J9Y7FH9l2tfwZ_qOJCCjnjpRBaFrR4",
    authDomain: "dindin-46b55.firebaseapp.com",
    databaseURL: "https://dindin-46b55.firebaseio.com",
    projectId: "dindin-46b55",
    storageBucket: "dindin-46b55.appspot.com",
    messagingSenderId: "36010701085"
};


export default class InvitePeople extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            eventsDataAll: [],
            eventsData: [],
            hasData: false,
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

        this.database = firebase.database();
        firebase.database().ref('events/0001').on("value", snapshot => {
            this.setState({ eventsData: Object.values(snapshot.val()), hasData: true, eventsDataAll: Object.values(snapshot.val())})
           
        })
        console.log("events:"+this.state.eventsDataAll)

        
    }

    renderRow({ item }) {
        return (
            
            <View style={styles.card}>
                <View style={{flex:1,flexDirection:'row'}}>
                    <Image style={styles.image} source={{ uri: item.photo }} />
                    <View style={{ marginTop: '3%', flex: 2 }}>
                        <Text style={styles.text}>{item.name}</Text>
                        <Text style={styles.text}>{ item.date.month + "/" + item.date.day + " " + item.date.time}</Text>
                    </View>
                    <View style={{ flex: .75, flexDirection: 'row'}}>

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
            return (
                <View style = {{ flex: 1,}}>
                </View>
            )
       
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