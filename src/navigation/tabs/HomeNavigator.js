import React from 'react';
import {
  StyleSheet
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Theme
} from '../../styles/index'
import {
  Home,
} from '../../views/index'

const Stack = createNativeStackNavigator()

const HomeNavigator = () => {
  const stack = [{
    id: 1,
    name: 'Inicio',
    component: Home
  }]
  return (
    <Stack.Navigator
      initialRouteName = 'Inicio'
      screenOptions={{
        headerStyle: {
          backgroundColor: Theme.palette.color.primary
        },
        headerTintColor: Theme.palette.color.textPrimary,
        headerTitleStyle: Theme.fonts.titleLarge
      }}
    >
      {
        stack.map(stack => {
          <Stack.Screen 
            key={stack.id}
            name={stack.name}
            component={stack.component}
            />
        })
      }
    
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({})

export default HomeNavigator;
