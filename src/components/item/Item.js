import React, {
  useState,
  useEffect,
} from 'react';
import {
  View, 
  StyleSheet,
  Dimensions,
  Text,
  TouchableWithoutFeedback
} from 'react-native';
import Theme from '../../constants/Theme'; 

const Item = ({ 
  item,
  index,
  handleOnPressTask,
  handleOnDeleteTask
}) => {

  const [textDecorationLine, setTextDecorationLine] = useState('none');

  useEffect(() => {
    if(item.toDo){
      setTextDecorationLine('none');
    }else{
      setTextDecorationLine('line-through');
    }
  }, [item.toDo]);

  const styles = StyleSheet.create({
    view: {
      height:80,
      flex:1,
      backgroundColor: Theme.colors.dark.primary,
      marginVertical: 8,
      marginHorizontal: 16,
      width: Dimensions.get('window').width - 32,
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      padding: 16,
      borderRadius:16,
  
  
    },
    text: {
      color: Theme.colors.dark.onSurface,
      fontSize: 16,
      textAlign: 'left',
      textDecorationLine: textDecorationLine,
    },
  
  })
  
  return(
    <View style={styles.view}>
      <TouchableWithoutFeedback
        onPress={()=>handleOnPressTask(index)}
      >
        <Text style={styles.text}>{item.title}</Text>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback 
      style={styles.text}
      onPress={()=>handleOnDeleteTask(index)}
      >
        <Text>Eliminar</Text>
      </TouchableWithoutFeedback>
    </View>
  )

}




export default Item;