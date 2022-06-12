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

  
  return(
    <View style={styles.view}>
      <Text style={styles.text}>{item.title}</Text>
      <View style={styles.text}>
        <Text>Icon</Text>
      </View>
    </View>
  )

}

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
    textAlign: 'left'
  },

})

export default Item;
