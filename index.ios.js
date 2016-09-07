import React, { Component } from 'react';
import { AppRegistry }      from 'react-native';
import { AppNavigator }     from './app/AppNavigator'

class WizelineDemo extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <AppNavigator initialRoute={{ident: "TeamsListView"}} />
    );
  }
}

AppRegistry.registerComponent('WizelineDemo', () => WizelineDemo);
