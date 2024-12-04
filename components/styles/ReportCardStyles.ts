import { StyleSheet } from "react-native";

const ReportCardStyles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    margin: 10,
    borderRadius: 8,
    overflow: "hidden",
    elevation: 3,
    padding: 10,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 8,
  },
  infoContainer: {
    padding: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    marginTop: 10,
  },
  text: {
    fontFamily: "Roboto-Thin",
    fontSize: 16,
    color: "#333",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
  },
  detailsContainer: {
    marginTop: 10,
  },
  detailsText: {
    fontFamily: "Roboto-Thin",
    fontSize: 16,
    color: "#333",
    marginBottom: 5,
    fontWeight: "bold",
  },
});

export default ReportCardStyles;
