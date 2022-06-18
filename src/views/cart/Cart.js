import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  View,
  Dimensions,
  FlatList
} from 'react-native';
import Theme from '../../constants/Theme';
import {
  Category
} from '../../components/index'

export default function Cart() {

  const categories = [
    {
      label: 'Item 1',
    },
    {
      label: 'Item 2',
    },
  ];

  const renderItem = ( categories ) => (
    <Category 
    categories={categories} 
    />
  );

  return (
    <View style={styles.container}>
      <View 
        style={styles.flatList}
      >
        <FlatList
          style={styles.list}
          data={categories}
          renderItem={renderItem}
          keyExtractor={(category,index)=> index.toString()}
        />
      </View>
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
