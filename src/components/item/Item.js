import React, {
  useEffect
} from 'react';
import {
  View, 
  StyleSheet,
  Dimensions,
  Text
} from 'react-native';
import Theme from '../../constants/Theme'; 

const Item = ({ item }) => {

  useEffect(()=>{
    console.log(item);
  },[])
  
  return(
    <View style={styles.item}>
      <Text style={styles.text}>{item.title}</Text>
    </View>
  )

}

const styles = StyleSheet.create({
  item: {
    flex:1,
    backgroundColor: Theme.colors.dark.primary,
    marginVertical: 8,
    marginHorizontal: 16,
    width: Dimensions.get('window').width - 32,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
    padding: 16
  },
  text: {
    color: '#000',
    fontSize: 16,
    textAlign: 'left'
  },

})

export default Item;
