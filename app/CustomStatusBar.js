import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export class CustomStatusBar extends Component {
  render(){
    return (
      <View style={CustomStatusBarStyle.StatusBar}></View>
    );
  }
}

const CustomStatusBarStyle = StyleSheet.create({
  StatusBar: { height:20, backgroundColor:'#EA3D46'}
});
