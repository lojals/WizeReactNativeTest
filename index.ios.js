import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Image } from 'react-native';
import { CustomStatusBar } from './app/CustomStatusBar';
import {Container, Content, Header, Title, Text, Icon, Button} from 'native-base';


class WizelineDemo extends Component {
  render() {
    let pic = {
          uri: 'https://funderbeam-706056.c.cdn77.org/logos/CO/wizeline.jpeg?1458073669'
        };

    return (
      <View style={styles.container}>
        <CustomStatusBar/>
        <View style={styles.internalContainter}>
          <Image source={pic} style={styles.WizeIcon}/>
          <Text>Testing React-Native and trolling COD players</Text>
          <Button block primary onPress={this._onPressButton}> Check out the team </Button>
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

AppRegistry.registerComponent('WizelineDemo', () => WizelineDemo);
