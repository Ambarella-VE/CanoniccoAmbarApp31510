import React from 'react';
import {
  View, 
  StyleSheet
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Theme
} from '../../styles/index'
import {
  Providers,
} from '../../views/index'

const Stack = createNativeStackNavigator()

const ProvidersNavigator = () => {
  const stack = [{
    id: 1,
    name: 'Proveedores',
    component: Providers
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

export default ProvidersNavigator;
