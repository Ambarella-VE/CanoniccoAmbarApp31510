import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  View, 
  StyleSheet,
  Text,
  Dimensions
} from 'react-native';

const TopAppBar = ({title}) => {
  return (
    <View style = {styles.view}>
      <Text style = {styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#cdcdcd',
    height: 64,
    width: Dimensions.get('window').width,
    marginTop: StatusBar.currentHeight,
    justifyContent: 'center',
    alignItems: 'space-between'
  },
  title: {
    fontSize: 22,
    fontFamily: 'NotoSans',
    color: '#000',
    alignSelf: 'center',
  },
  icon: {
    paddingVertical: 24,
    paddingHorizontal: 24,
    width: 24,
    height: 24,
    color: '#FFF'
  }
})

export default TopAppBar;
