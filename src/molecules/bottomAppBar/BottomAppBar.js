import React from 'react';
import {
  View, 
  StyleSheet,
  Dimensions,
} from 'react-native';
import { 
  BottomAppBarItem 
} from '../../components/index';

const BottomAppBar = ({buttons,handleOnPress}) => {

  return (
    <View
      style={styles.container}
    >
      {buttons.map((button,index)=> {return <BottomAppBarItem key={index} button={button} handleOnPress={handleOnPress} />})
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: '#cdcdcd',
    width: Dimensions.get('window').width,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  }
})

export default BottomAppBar;
