import { FlatList, Text, TouchableOpacity, View } from "react-native";
import react from "react";
import { styles } from "./styles";
import { CartItem } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, confirmCart } from "../../store/actions/cart.actions";

const CartScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);

  const onDelete = (Id) => dispatch(removeItem(Id));

  const onConfirm = () => {
    dispatch(confirmCart(items, total));
  };

  // const renderItem = ({ item }) => {
  //   <CartItem item={item} onDelete={onDelete} />;
  // };

  const renderItem = ({ item }) => <CartItem item={item} onDelete={onDelete} />;

  return (
    <View style={styles.container}>
      <View style={styles.containerList}>
        <FlatList
          data={items}
          renderItem={renderItem}
          // style={styles.containerList}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          style={
            items.length === 0
              ? styles.disabledButtonConfirm
              : styles.buttonConfirm
          }
          onPress={onConfirm}
          disabled={items.length === 0}
        >
          <Text style={styles.textButtonConfirm}>Confirm</Text>
          <View style={styles.totalContainer}>
            <Text style={styles.totalTitle}>Total: </Text>
            <Text style={styles.total}>{total}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;
