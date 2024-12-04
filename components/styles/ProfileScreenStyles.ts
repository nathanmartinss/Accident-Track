import { StyleSheet, Platform } from "react-native";

const ProfileScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D3D3D3",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingTop: Platform.OS === "android" ? 30 : 50, // Compensação para Android/iOS
    paddingBottom: 10,
    backgroundColor: "#ffffff",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  iconButton: {
    padding: 5,
  },
  headerTitle: {
    fontFamily: "Jomhuria-Regular",
    fontSize: 30,
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
    flex: 1, // Faz o título ocupar o espaço restante
  },
  contentContainer: {
    paddingBottom: 80,
    paddingHorizontal: 10,
  },
  reportCard: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  resolved: {
    borderColor: "green",
    borderWidth: 2,
  },
  unresolved: {
    borderColor: "red",
    borderWidth: 2,
  },
  resolveButton: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  resolveButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export { ProfileScreenStyles };
