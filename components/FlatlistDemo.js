import * as React from 'react'
import { StyleSheet, Text, View, Image, FlatList, Button, TouchableOpacity, ScrollView } from 'react-native'
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


export default class FlatlistDemo extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            eventsData: null,
            hasData: false,
            invitesData:null,
            inviteKey:null,
            hasInviteData: false,
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
        firebase.database().ref('events/').on("value", snapshot => {
            this.setState({ eventsData: Object.values(snapshot.val()), hasData: true, })
            
        })

        firebase.database().ref('invites/').on("value", snapshot => {
            currentContext.setState({ invitesData:  snapshot.val() == null ? null : Object.values(snapshot.val()), hasInviteData: snapshot.val() == null ? false : true, inviteKey: snapshot.val() == null ? null : Object.keys(snapshot.val())[0] })
            //console.log(snapshot.val())
            //this.forceUpdate();
        })
    }
    
    keyExtractor(item) {
        return item.name.toString()
    }

    renderRow({ item }) {
        return (
            
            <View style={styles.card}>
                <View style={{flex:1,flexDirection:'row'}}>
                    <Image style={styles.image} source={{ uri: item.photo }} />
                    <View style={{ marginTop: '3%', flex: 2 }}>
                        <Text style={styles.text}>{item.name}</Text>
                        <Text style={styles.text}>{item.date.month + " " + item.date.day + " " + item.date.time}</Text>
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
        if (this.state.hasData == true) {
            return (
                <View style = {{ flex: 1,}}>
                <View style = {styles.container}>
                <ScrollView style={{flex:0,}} horizontal = {true}>
                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('AddNewEvent')}}>
                        <Text style = {{color:'lightgrey'}}>January</Text>
                    </TouchableOpacity>
                    <Text>     </Text>
                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('AddNewEvent')}}>
                        <Text style = {{color:'lightgrey'}}>Febuary</Text>
                    </TouchableOpacity>
                    <Text>     </Text>
                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('AddNewEvent')}}>
                        <Text style = {{color:'lightgrey'}}>March</Text>
                    </TouchableOpacity>
                    <Text>     </Text>
                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('AddNewEvent')}}>
                        <Text style = {{color:'lightgrey'}}>April</Text>
                    </TouchableOpacity>
                    <Text>     </Text>
                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('AddNewEvent')}}>
                        <Text style = {{color:'lightgrey'}}>May</Text>
                    </TouchableOpacity>
                    <Text>     </Text>
                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('AddNewEvent')}}>
                        <Text style = {{color:'lightgrey'}}>June</Text>
                    </TouchableOpacity>
                    <Text>     </Text>
                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('AddNewEvent')}}>
                        <Text style = {{color:'lightgrey'}}>July</Text>
                    </TouchableOpacity>
                    <Text>     </Text>
                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('AddNewEvent')}}>
                        <Text style = {{color:'lightgrey'}}>August</Text>
                    </TouchableOpacity>
                    <Text>     </Text>
                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('AddNewEvent')}}>
                        <Text style = {{color:'lightgrey'}}>September</Text>
                    </TouchableOpacity>
                    <Text>     </Text>
                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('AddNewEvent')}}>
                        <Text style = {{color:'lightgrey'}}>October</Text>
                    </TouchableOpacity>
                    <Text>     </Text>
                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('AddNewEvent')}}>
                        <Text style = {{color:'lightgrey'}}>November</Text>
                    </TouchableOpacity>
                    <Text>     </Text>
                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('AddNewEvent')}}>
                        <Text style = {{color:'lightgrey'}}>December</Text>
                    </TouchableOpacity>
                    <Text>     </Text>
            </ScrollView>
            </View>

                        {this.state.hasInviteData == true ? (
                        <InvitationCard inviteObj = {this.state.invitesData[0]} inviteKey = {this.state.inviteKey} navigation ={this.props.navigation} >
                        </InvitationCard> ) : <View></View>
                        }
                    <View style={{ height: 1, width: "90%", backgroundColor: "#CED0CE", marginLeft: "5%" }} />

                    <TouchableOpacity style = {{paddingTop:'5%', paddingBottom:'5%', alignSelf:'center'}} 
                        onPress={() => {this.props.navigation.navigate('AddNewEvent')}}>
                        <Image source={require('../assets/addnewevent.png')} />
                    </TouchableOpacity>
                    <View style={{ height: 1, width: "90%", backgroundColor: "#CED0CE", marginLeft: "5%" }} />

                    <FlatList
                        style={{}}
                        data={this.state.eventsData}
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