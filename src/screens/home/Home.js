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
import Theme from '../../constants/Theme';
import {
  Item,
  TopAppBar,
  InputBtn
} from '../../components/index'

export default function Home() {
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
    <View
    >
      <TopAppBar />
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
      <InputBtn
        value={value}
        placeholder='Escribe una tarea'
        handleOnChangeText={handleOnChangeText}
        handleOnPress={handleOnPress}
      />
    </View>
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
