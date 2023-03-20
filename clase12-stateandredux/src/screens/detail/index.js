import { Button, Text, View } from "react-native";
import react from "react";
import { styles } from "./styles";

const DetailScreen = ({ route }) => {
  const { id, title, description, price, weight } = route.params.data;
  return (
    <View style={styles.container}>
      <Text>id: {id}</Text>
      <Text>{title}</Text>
      <Text>{description}</Text>
      <Text>${price}</Text>
      <Text>weight: {weight}</Text>
    </View>
  );
};

export default DetailScreen;
