import React from 'react';
import { View, StyleSheet, Image, Text, Button } from 'react-native'

export default class SplashScreen extends React.Component {
    render() {
        return (
            <View>
                <View style={styles.container}>
                <Image source={require('../assets/Illustration.png')} />
                <Text style={styles.titleText}>DinDin</Text>
                <Text style={styles.subText}>Connecting Food Lovers</Text>
                </View>
                <Image style = {styles.getStartedButton} source={require('../assets/getStarted.png')} />
            </View>

        )
    }
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
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
        },
    }
)