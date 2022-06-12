import React,
{
  useEffect
} from 'react';
import {
  View, 
  StyleSheet,
  Dimensions,
  Text,
  StatusBar
} from 'react-native';
import Theme from '../../constants/Theme';

const TopAppBar = () => {

  return (
    <View
        style={styles.view}
      >
        <Text style={styles.text}>Tareas</Text>
    </View>
  );
}

const height = StatusBar.currentHeight + 64

const styles = StyleSheet.create({
  view:{
      height: height,
      backgroundColor: Theme.colors.dark.primary,
      width: Dimensions.get('window').width,
      justifyContent: 'center',
      alignItems: 'center',
      padding:8
    },
    text:{
      marginTop: StatusBar.currentHeight,
      color:'white',
      fontSize:22,
      textAlign:'center'
      }
  })

export default TopAppBar;
