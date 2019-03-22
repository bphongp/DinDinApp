import React from 'react';
import { View, StyleSheet, Text, Dimensions, Image, Button} from 'react-native'
const imageUrl = 'https://cdn.inquisitr.com/wp-content/uploads/2016/07/Jessica-Jung.jpg'
export default class InvitationCard extends React.Component {
    
    render() {
        return (
            <View style = {styles.card}>
                <View style = {styles.topContainer}>
               <Image style = {styles.image} source={{ uri: 'https://data.whicdn.com/images/261732361/superthumb.jpg?t=1475938523' }} />
                    <View style = {{marginTop: 10}}>
                    <Text style = {styles.text}>Krystal Jung</Text>    
                    <Text style = {styles.text}>Sunday 17 June - 8:00</Text> 
                    </View>   
                </View>
                <View style = {{flexDirection: 'row'}}>
                   
                    <View style = {{flex:1}}>
                    <Button  onPress={InvitationCard} color = '#EC7063' title = 'Decline'></Button>
                    </View>
                    <View style = {{flex:1}}>
                    <Button  onPress={InvitationCard} color = '#82E0AA' title = 'Accept'></Button>
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
            flex: 1,
            backgroundColor: 'white',
            margin: 15,
            marginBottom: 450,
        
            borderWidth: 1,
            borderColor: 'lightgrey',
            borderRadius: 8,
        },
        topContainer: {
           flex:1,
           flexDirection: 'row'
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
            width: 200,
            borderRadius: 8,
        },
        
    }
)