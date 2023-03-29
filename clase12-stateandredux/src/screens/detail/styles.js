import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f2f2f2"
    },
    text: {
        fontSize: 20,
        fontFamily: "Poppins-Bold",

    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 2,
        resizeMode: "cover",
        borderWidth: 1,
    },
    button: {
        backgroundColor: "#000",
        color: "#fff",
        padding: 10,
        borderRadius: 5,
        margin: 10,

    },
});