import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Image, Navigator } from 'react-native';
import { CustomStatusBar } from '../CustomStatusBar';
import {Container, Content, Header, Title, Text, Icon, Button} from 'native-base';
import { DevelopersListView } from '../DevelopersListView';
import AppNavigator from '../AppNavigator'

class WizelineDemo extends Component {
  render() {
    let pic = {
          uri: 'https://funderbeam-706056.c.cdn77.org/logos/CO/wizeline.jpeg?1458073669'
        };

    return (
      <View style={styles.container}>
        <CustomStatusBar/>
        <View style={styles.internalContainter}>
          <DevelopersListView/>
        </View>
      </View>
    );
  }

  _onPressButton(){
    console.log("Hola mundo");
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#282C34'
  },
  internalContainter: {
    margin: 30,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  WizeIcon:{
    width:  100,
    height: 100
  }
});
