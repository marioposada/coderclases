import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  breadItem: {
    flex: 1,
    padding: 20,
    margin: 10,
    borderRadius: 6,
    backgroundColor: "#ccc",
  },
  details: {
    fontSize: 16,
  },
  title: {
    fontFamily: "Poppins-Regular",
    fontSize: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    resizeMode: "cover",
    borderWidth: 2,
  },
});
