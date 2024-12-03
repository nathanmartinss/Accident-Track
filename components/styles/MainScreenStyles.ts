import { StyleSheet } from "react-native";

const MainScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  header: {
    fontFamily: "Jomhuria-Regular",
    fontSize: 30,
    textAlign: "center",
    marginVertical: 10,
    color: "black",
  },
  contentContainer: {
    paddingBottom: 80,
  },
  fab: {
    position: "absolute",
    right: 20,
    bottom: 20,
    backgroundColor: "red",
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  fabText: {
    color: "white",
    fontSize: 24,
  },
});

export default MainScreenStyles;
