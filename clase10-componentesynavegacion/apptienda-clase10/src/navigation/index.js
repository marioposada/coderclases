import { NavigationContainer } from "@react-navigation/native";

import HomeStack from "./home";

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
};

export default AppNavigator;