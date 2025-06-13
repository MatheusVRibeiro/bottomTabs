// src/navigation/index.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Importando suas telas da nova estrutura
import HomeScreen from '../screens/Home';
import SearchScreen from '../screens/Search';
import ProfileScreen from '../screens/Profile';

// Importando as opções de estilização
import { screenOptions } from './style';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Início" component={HomeScreen} />
      <Tab.Screen name="Busca" component={SearchScreen} />
      <Tab.Screen name="Perfil" component={ProfileScreen} />
    </Tab.Navigator>
  );
}