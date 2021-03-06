import React from "react";
// import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Restaurant from "../screens/Restaurant";
import Tabs from "./tabs";
// import Header from "../screens/header";

const Stack = createStackNavigator();
const Rootnavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          // header: () => <Header />,
        }}
        initialRouteName={"Home"}
      >
        <Stack.Screen name="Home" component={Tabs} />
        <Stack.Screen name="Restaurant" component={Restaurant} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Rootnavigation;

// const styles = StyleSheet.create({});
