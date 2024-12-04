import { StyleSheet } from "react-native";

const StartingScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D3D3D3",
    paddingHorizontal: 20,
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
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    elevation: 5,
  },
  buttonText: {
    color: "white",
    fontFamily: "Jomhuria-Regular",
    fontSize: 24,
    textAlign: "center",
  },
  linksContainer: {
    marginTop: 40,
    width: "100%",
    paddingHorizontal: 20,
  },
  linksTitle: {
    fontFamily: "Jomhuria-Regular",
    fontSize: 32,
    color: "black",
    marginBottom: 15,
  },
  linkItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  linkIcon: {
    marginRight: 15,
  },
  linkText: {
    fontSize: 30,
    color: "#333",
    fontFamily: "Jomhuria-Regular",
    fontWeight: "bold",
  },
});

export default StartingScreenStyles;
