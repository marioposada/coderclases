import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        borderBottomColor: '#fff',
        borderBottomWidth: 1,
        backgroundColor: '#fff',
        height: 80,
        marginHorizontal: 10,
        marginVertical: 5,
        borderRadius: 5,
    },
    headerContainer: {},
    contentContainer: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
    },
    content: {},
    total: {
        fontSize: 16,
        fontFamily: 'Poppins-Bold',
    },
});