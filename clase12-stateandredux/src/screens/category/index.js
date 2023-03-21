import { Button, FlatList, Text, View } from "react-native";
import React , {useEffect} from "react";
import { styles } from "./styles";
import { BreadItem } from "../../components";
import { useSelector, useDispatch } from "react-redux";

import { filterBreads, selectBread } from "../../store/actions/bread.action";


const CategoryScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const categoryBreads = useSelector((state) => state.breads.filteredBreads);
  const category = useSelector((state) => state.categories.selectedCategory);


  useEffect(() => {
    dispatch(filterBreads(category.id));
  }, []);

  const handleSelected = (item) => {
    dispatch(selectBread(item.id));
    navigation.navigate("Detail", {
      name: item.name,
    });
  };

  const rendItemBread = ({ item }) => (
    <BreadItem item={item} onSelected={handleSelected} />
  );

  return (
    <FlatList
      data={categoryBreads}
      renderItem={rendItemBread}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default CategoryScreen;
