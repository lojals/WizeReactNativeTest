import React, { Component } from 'react';
import { Container, Header, Title, Icon, Button, View, Text, Content, Thumbnail} from 'native-base';
import { AppRegistry, StyleSheet, Image, Navigator, ListView, TouchableOpacity } from 'react-native';
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

      <Container style={{backgroundColor:'white'}} >
               <Header>
                   <Button transparent onPress={(event) => this._onPressButton()}>
                       <Icon name='ios-arrow-back' />
                   </Button>
                   <Title>Members</Title>
               </Header>
               <Content>
               <ListView
                 style               = {styles.internalContainter}
                 initialListSize     = {10}
                 dataSource          = {this.state.members}
                 renderRow           = {(member) => { return this._renderDeveloperRow(member) }}
                 renderSeparator     = {this._renderSeparator}
                 refreshable         = {true}
                 enableEmptySections = {true}/>
                 </Content>
           </Container>
    );
  }

  _onPressButton(){
    this.props.navigator.pop();
  }

  _renderDeveloperRow(data) {
      let pic = {  uri: data.picture };
      return (
        <TouchableOpacity style={styles.row}>
          <Thumbnail size={64} source={pic}/>
          <Text style={[styles.textName, styles.textWidthFixed]} >{data.name}</Text>
          <Text style={[styles.textCodID, styles.textWidthFixed]} >{data.codId}</Text>
          <LineDivisor/>
          <Text style={[styles.textDescription, styles.textWidthFixed]} >{data.description}</Text>
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
