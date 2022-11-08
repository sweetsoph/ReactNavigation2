import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './components/Home';
import Mongagua from './components/Mongagua';
export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#389174',
      },
    }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Mongagua" component={Mongagua} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

