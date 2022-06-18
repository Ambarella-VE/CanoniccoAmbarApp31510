import React, {
  useEffect
} from 'react';
import {
  View, 
  StyleSheet,
  Dimensions,
  Text,
  TouchableHighlight,
} from 'react-native';
import Theme from '../../constants/Theme'; 

const Category = ({ 
  categories
}) => {

  const styles = StyleSheet.create({
    view: {
      height:80,
      backgroundColor: Theme.colors.dark.primary,
      marginVertical: 8,
      marginHorizontal: 16,
      width: Dimensions.get('window').width - 32,
      padding: 16,
      borderRadius:16,
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1
    },
    text: {
      color: Theme.colors.dark.onSurface,
      fontSize: 16,
      fontFamily: 'NotoSansBold',
      textAlign: 'center',
    },
  
  })
  
  return(
    <TouchableHighlight onPress={()=>{}}>
      <View style={styles.view}>
        <Text style={styles.text}>{categories.item.label}</Text>
      </View>
    </TouchableHighlight>
  )

}

export default Category;