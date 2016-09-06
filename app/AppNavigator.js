'use strict'
import React, { Component } from 'react';
import { StyleSheet, View, Image, Navigator } from 'react-native';
import DetailView from '../app/Views/DetailView'

class AppNavigator extends Component {

  _renderScene(route, navigator) {
    var globalNavigatorProps = { navigator }

    switch(route.ident) {
      case "DetailView":
        return (
          <DetailView {...globalNavigatorProps} />
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
        style={styles.navigatorStyles}
        renderScene={this._renderScene}
        configureScene={(route) => ({
          ...route.sceneConfig || Navigator.SceneConfigs.FloatFromRight })} />
    )
  }

}

const styles = StyleSheet.create({

  navigatorStyles: {

  }

})

module.exports = AppNavigator
