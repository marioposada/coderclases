import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Platform , StyleSheet, View, Text} from "react-native";

import ShopNavigator from "./shopstack";
import CartNavigator from "./cartstack";


const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="ShopTab"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tab.Screen
        name="ShopTab"
        component={ShopNavigator}
        options={{
          title: "Mi Panaderia",
          tabBarIcon: ({ focused }) => (
            <View style={styles.item}>
              <Ionicons
                name="home"
                size={24}
                color={focused ? "#e32f45" : "#748c94"}
              />
              <Text style={{ color: focused ? "#e32f45" : "#748c94" }}>
                Shop
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="CartTab"
        component={CartNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.item}>
              <Ionicons
                name="cart"
                size={24}
                color={focused ? "#e32f45" : "#748c94"}
              />
              <Text style={{ color: focused ? "#e32f45" : "#748c94" }}>
                Cart
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    shadowColor: "#7f5df0",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
    position: "absolute",
    bottom: 25,
    left: 20,
    right: 20,
    borderRadius: 15,
    height: 90,
  },
  item: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Tabs;
