import { Button, Text, View } from "react-native";
import react from "react";
import { styles } from "./styles";
import { useSelector } from "react-redux";

const DetailScreen = () => {
  const bread = useSelector((state) => state.breads.selectedBread);

  return (
    <View style={styles.container}>
      <Text>id: {bread.id}</Text>
      <Text>{bread.title}</Text>
      <Text>{bread.description}</Text>
      <Text>${bread.price}</Text>
      <Text>weight: {bread.weight}</Text>
    </View>
  );
};

export default DetailScreen;
