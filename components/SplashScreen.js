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
                        
                        <Image style= {styles.logo } source={require('../assets/logosmall.png')} />
                        <Image style ={{opacity: this.state.image1Opacity,
                                marginLeft: 140,
                                marginTop: 160,
                            }} 
                            source = {require('../assets/mansmall.png')}/>
                        <Image style ={{opacity: this.state.image1Opacity,
                                marginLeft:-200,
                                marginTop: 30
                            }} 
                            source = {require('../assets/womansmall.png')}/>
                        <Image style = {{ opacity: this.state.image1Opacity,
                                    marginLeft:150,
                        }} source = {require('../assets/glassessmall.png')}/>
                        <View style = {{flex:1, flexDirection: 'column', alignItems:'center'}}>
                            <Text style={styles.titleText}>DinDin</Text>
                            <Text style={styles.subText}>Connecting Food Lovers</Text>
                        </View>
                    </View>     
                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('Home')}}>
                        <Image source={require('../assets/getStarted.png')} />
                    </TouchableOpacity>
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
            //position: 'absolute',
        },
        titleText: {
            fontSize: 28,
            backgroundColor: '#fff',
            height: 35,
            width: 90,
            marginTop: height/2+height/9,
            //marginLeft: height/2+height/9,//400,
        },
        subText: {
            flex:1,
            fontSize: 15,
            fontStyle: 'italic',
            color: 'grey',
            position: 'absolute',
            marginTop: height/2+height/9+height/15,//400,
        },
        logo: {
           position: 'absolute',
           marginTop: height/2+height/9+ height/9,
           /*marginTop: height/2+height/9+ height/10,//500
           height: height/2.5,
           resizeMode: 'contain',
           marginLeft: height/2+height/9,//400,*/
        },
        bottomButton: {
            marginTop:height+height/1.41,//1160,
            marginLeft:height/2+height/9,//400,
            width: height/2 +height/9,
        },
        man:{
            marginLeft: 140,
            marginTop: 160,
        },
        woman:{
            marginLeft:-200,
            marginTop: 30
        },
        glasses:{
            marginLeft:150,
        }
    }
)