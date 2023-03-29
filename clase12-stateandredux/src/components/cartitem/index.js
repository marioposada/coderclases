import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";

const CartItem = ({ item, onDelete }) => {
  return (
    <View style={styles.container}>
      <Text numberOfLines={2} style={styles.title}>{item.name.substring(0,25)}</Text>
      <Text style={styles.quantity}>Quantity: {item.quantity}</Text>
      <TouchableOpacity onPress={() => onDelete(item.id)}>
        <Ionicons name="trash" size={24} color={"black"} />
      </TouchableOpacity>
    </View>
  );
};

export default CartItem;
