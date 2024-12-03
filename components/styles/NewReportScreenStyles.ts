import { StyleSheet } from "react-native";

const NewReportScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#595959",
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    gap: 20,
  },
  buttonWithLabel: {
    alignItems: "center",
    marginHorizontal: 15,
  },
  locationButton: {
    width: 100,
    height: 100,
    backgroundColor: "#d3d3d3",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  addPhotoButton: {
    width: 100,
    height: 100,
    backgroundColor: "#d3d3d3",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  icon: {
    width: 50,
    height: 50,
  },
  buttonLabel: {
    marginTop: 10,
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
  tag: {
    backgroundColor: "#d3d3d3",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    margin: 5,
  },
  tagText: {
    fontWeight: "bold",
    color: "#000",
  },
});

export default NewReportScreenStyles;
