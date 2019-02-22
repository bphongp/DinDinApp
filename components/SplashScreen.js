import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, Animated, Dimensions } from 'react-native'
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
                <ScrollView>
                  <View style={styles.container}>
                    <Image style={{opacity: this.state.image1Opacity}} source={require('../assets/Illustration.png')} />
                    <Text style={styles.titleText}>DinDin</Text>
                    <Text style={styles.subText}>Connecting Food Lovers</Text>
                  </View>
                </ScrollView>
               
                    <TouchableOpacity onPress={() => {
                        this.props.navigation.navigate('Home')
                    }}>
                        <Image source={require('../assets/getStarted.png')} />
                    </TouchableOpacity>
               
            </View>

        )
    }
}
const { height } = Dimensions.get('window');
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
           
            marginTop: 50,
        },
        subText: {
            fontSize: 15,
            fontStyle: 'italic',
            color: 'grey',
         
        },
        logo: {
           flex: 1,
           marginTop: height/10,
           height: height/3,
           resizeMode: 'contain'
        },
    }
)