import { Button, Text, View , Image} from "react-native";
import react from "react";
import { styles } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { addItem } from "../../store/actions/cart.actions";

const DetailScreen = () => {
  const dispatch = useDispatch();

  // const breadID = useSelector((state) => state.breads.selectedBread);
  // const breads = useSelector((state) => state.breads.filteredBreads);
  const bread = useSelector((state) => state.breads.selectedBread);


  const handlerAddItemCart = () => {
    dispatch(addItem(bread))
  };




  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri:bread.url}} />
      <Text>{bread.title}</Text>
      <Text>{bread.description}</Text>
      <Text>Año: {bread.anio}</Text>
      <Button  style={styles.button}  title="Agregar al carrito" onPress={handlerAddItemCart} />
      <Text>Actor Principal: {bread.actorPrincipal}</Text>
    </View>
  );
};

export default DetailScreen;
