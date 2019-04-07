import * as React from 'react'
import { View, StyleSheet, Text, Dimensions, Image, Button, TouchableOpacity} from 'react-native'
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
            inviteObj: this.props.navigation.state.params.inviteObj,
            inviteKey: this.props.navigation.state.params.inviteKey,
        }
        console.log("Invite key in invitationdetails " + this.state.inviteKey)
    }
    componentWillMount() {
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }
        
    }
    acceptInvite(object) {
        //console.log("Accept entered")
        //console.log(this.state.inviteKey)
        firebase.database().ref('events/').push({
            name: object.name,
            date: object.date,
            photo: object.photo
        })
        firebase.database().ref('invites/').child(this.state.inviteKey).remove();
        this.props.navigation.goBack()
      }
    declineInvite(){
        firebase.database().ref('invites/').child(this.state.inviteKey).remove();
        this.props.navigation.goBack()
    }
    render() {
        //console.log("invite card render entered")
        //console.log("invite key at card " + this.state.inviteKey)
        return (
            <View style = {styles.card}>
                <View style = {styles.topContainer}>
               
               <Image style = {styles.image} source={{ uri: this.state.inviteObj.photo }} />
                  
                    <View style = {{marginTop: 10, alignItems: 'center'}}>
                    <Text style = {{marginTop: 5, fontSize: 20,}}>Restuarant Name, Address</Text>    
                    <Text style = {styles.text}>{this.state.inviteObj.date.day + " " + this.state.inviteObj.date.month + " - " + this.state.inviteObj.date.time}</Text>
                    <Text style = {{marginTop: 10,color: 'grey', fontWeight: 'bold'}}>{"Hosted By " + this.state.inviteObj.name}</Text>     
                    </View>   
                  
                </View>
                <View style = {{flexDirection: 'row'}}>
                   
                    <View style = {{flex:1}}>
                    <Button  onPress={() => this.declineInvite()} color = '#EC7063' title = 'Decline'></Button>
                    </View>
                    <View style = {{flex:1}}>
                    <Button  onPress={() => this.acceptInvite(this.state.inviteObj)} color = '#82E0AA' title = 'Accept'></Button>
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
            height: 220,
        
            borderWidth: 1,
            borderColor: 'lightgrey',
            borderRadius: 8,

        },
        topContainer: {
           flex:1,
           justifyContent:'center',
           alignItems:'center'
        },
        image: {
            width: 60,
            height: 60,
            borderRadius:50,
            
        },
        text:{
            marginTop: 5,
        },
        button: {
            width: 200,
            borderRadius: 8,
        },
        
    }
)
