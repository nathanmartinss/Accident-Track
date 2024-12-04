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
    fontFamily: "Jomhuria-Regular",
    fontSize: 36,
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
    flex: 8,
  },
  backIconWrapper: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 80,
    paddingHorizontal: 10,
  },
  screenTitle: {
    fontFamily: "Jomhuria-Regular",
    fontSize: 36,
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
    marginVertical: 20,
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
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  resolveButtonResolved: {
    backgroundColor: "green",
  },
  resolveButtonUnresolved: {
    backgroundColor: "red",
  },
  resolveButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export { ProfileScreenStyles };
