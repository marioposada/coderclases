import { FlatList, View, Text } from "react-native";
import react from "react";
import { styles } from "./styles";
import { GridItem } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { selectCategory } from "../../store/actions/category.action";

import { categories } from "../../data/categories";

const Home = ({ navigation }) => {
  const categories = useSelector((state) => state.categories.categories);

  const dispatch = useDispatch();

  const handleSelectedCategory = (item) => {
    dispatch(selectCategory(item.id));
    navigation.push("Category", {
      name: item.title,
    });
  };

  const renderGridItem = ({ item }) => (
    <GridItem item={item} onSelected={handleSelectedCategory} />
  );

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
