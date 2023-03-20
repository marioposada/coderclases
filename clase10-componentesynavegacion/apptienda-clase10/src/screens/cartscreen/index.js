import { FlatList, Text, TouchableOpacity, View } from "react-native";
import react from "react";
import { styles } from "./styles";
import { CART } from "../../data/cart";
import { CartItem } from "../../components";
import { ScreenContainer } from "react-native-screens";

const CartScreen = ({ navigation, route }) => {

  const items = CART ;
  const total = 1200;

  const handlerConfirmCart = () => { console.log("Confirmar compra") }
  const handlerDeleteItem = () => { console.log("Eliminar item") }

  const renderItem = (data) => {
    <CartItem item={data.item} onDelete={handlerDeleteItem} />
  }


  return (
   <View style={styles.container}>
      <View style={styles.list}>
        <FlatList
          data={items}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.confirm} onPress={handlerConfirmCart}>
          <Text style={styles.confirmText}>Confirmar compra</Text>
          <View style={styles.total}>
            <Text style={styles.text}>Total: </Text>
            <Text style={styles.text}>${total}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>

  );
};

export default CartScreen;
