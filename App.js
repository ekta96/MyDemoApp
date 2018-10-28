import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet , Image } from 'react-native'

class Inputs extends Component {
   state = {
    input1: '',
    input2: ''
   }
   handleInput1 = (text) => {
    this.setState({ input1:parseInt(text) })
 }
 handleInput2 = (text) => {
  this.setState({ input2: parseInt(text) })
}
SUM = (input1, input2) => {
 var add=input1+input2
  alert( input1 + ' + ' + input2 +' = '+ add )
}
   render() {
      return (
         <View style = {styles.container}>
            <Text style={styles.titleText}>Add the numbers</Text>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "INPUT 1"
               placeholderTextColor = "#7497d2"
               autoCapitalize = "none"
               keyboardType='numeric'
               onChangeText = {this.handleInput1}/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "INPUT 2"
               keyboardType='numeric'
                placeholderTextColor = "#7497d2"
               autoCapitalize = "none"
               onChangeText = {this.handleInput2}/>
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.SUM(this.state.input1, this.state.input2)
               }>
               <Text style = {styles.submitButtonText}> SUM  </Text>
            </TouchableOpacity>
         </View>
      )
   }
}
export default Inputs

const styles = StyleSheet.create({
   container: {
      paddingTop: 75,
      flex: 1,
      backgroundColor: '#fff',
   },
   titleText: {
    paddingLeft: 75,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#49679a'
  },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#49679a',
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: '#7497d2',
      padding: 10,
      margin: 15,
      justifyContent: 'center',
      alignItems: 'center',
      height: 40,

   },
   submitButtonText:{
      color: 'white'
   }
})