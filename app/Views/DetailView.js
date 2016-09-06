import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Image, Navigator, Text, ListView, TouchableOpacity } from 'react-native';
import { CustomStatusBar } from '../CustomStatusBar';
import { DevelopersListView } from '../DevelopersListView';
import { LineDivisor } from '../LineDivisor';
import styles from '../styles'

export class DetailView extends Component {
  constructor(props) {
      super(props)
      var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2})
      this.state = {
        members: ds.cloneWithRows(props.team)
      }
  }

  render() {
    return (
      <View style ={styles.container}>
        <CustomStatusBar/>
        <ListView
          style               = {styles.internalContainter}
          initialListSize     = {10}
          dataSource          = {this.state.members}
          renderRow           = {(member) => { return this._renderDeveloperRow(member) }}
          renderSeparator     = {this._renderSeparator}
          refreshable         = {true}
          enableEmptySections = {true}/>
      </View>
    );
  }

  _renderDeveloperRow(data) {
      let pic = {
          uri: 'https://funderbeam-706056.c.cdn77.org/logos/CO/wizeline.jpeg?1458073669'
      };
      return (
        <TouchableOpacity style={styles.row}>
          <Image source={pic} style={styles.userImage}/>
          <Text style={styles.textName} >{data.name}</Text>
          <Text style={styles.textCodID} >{data.codId}</Text>
          <LineDivisor/>
          <Text style={styles.textDescription} >{data.description}</Text>
        </TouchableOpacity>
      );
  }

  _renderSeparator(sectionID: number, rowID: number, adjacentRowHighlighted: bool) {
     return (
       <View
        key={`${sectionID}-${rowID}`}
        style={{ height: adjacentRowHighlighted ? 4 : 1,
         backgroundColor: adjacentRowHighlighted ? '#3B5998' : '#CCCCCC'}}
         />
     );
   }
}
