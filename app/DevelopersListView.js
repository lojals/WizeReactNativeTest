import React, { Component } from 'react';
import { StyleSheet, View, Text, ListView, TouchableOpacity } from 'react-native';
import api from './api';

export class DevelopersListView extends Component {
  constructor(props){
    super(props)

    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2})
    this.state = {
      developers: ds.cloneWithRows([])
    }
  }

  componentWillMount(){
      api.getTeamsFromApiAsync().then((res) => {
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2})
        this.setState({ developers: ds.cloneWithRows(res) });
      });
  }

  render(){
    return (
      <View >
        <ListView
          style               = {{margin: 15}}
          initialListSize     = {10}
          dataSource          = {this.state.developers}
          renderRow           = {(developer) => { return this._renderDeveloperRow(developer) }}
          refreshable         = {true}
          renderSeparator     = {this._renderSeparator}
          enableEmptySections = {true}/>
      </View>
    );
  }

  _renderDeveloperRow(data) {
      return (
        <TouchableOpacity style={styles.row} onPress={(event) => this._onPressButton(data.members) }>
          <Text>{data.name}</Text>
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

   _onPressButton(team){
     this.props.navigator.push({
      ident: "DetailView",
      team:  team
    });
   }
}

const styles = StyleSheet.create({
  row: {
      flexDirection: 'row',
      justifyContent: 'center',
      padding: 10,
      backgroundColor: '#F6F6F6',
      flex:1
    },
    thumb: {
      width: 64,
      height: 64,
    },
    text: {
      flex: 1,
    }
});
