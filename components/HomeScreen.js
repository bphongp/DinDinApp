import React from 'react';
import { View, StyleSheet, Text, Dimensions, Image} from 'react-native'
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { strings } from '../locales/i18n';
export default class HomeScreen extends React.Component {
    /*navigationOptions--this allows to customize the header */
    /*****to do: how to align navigation text */
    static navigationOptions = {
            title:"DinDin",
            headerTitleStyle:{
                fontSize: 20,
                fontWeight: undefined,
                alignSelf: 'center',
                flexGrow:1,
                textAlign:'center',
            },
            headerStyle: {
                paddingVertical:15,
            },
            headerLeft: (
                <View style={{
                        margin:5,
                        paddingHorizontal:5,
                    }}>
                    <Image source={require('../assets/sidemenu.png')} />
                </View>
            ),
            headerRight:(
                <View style={{
                    margin:5,
                    paddingHorizontal:10,
                }}>
                    <Image source={require('../assets/search.png')} />
                </View>
            )
        
    };

    render() {
    const stockValue = this.props.navigation.getParam('stockValue', 'not recorded');
        return (
            <View style ={styles.container} >
                <View style={styles.container}>
                    <Text style={styles.titleText}>{strings('login.login_button')}</Text>
                    <Text style={styles.subText}>LOL</Text>
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