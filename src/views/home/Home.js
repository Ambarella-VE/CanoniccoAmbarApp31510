import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { 
  StyleSheet, 
  View,
  Dimensions,
  Keyboard,
  FlatList
} from 'react-native';
import Theme from '../../constants/Theme';
import {
  Item,
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
        toDo: true
      }
      const newTasks = tasks;
      newTasks.push(newTask);
      setTasks(newTasks);	
      setValue('');
      }
      Keyboard.dismiss();
  }

  const handleOnPressTask = (index) =>{
    const newTasks = [...tasks]
    const newTask = tasks[index]
    newTasks.splice(index,1)
    if (newTask.toDo){
      newTasks.push(newTask)
    } else {
      newTasks.unshift(newTask)
    }
    newTask.toDo = !newTask.toDo;
    setTasks(newTasks);
  }

  const handleOnDeleteTask = (index) =>{
    const newTasks = [...tasks]
    newTasks.splice(index,1)
    setTasks(newTasks);
  }

  const renderItem = ( {item, index} ) => (
    <Item 
      item={item} 
      index={index} 
      handleOnPressTask={handleOnPressTask}
      handleOnDeleteTask={handleOnDeleteTask}
    />
  );

  return (
    <View style={styles.container}>
      <View 
        style={styles.flatList}
      >
        <FlatList
          style={styles.list}
          data={tasks}
          renderItem={renderItem}
          keyExtractor={(item,index)=> index.toString()}
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
