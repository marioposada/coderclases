import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { OrdersScreen } from "../screens";


const Stack = createNativeStackNavigator();

const OrdersNavigator = () => {
    return(
        <Stack.Navigator 
            initialRouteName="Orders"
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
                name="Orders"
                component={OrdersScreen}
            />
        </Stack.Navigator>
    )
}

export default OrdersNavigator;
