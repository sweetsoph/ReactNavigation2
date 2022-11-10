import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./components/Home";
import SaoPaulo from "./components/SaoPaulo";
import Fortaleza from "./components/Fortaleza";
import Vitoria from "./components/Vitoria";
import RioDeJaneiro from "./components/RioDeJaneiro";
import Curitiba from "./components/Curitiba";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="São Paulo" component={SaoPaulo} />
        <Stack.Screen name="Fortaleza" component={Fortaleza} />
        <Stack.Screen name="Vitória" component={Vitoria} />
        <Stack.Screen name="Rio de Janeiro" component={RioDeJaneiro} />
        <Stack.Screen name="Curitiba" component={Curitiba} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
