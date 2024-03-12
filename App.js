import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LogoScreen from "./LogoScreen";
import MedicineListScreen from "./MedicineListScreen";
import MedicineDetailScreen from './MedicineDetailScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LogoScreen" headerMode="none">
        <Stack.Screen name="LogoScreen" component={LogoScreen} />
        <Stack.Screen name="MedicineList" component={MedicineListScreen} />
        <Stack.Screen name="MedicineDetail" component={MedicineDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
