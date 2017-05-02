import React, { Component } from 'react';
import{
  View,
  Text,
  StyleSheet,
  Picker,
  TextInput,
  TouchableOpacity,
  Image,
  ListView
} from 'react-native';
import Swiper from 'react-native-swiper';
import ModalPicker from 'react-native-modal-picker';
import{
  Actions
} from 'react-native-router-flux';



class Projects extends Component{
  constructor(props){
      super()
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
      this.state = {
      dataSource: ds.cloneWithRows([['Projet 1','Nom 1'], ['Projet 1','Nom 1'], ['Projet 1','Nom 1'], ['Projet 1','Nom 1'], ['Projet 1','Nom 1'], ['Projet 1','Nom 1'], ['Projet 1','Nom 1']])
      }
  }

  render(){


    return (

        <View >

        <ListView
        dataSource={this.state.dataSource} renderRow={(rowData) => <View style={styles.list}><Text style={{fontWeight: "bold"}}> {rowData[0]}</Text><Text> {rowData[1]}</Text></View>}
        />

        </View>
    )
  }
}

var styles = StyleSheet.create({

title: {
  color: '#000000',
  fontSize:18,
  fontWeight: "bold",
  textAlign:"center",
  marginBottom: 20,

},
list:{
  padding:20,
  borderTopWidth:1,
  borderTopColor: "#F2F2F2"
}
});

export default Projects;
