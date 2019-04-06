import * as React from 'react'
import { View, StyleSheet, Text, Dimensions, Image, Button} from 'react-native'
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD50J9Y7FH9l2tfwZ_qOJCCjnjpRBaFrR4",
    authDomain: "dindin-46b55.firebaseapp.com",
    databaseURL: "https://dindin-46b55.firebaseio.com",
    projectId: "dindin-46b55",
    storageBucket: "dindin-46b55.appspot.com",
    messagingSenderId: "36010701085"
};
export default class InvitationCard extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            inviteObj: props.inviteObj,
            inviteKey: props.inviteKey
        }
      
    }
    componentWillMount() {
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }
        
    }
    acceptInvite(object) {
        console.log("Accept entered")
        //console.log(this.state.inviteKey)
        firebase.database().ref('events/').push({
            name: object.name,
            date: object.date,
            photo: object.photo
        })
        firebase.database().ref('invites/').child(this.props.inviteKey).remove();
      }
    declineInvite(){
        firebase.database().ref('invites/').child(this.props.inviteKey).remove();
    }
    render() {
        console.log("invite card render entered")
        console.log("invite key at card " + this.props.inviteKey)
        return (
            <View style = {styles.card}>
                <View style = {styles.topContainer}>
               <Image style = {styles.image} source={{ uri: this.props.inviteObj.photo }} />
                    <View style = {{marginTop: 10}}>
                    <Text style = {styles.text}>{this.props.inviteObj.name}</Text>    
                    <Text style = {styles.text}>{this.props.inviteObj.date.month + " " + this.props.inviteObj.date.day + " " + this.props.inviteObj.date.time}</Text> 
                    </View>   
                </View>
                <View style = {{flexDirection: 'row'}}>
                   
                    <View style = {{flex:1}}>
                    <Button  onPress={() => this.declineInvite()} color = '#EC7063' title = 'Decline'></Button>
                    </View>
                    <View style = {{flex:1}}>
                    <Button  onPress={() => this.acceptInvite(this.props.inviteObj)} color = '#82E0AA' title = 'Accept'></Button>
                    </View>
                
                </View>
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
            height: 125,
        
            borderWidth: 1,
            borderColor: 'lightgrey',
            borderRadius: 8,

        },
        topContainer: {
           flex:1,
           flexDirection: 'row'
        },
        image: {
            width: 60,
            height: 60,
            borderRadius:50,
            margin: 10,
            marginLeft: 15,
        },
        text:{
            marginTop: 5,
            marginLeft: 10
        },
        button: {
            width: 200,
            borderRadius: 8,
        },
        
    }
)
