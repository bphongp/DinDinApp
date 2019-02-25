import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, Animated, Dimensions, ScrollView } from 'react-native'
import { heightPercentageToDP } from 'react-native-responsive-screen';

export default class SplashScreen extends React.Component {
    constructor(){
        super()
        this.state={
            image1Opacity: 1
        }
    }
    componentDidMount(){
        setInterval(()=>{ 
            if(this.state.image1Opacity >= 1){
                this.setState({
                    image1Opacity: 0
                })
            }else{
                this.setState({
                    image1Opacity: this.state.image1Opacity + 0.01
                })
            }}
      , 50)
    }
    render() {
        return (
            <View style={styles.container}>
                    <View style={styles.container}>
                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('Home')}}>
                                <Image style ={styles.bottomButton} source={require('../assets/getStarted.png')} />
                        </TouchableOpacity>
                    </View>   
                    <View style={styles.container}>
                        
                        <Image style= {styles.logo} source={require('../assets/background.png')} />
                        <Text style={styles.titleText}>DinDin</Text>
                        <Text style={styles.subText}>Connecting Food Lovers</Text>
                    </View>     
                    <View style={styles.container}>

                    </View>
            </View>

        )
    }
}
const { height} = Dimensions.get('window');
const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
        },
        titleText: {
            fontSize: 28,
            backgroundColor: '#fff',
            marginLeft: height/2+height/9,//400,
            marginTop: 50,
        },
        subText: {
            fontSize: 15,
            fontStyle: 'italic',
            color: 'grey',
            marginLeft: height/2+height/9,//400,
        },
        logo: {
           flex: 1,
           marginTop: height/2+height/9+ height/10,//500
           height: height/2.5,
           resizeMode: 'contain',
           marginLeft: height/2+height/9,//400,
        },
        bottomButton: {
            marginTop:height+height/1.41,//1160,
            marginLeft:height/2+height/9,//400,
            width: height/2 +height/9,
        },
        man:{
            width:67,
            height:72,
        }
    }
)