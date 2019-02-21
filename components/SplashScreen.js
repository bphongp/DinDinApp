import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, Animated } from 'react-native'

export default class SplashScreen extends React.Component {
    state ={
        fadeAnimation: new Animated.Value(1)
    }
    componentDidMount(){
        Animated.timing(
            this.state.fadeAnimation,
            {
                toValue:0,
                duration:10000,
            }
        ).start()
    }
    /*fadeAnimationIn(){
        this.setState({fadeAnimation: new Animated.Value(1)}, 
        ()=>{
            Animated.timing(
                this.state.fadeAnimation,
                {
                    toValue:1,
                    duration:1000,
                }
            ).start();
        })
    }*/
    render() {
        let {fadeAnimation}=this.state
        return (
            <View style={styles.container}>
                <View style={styles.container}>
                    <Animated.View style ={{opacity:fadeAnimation}}>
                        <Image source={require('../assets/Illustration.png')} />
                    </Animated.View>
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