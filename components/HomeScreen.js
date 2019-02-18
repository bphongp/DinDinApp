import React from 'react';
import { View, StyleSheet, Image, Text, Button } from 'react-native'

export default class HomeScreen extends React.Component {
    render() {
        return (
            <View >
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
        },
    }
)