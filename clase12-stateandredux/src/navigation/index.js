import { NavigationContainer } from "@react-navigation/native";

import TabNavigator from "./tabs";

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
