import { Button, Text, View } from "react-native";
import react from "react";
import { styles } from "./styles";

const DetailScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
    <Text style={styles.text}>Detail Screen</Text>
    <Button title="Volvamos al Home" onPress={() => navigation.navigate('Home')} />
  </View>
  );
};

export default DetailScreen;