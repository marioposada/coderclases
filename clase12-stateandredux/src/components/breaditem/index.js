import { Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./styles";

const BreadItem = ({ item, onSelected }) => {
  return (
    <TouchableOpacity onPress={() => onSelected(item)}>
      <View style={styles.breadItem}>
        <View>
          <Text style={styles.title}>{item.name}</Text>
        </View>
        <View>
          <Text style={styles.details}>{item.price}</Text>
          <Text style={styles.details}>{item.weight}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BreadItem;
