import { Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./styles";

const GridItem = ({ item, onSelected }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        styles={{...styles.contentContainer, backgroundColor: item.color}}
        onPress={() => onSelected(item)}
      >
        <View>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default GridItem;
