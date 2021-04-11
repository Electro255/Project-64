import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';
import dictionary from '../database';

export default class Homescreen extends Component{
   <View style={styles.outputContainer}>
     <Text style={{fontSize : 20}}>
       {
         this.state.isSearchPressed && this.state.word === "Loading..."
         ?this.state.word
         :""
       }
     </Text>
    </View>

    <View style={styles.detailsContainer}>
      <Text style={styles.details.Title}>
        Word : {""}
      </Text>
      <Text style={{fontSize : 18}}>
        {this.state.word}
      </Text>
    </View>

    <View style={styles.detailsContainer}>
      <Text style={styles.detailsTitle}>
        Type : {""}
      </Text>
      <Text style={{fontSize : 18}}>
        {this.state.lexicalCategory}
      </Text>
    </View>

    getWord = (text) => {
      var text = text.toLowerCase()
      try{
        var word = dictionary [text] ["word"]
        var lexicalCategory = dictionary [text] ["lexicalCategory"]
        var definition = dictionary [text] ["definition"]

        this.setState({
          "word" : word,
          "lexicalCategory" : lexicalCategory,
          "definition" : definition
        })
      }
      catch(err) {
        alert("Sorry This word is not available for now")
        this.setState({
          'text' : '',
          'isSearchPressed' : false
        })
      }
    }
}

const styles = StyleSheet.create({
  container: {
    flex : 1
  },
  inputBoxContainer: {
    flex : 0.3,
    alignItems : 'center',
    justifyContent : 'center'
  },
  inputBox : {
    width : '80%',
    alignSelf : 'center',
    height : 40,
  }
})