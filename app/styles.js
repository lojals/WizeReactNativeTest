import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  row: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#F6F6F6',
    flex:1
  },
  container: {
    flex:1,
    backgroundColor: '#282C34'
  },
  internalContainter: {
    flex: 1
  },
  userImage: {
    marginTop: 15,
    marginBottom: 15,
    width: 64,
    height: 64
  },
  textDescription: {
    fontStyle: 'italic'
  },
  textName:{
    fontStyle: 'normal',
    fontWeight: 'bold',
    marginBottom: 10
  },
  textCodID:{
    fontStyle: 'normal'
  },
  textWidthFixed:{
    width: 250,
    textAlign: 'center'
  }
});

module.exports = styles
