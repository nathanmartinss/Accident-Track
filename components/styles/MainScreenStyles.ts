import { StyleSheet, Platform } from "react-native";

const MainScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D3D3D3",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingTop: Platform.OS === "ios" ? 50 : 30,
    paddingBottom: 10,
    backgroundColor: "#ffffff",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  iconButton: {
    padding: 10,
  },
  headerTitle: {
    fontFamily: "Jomhuria-Regular", // Mantido pois se trata do título
    fontSize: 36,
    color: "black",
    fontWeight: "bold",
  },
  contentContainer: {
    paddingBottom: 100,
    paddingHorizontal: 10,
  },
  reportCard: {
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
  resolvedCard: {
    backgroundColor: "#d4edda",
    borderColor: "#c3e6cb",
  },
  unresolvedCard: {
    backgroundColor: "#f8d7da",
    borderColor: "#f5c6cb",
  },
  cardText: {
    fontFamily: "Roboto-Thin", // Adiciona fonte Roboto-Thin para o texto dos cards
    color: "#333",
    fontSize: 16,
    marginBottom: 8,
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
    fontFamily: "Roboto-Thin", // Fonte Roboto-Thin para os botões do modal
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export { MainScreenStyles, modalStyles };
