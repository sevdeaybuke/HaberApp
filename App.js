import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import firebase from '@firebase/app';
import '@firebase/auth';
import "@firebase/database";

var config = {
  apiKey: "AIzaSyBUJaAxZLYluQzV4gBch9OEC2oaio28yWw",
  authDomain: "haberapp-b3303.firebaseapp.com",
  databaseURL: "https://haberapp-b3303.firebaseio.com",
  projectId: "haberapp-b3303",
  storageBucket: "haberapp-b3303.appspot.com",
  messagingSenderId: "620726159190"
};
firebase.initializeApp(config);

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native and firebase!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
