import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, Animated, Dimensions, ScrollView } from 'react-native'
import { heightPercentageToDP } from 'react-native-responsive-screen';

export default class SplashScreen extends React.Component {
    constructor(){
        super()
        this.state={
            image1Opacity: 1,
            image2Opacity: 1,
            image3Opacity: 1,
            timer:0,
        }
    }
    componentDidMount(){
        setInterval(()=>{ 
            if(this.state.image1Opacity >= 1){
                this.setState({
                    image1Opacity: 0,
                    timer:0,
                })
            }
            if(this.state.image2Opacity >= 1 && this.state.timer>10){
                this.setState({
                    image2Opacity: 0,
                })
            }
            if(this.state.image3Opacity >= 1 && this.state.timer>20){
                this.setState({
                    image3Opacity: 0,
                })
            }
            if (this.state.image1Opacity <1){
                this.setState({
                    image1Opacity: this.state.image1Opacity + 0.01,
                    timer:this.state.timer+1,
                })
            }
            if (this.state.image2Opacity<1 && this.state.timer>10){
                this.setState({
                    image2Opacity: this.state.image2Opacity + 0.01,
                    timer:this.state.timer+1,
                })
            }
            if (this.state.image3Opacity<1 && this.state.timer>20){
                this.setState({
                    image3Opacity: this.state.image3Opacity + 0.01,
                    timer:this.state.timer+1,
                })
            }
        }
      , 50)
    }
    render() {
        return (
            <View style={styles.container}>
                    <View style={styles.container}>
                        
                        <Image style= {styles.logo } source={require('../assets/logosmall.png')} />
                        <Image style ={{opacity: this.state.image1Opacity,
                                marginLeft: height/10+height/8,//140,
                                marginTop: height/10+height/7.5,///160,
                            }} 
                            source = {require('../assets/mansmall.png')}/>
                        <Image style ={{opacity: this.state.image2Opacity,
                                marginLeft:-(height/3.3),//200
                                marginTop: height/50 +height/20,//30
                            }} 
                            source = {require('../assets/womansmall.png')}/>
                        <Image style = {{ opacity: this.state.image3Opacity,
                                marginLeft:height/5,//150
                                marginTop:-(height/40)//20,
                        }} source = {require('../assets/glassessmall.png')}/>
                        <View style = {{flex:1, flexDirection: 'column', alignItems:'center'}}>
                            <Text style={styles.titleText}>DinDin</Text>
                            <Text style={styles.subText}>Connecting Food Lovers</Text>
                        </View>
                    </View>     
                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('Home')}}>
                        <Image style= {{width: height/2 +height/9}} source={require('../assets/getStarted.png')} />
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
            marginTop: height/60,
            //marginLeft: height/2+height/9,//400,
        },
        subText: {
            flex:1,
            fontSize: 15,
            fontStyle: 'italic',
            color: 'grey',
            position: 'absolute',
            marginTop: height/50+height/20,//40
        },
        logo: {
           position: 'absolute',
           marginTop: height/2+height/9+ height/9,
           /*marginTop: height/2+height/9+ height/10,//500
           height: height/2.5,
           resizeMode: 'contain',
           marginLeft: height/2+height/9,//400,*/
        },
        man:{
            marginLeft: height/2,//140,
            marginTop: height/2,//160,
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