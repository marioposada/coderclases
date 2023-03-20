import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { CartScreen } from "../screens";
import { Platform } from "react-native";

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
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
          title: "Carrito de compras",
        }}
        name="Cart"
        component={CartScreen}
      />
    </Stack.Navigator>
  );
};

export default CartNavigator;
