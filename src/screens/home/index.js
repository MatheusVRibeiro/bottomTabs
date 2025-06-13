import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './style';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela de Início</Text>
    </View>
  );
}