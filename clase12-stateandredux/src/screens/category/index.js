import { Button, FlatList, Text, View } from "react-native";
import react from "react";
import { styles } from "./styles";
import { BreadItem } from "../../components";
import { breads } from "../../data/breads";

const CategoryScreen = ({navigation, route}) => {

  const bread = breads.filter((bread) => bread.category === route.params.categoryId);
  console.log(bread)

  const handleSelected = (item) => {
    navigation.navigate('Detail', {
      productId: item.id,
      name: item.name,
      data: item
    });
  };

    const rendItemBread = ({item}) => <BreadItem item={item} onSelected={handleSelected} />

  return (
    <FlatList
    data={bread}
    renderItem={rendItemBread}
    keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default CategoryScreen;