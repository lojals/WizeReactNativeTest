import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Image, Navigator,  TouchableOpacity, NativeModules} from 'react-native';
import { Button, Text } from 'native-base';
import { CustomStatusBar } from '../CustomStatusBar';
import { DevelopersListView } from '../DevelopersListView';

export class TeamsListView extends Component {
  constructor(props) {
      super(props)
  }

  render() {
    let pic = {
          uri: 'https://funderbeam-706056.c.cdn77.org/logos/CO/wizeline.jpeg?1458073669'
        };

    return (
      <View style={styles.container}>
        <CustomStatusBar/>
        <View style={styles.internalContainter}>
          <Image source={pic} style={styles.WizeIcon}/>
          <Text style={styles.TextIntro}>Testing React-Native and trolling COD players</Text>
          <DevelopersListView navigator={this.props.navigator} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  internalContainter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  WizeIcon:{
    width:  100,
    height: 100
  },
  TextIntro:{
    width: 150,
    marginTop: 15,
    marginBottom: 15,
    textAlign: 'center'
  }
});
