import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // Importando a biblioteca de ícones

// Importando suas telas
import HomeScreen from './src/screens/HomeScreen';
import SearchScreen from './src/screens/SearchScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
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
        })}
      >
        <Tab.Screen name="Início" component={HomeScreen} />
        <Tab.Screen name="Busca" component={SearchScreen} />
        <Tab.Screen name="Perfil" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}