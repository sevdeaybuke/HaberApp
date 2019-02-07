import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import firebase from '@firebase/app';
import '@firebase/auth';
import "@firebase/database";
import { createStackNavigator, createAppContainer } from "react-navigation";
import LoginPage from './components/login';
import HomePage from './components/home';
import DetailPage from './components/detail';
console.disableYellowBox = true;

var config = {
    apiKey: "AIzaSyBUJaAxZLYluQzV4gBch9OEC2oaio28yWw",
    authDomain: "haberapp-b3303.firebaseapp.com",
    databaseURL: "https://haberapp-b3303.firebaseio.com",
    projectId: "haberapp-b3303",
    storageBucket: "haberapp-b3303.appspot.com",
    messagingSenderId: "620726159190"
  };
  firebase.initializeApp(config);

  const AppNavigator = createStackNavigator({
    Login: {
      screen: LoginPage
    },
    Home: {
        screen: HomePage
    },
    Detail : {
        screen: DetailPage
    }
  });
  export default createAppContainer(AppNavigator);