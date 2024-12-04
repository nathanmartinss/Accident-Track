import { StyleSheet, Platform } from "react-native";

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
    paddingBottom: 100,
    paddingHorizontal: 10,
  },
  fab: {
    position: "absolute",
    right: 20,
    bottom: 20,
    backgroundColor: "red",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
  },
  fabText: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
  },
  reportCard: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 10,
    marginBottom: 20,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  reportDetails: {
    marginTop: 10,
  },
  reportText: {
    color: "#333",
    fontSize: 16,
    marginBottom: 8,
    fontFamily: "SpaceMono-Regular",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  icon: {
    marginRight: 8,
    color: "#444",
  },
});

const modalStyles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  modalContent: {
    backgroundColor: "#595959",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    width: "100%",
    maxHeight: "85%",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    paddingHorizontal: 10,
    paddingBottom: Platform.OS === "ios" ? 40 : 20,
  },
  cancelButton: {
    backgroundColor: "#ff6347",
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    width: "48%",
  },
  postButton: {
    backgroundColor: "#32cd32",
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    width: "48%",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export { MainScreenStyles, modalStyles };
