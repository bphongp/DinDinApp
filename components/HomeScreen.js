import React from 'react';
import { View, StyleSheet, Image, Text, Button } from 'react-native'

export default class HomeScreen extends React.Component {
    /*navigationOptions--this allows to customize the header */
    /*****to do: how to align navigation text */
    static navigationOptions =({navigation}) => {
        return{
            title: "DinDin",
            titleStyle:{
                alignSelf:'center'
            },
            style:{
                paddingLeft:10,
                paddingRight:10,
            },
            headerLeft: <Image source={require('../assets/sidemenubtn1.png')} />,
            headerRight:<Image source={require('../assets/searchbtn1.png')} />
        }
    };
    
    render() {
        return (
            <View style ={styles.container} >
                <View style={styles.container}>
                    <Text style={styles.titleText}>HomeScreen :D</Text>
                    <Text style={styles.subText}>Connecting Food Lovers</Text>
                </View>
                
            </View>

        )
    }
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 0,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        },
        titleText: {
            fontSize: 28,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 50,
        },
        subText: {
            fontSize: 15,
            fontStyle: 'italic',
            color: 'grey',
            alignItems: 'center',
            justifyContent: 'center',
        },
        getStartedButton: {
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 20,
        }
    }
)