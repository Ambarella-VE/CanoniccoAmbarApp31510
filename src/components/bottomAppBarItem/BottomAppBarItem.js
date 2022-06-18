import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableHighlight
} from 'react-native';

const BottomAppBarItem = ({button,handleOnPress}) => {
  return (
    <TouchableHighlight
      onPress={()=>handleOnPress(button.label,button.content)}
    >
      <View
      style={styles.container}
      >
          <Text style={styles.text}>
            {button.label}
          </Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
  }
})

export default BottomAppBarItem;
