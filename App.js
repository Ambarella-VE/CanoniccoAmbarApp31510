import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  SafeAreaView,
  TextInput,
  View,
  Dimensions,
  Button,
  Keyboard,
  FlatList
} from 'react-native';
import Theme from './src/constants/Theme';
import {
  Item,
} from './src/components/index'

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
      console.log(tasks);
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
      <View
        style={styles.appBar.view}
      >
        <Text>Tareas</Text>
      </View>
      <View 
        style={styles.flatList}
      >
        <FlatList
          style={styles.list}
          data={tasks}
          renderItem={renderItem}
          keyExtractor={(i,index)=> index}
        />
      </View>
      <View style={styles.view}>
        <TextInput
          value={value}
          style={styles.input}
          onChangeText={handleOnChangeText}
        />
        <Button 
          title='+'
          onPress={handleOnPress}
          style={styles.button}
        />
      </View>
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
  appBar:{
    view:{
      height: 80,
      backgroundColor: Theme.colors.dark.primary,
      width: Dimensions.get('window').width,
      justifyContent: 'flex-end',
      alignItems: 'center',
      padding:8
    },
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
  },
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
    margin: 0,
    padding: 56,
    borderRadius:50
  }
});
