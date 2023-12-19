import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MyTabs from "../components/Navigators/MyTabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function AppNavigation() {
  function MyStack() {
    return (
      <Stack.Navigator
        screenOptions={({ route }) => ({
          // tabBarLabel: getTabBarLabel(route),
          // tabBarIcon: getTabBarIcon(route),
          headerShown: false,
        })}
      >
        <Stack.Screen name="Tabs" component={MyTabs} />
      </Stack.Navigator>
    );
  }
  
  return (
    <NavigationContainer independent={true}>
      <MyStack />
    </NavigationContainer>
  );
}
