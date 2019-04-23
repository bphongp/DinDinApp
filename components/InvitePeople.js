import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements';
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
            eventsData: '',
            contactsData: [],
            hasData: false,
            checked:[],
            countSelected:0,
            eventName:'',
            eventTime:'',
            eventLocation:'',
            eventMonth:'',
            eventDay:''
        }
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
                margin: 5,
                paddingHorizontal: 10,
            }}>
                <Image source={require('../assets/search.png')} />
            </View>
        )
      };
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
        firebase.database().ref('events/0001').on("value", snapshot => {
            this.setState({ eventsData: snapshot.val().name, 
                eventTime: snapshot.val().date.time,
                eventLocation: snapshot.val().location,
                eventMonth:snapshot.val().date.month,
                eventDay: snapshot.val().date.day,
                hasData: true, eventsDataAll: Object.values(snapshot.val())})
            console.log("readdata: "+this.state.eventsData)
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
        if (this.state.eventMonth==1){
            this.setState({eventMonth:'Janurary'})
        }
        if (this.state.eventMonth==2){
            this.setState({eventMonth:'Feburary'})
        }
        if (this.state.eventMonth==3){
            this.setState({eventMonth:'March'})
        }
        if (this.state.eventMonth==4){
            this.setState({eventMonth:'April'})
        }
        if (this.state.eventMonth==5){
            this.setState({eventMonth:'May'})
        }
        if (this.state.eventMonth==6){
            this.setState({eventMonth:'June'})
        }
        if (this.state.eventMonth==7){
            this.setState({eventMonth:'July'})
        }
        if (this.state.eventMonth==8){
            this.setState({eventMonth:'August'})
        }
        if (this.state.eventMonth==9){
            this.setState({eventMonth:'September'})
        }
        if (this.state.eventMonth==10){
            this.setState({eventMonth:'October'})
        }
        if (this.state.eventMonth==11){
            this.setState({eventMonth:'November'})
        }
        if (this.state.eventMonth==12){
            this.setState({eventMonth:'December'})
        }
        return (
            <View style={{flex:1}}>
                <View style= {{flex:1, alignItems:'center'}}>
                    <View style ={styles.myEvent}>
                        <Text style={{fontSize: 18}}>{this.state.eventLocation}</Text>
                        <Text style={{textAlign:'center', color:'#808080'}}>{this.state.eventDay} {this.state.eventMonth}-{this.state.eventTime}</Text>
                    </View>
                </View>
                    <View style={{flex:.25}}>
                    
                        <View style={{flex: .2, flexDirection: 'row'}}>

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
                        <View style = {{flex:0.3}}>

                            <TouchableOpacity style = {{flex: 1}} onPress={() => {this.props.navigation.navigate('MyEventDetail')}}>
                                <Image style= {{width: '100%', height: '100%'}} source={require('../assets/Sendbtn.png')} />
                            </TouchableOpacity>
                        </View>
            </View>
        );
    }
}

const styles = StyleSheet.create(
    {
        myEvent: {
            overflow: 'hidden',
            backgroundColor: 'white',
            flex:.75,
            width:'90%',
            alignItems:'center',
            justifyContent: 'center',
            borderWidth: 1,
            borderColor: 'lightgrey',
            borderRadius: 8,
            marginTop:'3%'
        },
        card: {
            overflow: 'hidden',
            backgroundColor: 'white',
            margin: 15,
            height: 75,

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
