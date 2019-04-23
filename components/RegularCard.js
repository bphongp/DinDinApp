import React from 'react';
import { View, StyleSheet, Text, Dimensions, Image, Button} from 'react-native'
const imageUrl = 'https://cdn.inquisitr.com/wp-content/uploads/2016/07/Jessica-Jung.jpg'
export default class InvitationCard extends React.Component {
    
    render() {
        return (
            <View style = {styles.card}>
                <View style = {styles.topContainer}>
                <Image style = {styles.image} source={{ uri: 'https://data.whicdn.com/images/261732361/superthumb.jpg?t=1475938523' }} />
                    <View style = {{marginTop: 10, flex: 2}}>
                    <Text style = {styles.text}>Krystal Jung</Text>    
                    <Text style = {styles.text}>Sunday 17 June - 8:00</Text> 
                    </View>  
                    <View style = {{flex:.75}}>
                    <Button  onPress={InvitationCard} color = 'green' title = 'Call'></Button>
                    <Button  style = {{marginTop: 10}} onPress={InvitationCard} color = 'skyblue' title = 'Email'></Button>
                    </View> 
                </View>

            </View>
        )
    }    
}

const styles = StyleSheet.create(
    {
        card: {
            overflow: 'hidden',
            backgroundColor: 'white',
            margin: 15,
            height: 100,
        
            borderWidth: 1,
            borderColor: 'lightgrey',
            borderRadius: 8,
        },
        topContainer: {
           height: 100,
           flexDirection: 'row',
        },
        image: {
            width: 60,
            height: 60,
            borderRadius:50,
            margin: 10,
            marginLeft: 15,
        },
        text:{
            marginTop: 5,
            marginLeft: 10
        },
        button: {
            marginTop: 10,
            borderRadius: 8,
        },
        
    }
)