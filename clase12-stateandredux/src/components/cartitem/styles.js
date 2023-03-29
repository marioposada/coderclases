import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 60,
    backgroundColor: "#f2f2f2",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#g2g2g2",
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#e32f45",
    justifyContent: "space-between",
    alignItems: "center",

  },
  title: {
    fontSize: 16,
    fontFamily: "Poppins-Bold",
    color: "#e32f45",
    marginBottom: 5,
  },
  contentContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
  },
  content: {
    flex: 1,
  },
  quantity: {
    fontSize: 14,
    fontFamily: "Poppins-Regular",
    color: "#e32f45",
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
    color: "#e32f45",
    fontFamily: "Poppins-Bold",
  },
});
