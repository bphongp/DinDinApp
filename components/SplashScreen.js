import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native'

export default class SplashScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.container}>
                    <Image source={require('../assets/Illustration.png')} />
                    <Text style={styles.titleText}>DinDin</Text>
                    <Text style={styles.subText}>Connecting Food Lovers</Text>
                </View>
                <TouchableOpacity onPress={() => {
                    this.props.navigation.navigate('Home')
                }}>
                    <Image style={styles.getStartedButton} source={require('../assets/getStarted.png')} />
                </TouchableOpacity>
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