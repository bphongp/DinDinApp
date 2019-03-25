import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, Animated, Dimensions, ScrollView, Button, Alert, ImageBackground} from 'react-native'
import {Facebook} from 'expo';

import { Localization } from 'expo';
import i18n from 'i18n-js';
const en = {
  title: 'DinDin',
  subtitle: 'Connecting Food Lovers',
};
const ko = {
  title: '딘딘',
  subtitle: '음식 사랑하는 사람을 사귄다',
};

i18n.fallbacks = true;
i18n.translations = { ko, en };
i18n.locale = Localization.locale;
export default class SplashScreen extends React.Component {
    login = async()=> {
        try {
          const {
            type,
            token,
            expires,
            permissions,
            declinedPermissions,
          } = await Facebook.logInWithReadPermissionsAsync('394689051318456', {
            permissions: ['public_profile'],
          });
          if (type === 'success') {
            // Get the user's name using Facebook's Graph API
            const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
            Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
          } else {
            // type === 'cancel'
          }
        } catch ({ message }) {
          alert(`Facebook Login Error: ${message}`);
        }
    }
    constructor(){
        super()
        this.state={
            /*current state of the icons image1 is the man, image2 is the woman
            image3 is the woman with the glasses, timer is to have them
            all fade at different intervals*/
            image1Opacity: 1,
            image2Opacity: 1,
            image3Opacity: 1,
            timer:0,
        }
    }
    componentDidMount(){
        /*this entire thing is for the random fading of the icons
        it timer is used to allow one icon to go after a crtain amount of time*/

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
        /* this is what will be rendered for the splash screen */
        return (
            <View style={styles.container}>
                  <View style = {{flex: 1}}>
                        <View style = {{flex:.62, backgroundColor : 'blue',overflow: 'visible'}}>
                            <View style = {{flex: 1, backgroundColor : 'green', margin:'5%',overflow: 'visible'}}>
                                <ImageBackground resizeMode="contain" style= {{width:'100%', height: '100%'}} source={require('../assets/logo.png')} >
                        
                                    <Image  resizeMode="contain" style ={{marginTop:'0%', marginLeft: '70%', opacity: this.state.image1Opacity}} source = {require('../assets/man.png')}/>
                                    <Image  resizeMode="contain" style ={{marginTop:'3%', marginLeft: '0%',opacity: this.state.image2Opacity,}} source = {require('../assets/woman.png')}/>
                                    <Image  resizeMode="contain" style ={{marginTop:'20%', marginLeft: '65%', bottom: '0%', opacity: this.state.image3Opacity,}} source = {require('../assets/glasses.png')}/>
                                </ImageBackground>
                            </View>
                        </View>
                        <View style = {{flex:.3 , alignItems:'center', backgroundColor: 'pink'}}>
                            <Text style={styles.titleText} >{i18n.t('title')}</Text>
                            <Text style={styles.subText} >{i18n.t('subtitle')}</Text>
                            <Button style ={{backgroundColor: '#3b5998', marginTop:'20%'}} onPress={this.login.bind(this)} title='Connect to FaceBook'/>
                        </View>
                        <View style = {{flex: .08}}>
                <TouchableOpacity style = {{flex: 1}} onPress={() => {this.props.navigation.navigate('Flatlist')}}>
                        <Image style= {{width: '100%', height: '100%'}} source={require('../assets/getStarted.png')} />
                </TouchableOpacity>
                </View>
                  </View>
                 
            </View>

        )
    }
}
/*height is used to try to make it so it is responsive*/
const { height, width} = Dimensions.get('window');
const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: 'skyblue',
        },
        titleText: {
            fontSize: 28,
            marginTop: '2%'
        },
        subText: {
            fontSize: 15,
            fontStyle: 'italic',
            color: 'grey',
            marginBottom: '0%'
        },

    }
)