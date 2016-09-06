'use strict'
import React, { Component } from 'react';
import { StyleSheet, View, Navigator, Text } from 'react-native';
import { DetailView } from '../app/Views/DetailView'
import { TeamsListView } from '../app/Views/TeamsListView'

class AppNavigator extends Component {

  _renderScene(route, navigator) {
    var globalNavigatorProps = { navigator }
    switch(route.ident) {
      case "TeamsListView":
      return (
        <TeamsListView  navigator={navigator} test="HOLA MUNDO"/>
      )
      case "DetailView":
        return (
          <DetailView  navigator={navigator}/>
        )
      default:
        return (
          <Text>{`YO YOU MESSED SOMETHING UP ${route}`}</Text>
        )
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={this.props.initialRoute}
        ref="appNavigator"
        renderScene={this._renderScene}
        configureScene={(route) => ({
          ...route.sceneConfig || Navigator.SceneConfigs.FloatFromRight })}/>
    )
  }
}

const styles = StyleSheet.create({

  navigatorStyles: {

  }

})

module.exports = AppNavigator
