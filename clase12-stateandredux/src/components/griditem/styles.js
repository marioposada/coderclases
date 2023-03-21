import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        borderRadius: 6,
        marginHorizontal: 20,
        margin: 15,
        height: 150,
        width: 150,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#eaeaea",
        justifyContent: "center",
        alignItems: "center",

    },
    contentContainer: {
        flex: 1,
        width: "100%",
        height: "auto",
        borderRadius: 6,
        shadowColor: "black",
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        elevation: 4,
        justifyContent: "center",
        alignItems: "center",
        padding: 8,
    },
    title: {
        fontFamily: "Poppins-Regular",
        fontSize: 18,
    },
});


    