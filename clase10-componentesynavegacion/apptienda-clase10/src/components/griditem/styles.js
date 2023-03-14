import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 6,
        marginHorizontal: 20,
        margin: 15,
        height: 150,
    },
    contentContainer: {
        flex: 1,
        borderRadius: 6,
        shadowColor: "black",
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        elevation: 4,
        justifyContent: "flex-end",
        alignItems: "flex-end",
        padding: 8,
    },
    title: {
        fontFamily: "Poppins-Bold",
        fontSize: 18,
    },
});


    