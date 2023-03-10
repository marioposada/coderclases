import { Button, Text, View } from "react-native";
import react from "react";
import { styles } from "./styles";

const CategoryScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Category Screen</Text>
      <Button title="Vamos a Detalles" onPress={() => navigation.navigate('Detail')} />
    </View>
  );
};

export default CategoryScreen;