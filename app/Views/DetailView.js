import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Image, Navigator, Text } from 'react-native';
import { CustomStatusBar } from '../CustomStatusBar';
import { DevelopersListView } from '../DevelopersListView';

export class DetailView extends Component {
  constructor(props) {
      super(props)
  }

  render() {
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
  }
});
