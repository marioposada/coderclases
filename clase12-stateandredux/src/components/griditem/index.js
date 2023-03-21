import { Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./styles";

const GridItem = ({ item, onSelected }) => {
  return (
    <View style={{...styles.container, backgroundColor: item.color}}>
      <TouchableOpacity
        style={styles.contentContainer}
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
