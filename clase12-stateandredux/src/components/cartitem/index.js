import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";

 const CartItem = ({ item, onDelete }) => {
    return (
        <View style={styles.item}>
        <View style={styles.detail}>
            <Text style={styles.header}>{item.product.title}</Text>
            <Text style={styles.text}>Cantidad: {item.quantity}</Text>
            <Text style={styles.text}>Precio: ${item.product.price}</Text>
        </View>
        <TouchableOpacity onPress={onDelete}>
            <Ionicons name="trash" size={24} color="#e32f45" />
        </TouchableOpacity>
        </View>
    );
    };

export default CartItem;
