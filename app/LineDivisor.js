import React, { Component } from 'react';
import { View } from 'react-native';

export class LineDivisor extends Component {

  render() {
    return (
      <View style ={{
        marginTop:       5,
        marginBottom:    5,
        width:           200,
        height:          1,
        backgroundColor: 'black'}}
      >
      </View>
    );
  }

}
