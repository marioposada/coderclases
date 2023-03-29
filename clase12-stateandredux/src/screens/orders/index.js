import React, { useCallback} from "react";
import { View , FlatList} from "react-native";
import { OrderItem } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { styles } from "./styles";
import { deleteOrder, getOrders } from "../../store/actions/order.action";
import { useFocusEffect } from "@react-navigation/native";

const Orders = ({navigation}) => {
    const dispatch = useDispatch();
    const orders = useSelector(state => state.orders.list);

    useFocusEffect(
        useCallback(() => {
            dispatch(getOrders());
        }, [dispatch])
    );

    const onCancel = (id) => {
        dispatch(deleteOrder(id));
    }
    const renderItem = ({item}) => <OrderItem item={item} onCancel={onCancel} />
    return (
        <View style={styles.container}>
            <FlatList 
                data={orders}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    )
};

export default Orders;
