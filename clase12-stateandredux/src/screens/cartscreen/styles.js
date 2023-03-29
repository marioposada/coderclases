import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingBottom: 100,
},
  containerList: {
    flex: 1,
    backgroundColor: "#fff",
   
  },
  footer: {
    borderTopColor: "#000",
    borderTopWidth: 1,
    paddingVertical: 10,
    marginBottom: 10,
    marginHorizontal: 10,
  },
  buttonConfirm: {
    backgroundColor: "#fff",
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  disabledButtonConfirm: {
    borderWidth: 1,
    backgroundColor: "#fff",
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textButtonConfirm: {
    fontFamily: "Poppins-Bold",
    fontSize: 14,
  },
  totalContainer: {
    height: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
  },
  totalTitle: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
  },
  total: {
    fontFamily: "Poppins-Bold",
    fontSize: 16,
  },
});
