import React from 'react';
import {
  StyleSheet
} from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from '@expo/vector-icons/Ionicons';
import {
  Theme
} from '../styles/index'
import {
  HomeNavigator,
  CategoriesNavigator,
  ProvidersNavigator
} from './tabs/index'

const BottomTabs = createBottomTabNavigator();

const LabelBottomTab = (focused, label) => (
    <Text style={{
        color: focused ? colors.primary : colors.secondary,
        fontFamily: focused ? 'Lato-Bold' : 'Lato-Regular',
    }}>{label}</Text>
)
const TabNavigator = () => {
  const tabs = [{
    id: 1,
    title: 'Inicio',
    component: HomeNavigator,
    icon: 'home-outline',
    iconFocused: 'home',
  },
  {
    id:2,
    title: 'Categorías',
    component: CategoriesNavigator,
    icon: 'cart-outline',
    iconFocused: 'cart',
  },
  {
    id:3,
    title: 'Proveedores',
    component: ProvidersNavigator,
    icon: 'file-tray-full-outline',
    iconFocused: 'file-tray-full'
  }
]
  return (
    <BottomTabs.Navigator 
            initialRouteName={tabs[0].title}
            screenOptions={({ route }) => ({
                headerShown: false,
            })}
        >
      {
        tabs.map(tab =>{
          <BottomTabs.Screen
          name={tab.title}
          key={tab.id}
          component={tab.component}
          options={{
            tabBarLabel: ({ focused }) => LabelBottomTab(focused,'Texto'),
            tabBarIcon: ({ focused }) => (
            <Ionicons
            name={
              focused ? tab.iconFocused : tab.icon
            }
            size={20}
            color={
              focused?
              Theme.palette.light.primary
              :Theme.palette.light.neutral
            }
            />
            ),
          }}
          />
        })
      }
    </BottomTabs.Navigator>
  );
}

const styles = StyleSheet.create({})

export default TabNavigator;
