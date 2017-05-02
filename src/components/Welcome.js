import React, { Component } from 'react';
import{
  View,
  Text,
  StyleSheet,
  Picker,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
import Swiper from 'react-native-swiper';
import ModalPicker from 'react-native-modal-picker';
import{
  Actions
} from 'react-native-router-flux';


class Greeting extends Component {
  constructor(props){
    super(props)

    if (this.props.lang  == "Français") {
       main = "Bonjour "+this.props.name+"!"
    } else if (this.props.lang == "English"){
      main = "Hello "+this.props.name+"!"
    }else if (this.props.lang == "Deutsch"){
      main = "Gutentag "+this.props.name+"!"
    }else{
      main = "No language selected"
    }
  }
  render() {
    return (
      <Text style={styles.centerTitle}>{main}</Text>
    );
  }
}

class Welcome extends Component{

  render(){


    return (
      <Swiper style={styles.wrapper} loop={false}>
        <View style={styles.slide1}>
          <View style={styles.box} >
            <Greeting name={this.props.name} lang={this.props.lang}/>

          </View>
          <View style={styles.swipeBox} >
            <Text style={styles.swipe}>Swipe to continue</Text>
          </View>
        </View>
        <View style={styles.slide2}>
        <Text style={styles.title}>
          What is Build ?
        </Text>
          <Text style={styles.text}>
            A catalogue of Fiori prototypes to reference and to remix to fit YOUR end users’ needs. Use it to find the best UX patterns for your designs and to help build high fidelity prototypes in minutes.{"\n"}{"\n"}
            Create clickable mockups of your application from your sketches. Then turn them into refined prototypes and bring them to life by dragging and dropping real SAP UI5 elements.
          </Text>

          <TouchableOpacity
          onPress={() =>{
            Actions.projects({
            })
          }}
          >
            <Text style={styles.button}>Start using BUILD</Text>
          </TouchableOpacity>
        </View>
      </Swiper>
    )
  }
}

var styles = StyleSheet.create({
  wrapper: {
},
langInput: {
  borderWidth:1,
  borderColor:'#ccc',
  padding:10,
  height:30,
  margin:40,
  marginTop:20,
  borderRadius:5,
  fontSize:14,
  color: '#007AFF',

},
button:{
  margin:20,
  marginRight:40,
  fontSize:16,
  color:"#007AFF",
  textAlign: "right"
},
slide1: {
  flex: 1,
},
slide2: {
  flex:1,
  justifyContent: "center",
},
text: {
  color: '#000000',
  margin:40,
  marginTop:0,
  textAlign:"justify",
  fontSize:14
},
title: {
  marginTop: -100,
  color: '#000000',
  fontSize:18,
  fontWeight: "bold",
  textAlign:"center",
  marginBottom: 20,

},
  box:{
    flex:2,
    justifyContent: "center",
    alignItems: "center"
  },
  swipeBox:{
    flex:1,
    justifyContent: "center",
    alignItems: "center"
  },
  swipe:{
    color:"#C7C7C7",
    fontSize:18
  },
  centerTitle:{
    color:"#007AFF",
    textAlign: "center",
    fontSize: 35,

  },
});

export default Welcome;
