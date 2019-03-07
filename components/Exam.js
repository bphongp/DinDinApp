import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Button} from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';

/**
 * Default for flexDirection: colum , JustifyContent: spcaceBetween, AlignItems: stretch
 */
export default class Exam extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stock: [],
      isSet: false,
      date: new Date(),
      featured: []
    };
  }
  tick() {
    this.setState({
      date: new Date()
    })
  }
  componentDidMount() {
    this.getData();
    this.timerID = setInterval(  //Interval
      () => this.tick(),
      1000
    )
    
  }
  async click() { // Async Stock request
    let response = await fetch("https://api.iextrading.com/1.0/stock/aapl/price")
    let responseText = await response.text();
    this.setState({
      stock: responseText,
      isSet: true,
    })
  }
  async getData() {
    let response = await fetch("https://www.cs.virginia.edu/~dgg6b/Mobile/Featured/featured.json")
    let parsedResponse = await response.json()
    console.log(parsedResponse)
    this.setState({
      featured: parsedResponse
    })
  }
  render() {
    var buttonText = this.state.isSet? 'Retrieved' : 'Get Stock Price';
    return (
      <View style={styles.container}>
        <Text style={{ marginTop: 10 }}>Real time stock price: {this.state.stock}</Text>
        <Button
          title={buttonText}
          onPress={() => this.click()}
        />
        <Text style={{ marginTop: 20 }}>Time tick example: {this.state.date.toLocaleTimeString()}</Text>
       
        <Text>Title: {this.state.featured.title}</Text>
        <Text>Author: {this.state.featured.author}</Text>
        <Button
          title="Go to HomeScreen"
          onPress={() => this.props.navigation.navigate('Home',  {
            stockValue: this.state.stock,
            otherParam: 'anything you want here',
            })}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      backgroundColor: '#C5FFED',
      alignItems: 'center',
      justifyContent: 'center',
      height: 40,
      width: 80,
    }
  }
)

