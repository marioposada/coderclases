import { FlatList, View, Text } from "react-native";
import react from "react";
import { styles } from "./styles";
import { GridItem } from "../../components";

import { categories } from "../../data/categories";

const Home = ({ navigation }) => {
  const handleSelectedCategory = (item) => {
    navigation.navigate("Category", {
      categoryId: item.id,
      name: item.title,
    });
  };

  const renderGridItem = ({ item }) => 
    <GridItem item={item} onSelected={handleSelectedCategory} />


  return (
    <FlatList
      data={categories}
      renderItem={renderGridItem}
      numColumns={2}
      keyExtractor={(item) => item.id.toString()}
      style={styles.containerList}
    />
  );
};

export default Home;
