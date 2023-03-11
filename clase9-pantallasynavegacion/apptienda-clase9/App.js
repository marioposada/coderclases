import { ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";
import AppNavigator from "./src/navigation";

export default function App() {

  const [loaded] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
  });

  if (!loaded) {
    return <ActivityIndicator />;
  }

  return <AppNavigator />;
}
