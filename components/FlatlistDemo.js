import * as React from 'react'
import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
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
           
                <View style={styles.container}>
                <Text style={styles.podCastTile}>{item.email}</Text>
                    <Image style={styles.podImages} source={{ uri: item.picture.thumbnail }} />
                    
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
        conatiner: {
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: 20
        },
        titleSection: {
            height: 29,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        },

        title: {
          
            fontSize: 24,
            color: "#FFFFFF",
            letterSpacing: 0.35,
            textAlign: "left",
        },
        ScollablePodCasts: {
      
        },
        rowContainer: {
            
        },
        podCastContainer: {
           
          
        },
        podCastTile: {
            fontSize: 14,
            color: "#1B2631",
            letterSpacing: -0.15,
            textAlign: "left",
            paddingTop: 10
        },
        podImages: {
            height: 60,
            width: 60,
        }
    }
)