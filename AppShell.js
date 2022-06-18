import React, {
  useState,
} from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  View, 
  StyleSheet,
} from 'react-native';
import { 
  TopAppBar 
} from './src/components/index';
import {
  BottomAppBar
} from './src/molecules/index';
import {
  Home,
  Categories,
  Cart
} from './src/views/index'

const AppShell = () => {
  const [content, setContent] = useState(<Home />);
  const [title, setTitle] = useState('Inicio');

  const buttons = [
    {
      label:'Inicio',
      content: <Home />
    },
    {
      label:'Categorías',
      content: <Categories />
    },
    {
      label:'Carrito',
      content: <Cart />
    }
  ]

  const handleOnPress = (title,content) => {
    setTitle(title)
    setContent(content)
  }
  
  return (
    <View style={styles.appShellContainer}>
      <TopAppBar
        title={title}
      />
      {content}
      <BottomAppBar
        buttons={buttons}
        handleOnPress={handleOnPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  appShellContainer: {
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: StatusBar.currentHeight,
  }
})

export default AppShell;
