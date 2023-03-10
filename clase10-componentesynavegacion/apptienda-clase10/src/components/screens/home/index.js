import { Button, Text, View } from "react-native";
import react from "react";
import { styles } from "./styles";

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>HomeScreen</Text>
        <Button title="Vamos a Categorias" onPress={() => navigation.navigate('Category')} />
        <Button title="Vamos a Detail" onPress={() => navigation.navigate('Detail')} />
    </View>
  );
};

export default Home;
