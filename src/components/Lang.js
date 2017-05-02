import React, { Component } from 'react';
import{
  View,
  Text,
  StyleSheet,
  Picker,
  TextInput,
  TouchableOpacity
} from 'react-native';
import ModalPicker from 'react-native-modal-picker';
import{
  Actions
} from 'react-native-router-flux';


class Lang extends Component{
  constructor() {
         super();

         this.state = {
             textInputValue: ''
         }
     }

  render(){

    let index = 0;
        const data = [
            { key: index++, label: 'Deutsch' },
            { key: index++, label: 'English' },
            { key: index++, label: 'Français' },

        ];

    return (
        <View style={styles.container}>
          <Text style={styles.text}>Please choose your language</Text>


                          <ModalPicker
                              data={data}
                              initValue="Click here to select"
                              onChange={(option)=>{ this.setState({textInputValue:option.label})}}>

                              <TextInput
                                  style={styles.langInput}
                                  editable={false}
                                  placeholder="Click here to select"
                                  value={this.state.textInputValue} />

                          </ModalPicker>

                          <TouchableOpacity
                          onPress={() =>{
                            Actions.welcome({
                              name: this.props.name,
                              lang: this.state.textInputValue
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
  color: '#000000',

},
button:{
  margin:40,
  marginTop:0,
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
  marginTop: -100,
  color: '#000000',
  marginLeft:40,
  fontSize:16
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
  container:{
    flex:1,
    justifyContent: "center",
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

export default Lang;
