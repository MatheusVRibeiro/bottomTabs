// src/navigation/style.js
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

export const screenOptions = ({ route }) => ({
  // Define o ícone para cada aba
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    if (route.name === 'Início') {
      iconName = focused ? 'home' : 'home-outline';
    } else if (route.name === 'Busca') {
      iconName = focused ? 'search' : 'search-outline';
    } else if (route.name === 'Perfil') {
      iconName = focused ? 'person' : 'person-outline';
    }

    // Retorna o componente de ícone
    return <Ionicons name={iconName} size={size} color={color} />;
  },
  // Define a cor da aba ativa e inativa
  tabBarActiveTintColor: '#c50000', // Um tom de vermelho para a aba ativa
  tabBarInactiveTintColor: 'gray',
  // Estilo da barra de abas
  tabBarStyle: {
    paddingBottom: 5,
    paddingTop: 5,
    height: 80,
  },
  // Estilo do rótulo da aba
  tabBarLabelStyle: {
    fontSize: 12,
  },
  // Estilo do cabeçalho
  headerStyle: {
    backgroundColor: '#f8f8f8',
  },
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerTitleAlign: 'center', // Centraliza o título do cabeçalho
});