import * as React from 'react'
import { StyleSheet, Text, View, Image, FlatList, Button } from 'react-native'
export default class FlatlistDemo extends React.Component {
    constructor() {
        super()
        this.state = {
            podCastList: null
        }
    }

    async getPodCastData() {
        let response = await fetch("https://randomuser.me/api/?seed=${seed}&page=${page}&results=20")
        let extractedJson = await response.json()
        this.setState({
            podCastList: extractedJson.results
        })
    }
    componentWillMount() {
        this.getPodCastData()
    }

    keyExtractor(item) {
        return item.email.toString()
    }

    renderRow({ item }) {
      
        return (
            <View style = {styles.card}>
                <View style = {styles.topContainer}>
                <Image style = {styles.image} source={{ uri: item.picture.thumbnail }} />
                    <View style = {{marginTop: 10, flex: 2}}>
                    <Text style = {styles.text}>{item.name.first}</Text>    
                    <Text style = {styles.text}>Sunday 17 June - 8:00</Text> 
                    </View>  
                    <View style = {{flex:.75}}>
                    <Button  onPress={FlatlistDemo} color = 'green' title = 'Call'></Button>
                    <Button  style = {{marginTop: 10}} onPress={FlatlistDemo} color = 'skyblue' title = 'Email'></Button>
                    </View> 
                </View>

            </View>
        )
    }
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
renderSeparator = () => {
  return (
    <View
      style={{
        height: 1,
        width: "86%",
        backgroundColor: "#CED0CE",
        marginLeft: "14%"
      }}
    />
  );
};
    render() {
        if (this.state.podCastList !== null) {
            return (
                <View style={styles.container}>
                    <FlatList
                        style={styles.ScollablePodCasts}
                        data={this.state.podCastList}
                        renderItem={this.renderRow}
                        keyExtractor={this.keyExtractor}
                        ItemSeparatorComponent={this.renderSeparator}
                    />
                </View>
            )
        } else {
            return (<View style={{ flex: 1 }} />)
        }
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
           flex:1,
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