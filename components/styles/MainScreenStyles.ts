import { StyleSheet } from "react-native";

const MainScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D3D3D3",
  },
  header: {
    fontFamily: "Jomhuria-Regular",
    fontSize: 40,
    textAlign: "center",
    marginVertical: 10,
    color: "black",
    fontWeight: "bold",
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
  reportCard: {
    backgroundColor: "#d3d3d3",
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  reportDetails: {
    marginTop: 10,
  },
  reportText: {
    color: "#000",
    fontSize: 14,
    marginBottom: 5,
  },
});

const modalStyles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#595959",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    elevation: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  cancelButton: {
    backgroundColor: "red",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginRight: 10,
  },
  postButton: {
    backgroundColor: "red",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export { MainScreenStyles, modalStyles };
