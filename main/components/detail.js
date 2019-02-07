import React from 'react';
import firebase from '@firebase/app';
import '@firebase/auth';
import "@firebase/database";
import { StyleSheet, Text, View,Dimensions,TextInput,TouchableOpacity,FlatList,ScrollView,Image } from 'react-native';
import { NavigationActions } from 'react-navigation'
const { width, height } = Dimensions.get('window');
console.disableYellowBox = true;

export default class DetailPage extends React.Component {
  state={
    info:{}
  }

componentDidMount()
{
  var ka = this.props.navigation.state.params.params
  this.setState({info:this.props.navigation.state.params.params});
}
  render() {
    return (
      <View style={{ flex:1 }}>
      <View style={{alignItems:'center',justifyContent:'center',marginTop:50}}>
        <Text style={{fontSize:40,fontWeight:'bold'}}>Haber-App</Text>
      </View>
      <Image
      source={{uri:this.state.info.photo}}
      style={{width:width,height:width*0.75,marginTop:10}}
      />
      <Text style={{fontSize:25,fontWeight:'bold',color:'red',marginTop:5}}>{this.state.info.name}</Text>
      <Text>{this.state.info.detail}</Text>
      </View>
    );
  }
}
