import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./components/Home";
import Mongagua from "./components/Mongagua";
import BeloHorizonte from "./components/BeloHorizonte";
import Vitoria from "./components/Vitoria";
import RioDeJaneiro from "./components/RioDeJaneiro";
import Curitiba from "./components/Curitiba";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#389174",
          },
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Mongagua" component={Mongagua} />
        <Stack.Screen name="BeloHorizonte" component={BeloHorizonte} />
        <Stack.Screen name="Vitoria" component={Vitoria} />
        <Stack.Screen name="RioDeJaneiro" component={RioDeJaneiro} />
        <Stack.Screen name="Curitiba" component={Curitiba} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
