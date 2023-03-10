import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import CategoryScreen  from "../components/screens/category";
import DetailScreen  from "../components/screens/detail";
import HomeScreen  from "../components/screens/home";

const Stack = createNativeStackNavigator();

 const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Category" component={CategoryScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
