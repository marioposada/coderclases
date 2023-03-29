import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { CategoryScreen } from "../screens";
import { DetailScreen } from "../screens";
import { HomeScreen } from "../screens";
import { Platform } from "react-native";

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === "android" ? "#f4511e" : "",
        },
        headerTintColor: Platform.OS === "android" ? "white" : "#f4511e",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        options={{
          title: "NetliFix",
        }}
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen
        name="Category"
        component={CategoryScreen}
        options={({ route }) => ({ title: route.params.name })}
      />
      <Stack.Screen name="Detail" component={DetailScreen}
      options={({ route }) => ({ title: route.params.name })}
      />
    </Stack.Navigator>
  );
};

export default ShopNavigator;
