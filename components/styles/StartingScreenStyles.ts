import { StyleSheet } from "react-native";

const StartingScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D3D3D3",
  },
  title: {
    fontFamily: "Jomhuria-Regular",
    fontSize: 96,
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
  },
  button: {
    marginTop: 20,
    backgroundColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontFamily: "Jomhuria-Regular",
    fontSize: 40,
  },
});

export default StartingScreenStyles;
