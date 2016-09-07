'use strict'
import React, { Component } from 'react';
import { StyleSheet, View, Navigator, Text } from 'react-native';
import { DetailView } from '../app/Views/DetailView'
import { TeamsListView } from '../app/Views/TeamsListView'

export class AppNavigator extends Component {

  _renderScene(route, navigator) {
    var globalNavigatorProps = { navigator }
    switch(route.ident) {
      case "TeamsListView":
      return (
        <TeamsListView  {...globalNavigatorProps}/>
      )
      case "DetailView":
        return (
          <DetailView  {...globalNavigatorProps} team={route.team}/>
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
          ...route.sceneConfig || Navigator.SceneConfigs.PushFromRight })}/>
    )
  }
}

const styles = StyleSheet.create({
  navigatorStyles: {

  }
})
