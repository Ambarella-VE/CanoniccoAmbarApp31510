import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { 
  StyleSheet, 
  SafeAreaView,
  View,
  Dimensions,
  Keyboard,
  FlatList
} from 'react-native';
import Theme from './src/constants/Theme';
import {
  Home
} from './src/views/index'

export default function App() {
  const [value,setValue] = useState('')
  const [tasks, setTasks] = useState([]);

  const handleOnChangeText = (text) => {
    setValue(text);
    }
  
  const handleOnPress = () => {
    if(value!=''){
      const newTask = {
        title: value,
      }
      const newTasks = tasks;
      newTasks.push(newTask);
      setTasks(newTasks);	
      setValue('');
      }
      Keyboard.dismiss();
  }

  const renderItem = ( item ) => (
    <Item item={item.item} />
  );

  return (
    <SafeAreaView
      style={styles.container}
    >
      <StatusBar
      translucent
      animated
      style='auto'
      />
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flatList: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom: 8,
    },
  text: {
    color: Theme.colors.dark.onSurface
  },
  list:{
    marginVertical: 8,
    width: Dimensions.get('window').width,
    height: 'auto',
    flexGrow: 0
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: Theme.colors.dark.surface,
    alignItems: 'center',
    justifyContent: 'space-between',
  }
});
