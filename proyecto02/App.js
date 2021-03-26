import React, { Component } from 'react';
import { StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  Image,
  TextInput } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue: "",
      count: 0,
    };
  }

  changeTextInput = text => {
    this.setState({textValue: text});
  };

  onPress = () => {
    this.setState({
      count: this.state.count +1,
    });
  };

  render() {
    return(
      <View style = {styles.container}>
        <View style={styles.text}>
          <Text style={styles.text}>Hola Jose Cancino</Text>
        </View>
        <Image source={require('./img/react.png')} style={styles.img}></Image> 
        
        <TextInput
          style = {{height: 40, borderColor: 'green', borderWidth:5, width: 150, textAlign: 'center'}}
          onChangeText = {text => this.changeTextInput(text)}
          value = {this.state.textValue}
        /> 

        <TouchableOpacity style = {styles.button} onPress={this.onPress}>
          <Text style={styles.textb}>Presiona aqui</Text>
        </TouchableOpacity>
        <View style={[styles.countContainer]}>
          <Text style={[styles.countText]}>
            {this.state.count}
          </Text>
        </View>
      </View> 

    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 45,
    color: 'blue',
  },

  textb: {
    color: 'white',
    
  },
  
  button: {
    top: 10,
    color: 'white',
    borderColor: 'black',
    alignItems: 'center',
    backgroundColor: 'blue',
    padding: 10,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
  countText: {
    color: 'red',
  },   

  img:{
    maxWidth: 400,
    maxHeight: 400,
  },
});
