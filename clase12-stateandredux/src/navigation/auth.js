import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { AuthScreen } from "../screens/index";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Auth"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name="Auth"
                component={AuthScreen}
            />
        </Stack.Navigator>
    )
}

export default AuthNavigator;