import React, { Component } from 'react';
import{
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import{
  Actions
} from 'react-native-router-flux';

class Home extends Component{
  state = {
    name : "",
    last : "",
    number : "",
    company : "",
    cadress : "",
    cnumber : "",
    id : "",
  };
  render(){

    return(
      <View style={styles.group}>

      <Text style={styles.label}>Personal Information</Text>

      <View style={styles.undergroup}>

        <TextInput style={styles.input} placeholder="Name" onChangeText={(text)=>{
          this.setState({
            name:text
          })
        }}/>
        <TextInput style={styles.input} placeholder="Lastname" onChangeText={(text)=>{
          this.setState({
            last:text
          })
        }}/>
        <TextInput style={styles.input} placeholder="Number" onChangeText={(text)=>{
          this.setState({
            number:text
          })
        }}/>


        </View>
        <Text style={styles.label}>Company Information</Text>

        <View style={styles.undergroup}>

          <TextInput style={styles.input} placeholder="Name"
          onChangeText={(text)=>{
            this.setState({
              company:text
            })
          }}/>

          <TextInput style={styles.input} placeholder="Adress"
          onChangeText={(text)=>{
            this.setState({
              cadress:text
            })
          }}/>

          <TextInput style={styles.input} placeholder="Number"
          onChangeText={(text)=>{
            this.setState({
              cnumber:text
            })
          }}/>
        </View>
        <Text style={styles.label}>Identification</Text>

        <View style={styles.undergroup}>

          <TextInput style={styles.input} placeholder="ID"
          onChangeText={(text)=>{
            this.setState({
              id:text
            })
          }}/>
          </View>


        <TouchableOpacity
        onPress={() =>{
          Actions.lang({
            name: this.state.name,
            last: this.state.last,
            number: this.state.number,
            company: this.state.company,
            cadress: this.state.cadress,
            cnumber: this.state.cnumber,
            id: this.state.id,

          })
        }}
        >
          <Text style={styles.button}>Next Step</Text>
        </TouchableOpacity>
      </View>
    )

  }
}

var styles = StyleSheet.create({
  group:{
    backgroundColor:"#F2F2F2",
    flex:1,
  },
  undergroup:{
    marginTop:10,
    backgroundColor:"#FFFFFF",
  },
  title:{
    fontWeight:"bold",
    margin:20,
    marginBottom:10,
    fontSize:16,
  },
  label:{
    marginTop:20,
    marginLeft:20,
    fontSize:16
  },
  input:{
    height:40,
    borderWidth:1,
    borderColor:"#F7F7F7",
    paddingLeft:20,
    fontSize:14,
    color:"#000000"
  },
  button:{
    margin:20,
    fontSize:16,
    color:"#007AFF",
    textAlign: "right"
  }
})

export default Home;
