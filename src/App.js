import React, { Component } from 'react';
import Home from './components/Home'
import Lang from './components/Lang'
import Welcome from './components/Welcome'
import Projects from './components/Projects'
import {
  Router,
  Scene
} from 'react-native-router-flux';
import{

  StyleSheet,

} from 'react-native';

//var Firebase = require('../firebase');

class App extends Component{
  // constructor(props){
  //   super(props);
  //   var myFirebase = new Firebase('https://todo-f5302.firebaseio.com');
  //   myFirebase.set({
  //     title: 'Hello',
  //     author: 'Alexandra',
  //
  //   })
  // }
  render(){

    return(
      <Router navigationBarStyle={styles.navBar} titleStyle={styles.navTitle}>
        <Scene key="root" style={{paddingTop:64}}>
          <Scene key="home" component={Home} title="General configuration"/>
          <Scene key="lang" component={Lang} title="General configuration"/>
          <Scene key="welcome" component={Welcome} title="Welcome"/>
          <Scene key="projects" component={Projects} title="Projects"/>
        </Scene>
      </Router>
    )

  }
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: 'white', // changing navbar color
  },
  navTitle: {
    fontWeight: 'bold', // changing navbar color
    fontSize:16
  },
})

export default App;
console.disableYellowBox = true;
