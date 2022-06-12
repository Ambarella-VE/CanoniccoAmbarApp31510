import React from 'react';
import {
  View, 
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Dimensions
} from 'react-native';
import Theme from '../../constants/Theme';
import Ionicons from '@expo/vector-icons/Ionicons';

const InputBtn = ({
  value,
  placeholder,
  handleOnChangeText,
  handleOnPress
}) => {
  return (
    <View style={styles.view}>
        <TextInput
          value={value}
          style={styles.input}
          placeholder='Escribe una tarea'
          placeholderTextColor={Theme.colors.dark.primary}
          onChangeText={handleOnChangeText}
          onSubmitEditing={handleOnPress}
        />
        <TouchableHighlight 
          onPress={handleOnPress}
          style={styles.button}
        >
          <Ionicons name="add" size={32} color="white" />
        </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: 56,
    margin: 16
  },
  input: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Theme.colors.dark.primary,
    margin: 16,
    height: 56,
    width: Dimensions.get('window').width - 128,
    paddingHorizontal: 16,
    color: Theme.colors.dark.onSurface,
  },
  button: {
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'center',
    width:56,
    height:56,
    borderRadius:50,
    backgroundColor: Theme.colors.dark.primary,
  }
})

export default InputBtn;
