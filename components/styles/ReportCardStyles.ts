import { StyleSheet } from "react-native";

const ReportCardStyles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    margin: 10,
    borderRadius: 8,
    overflow: "hidden",
    elevation: 3,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  resolvedCard: {
    borderColor: "#28a745",
    borderWidth: 2,
  },
  unresolvedCard: {
    borderColor: "#dc3545",
    borderWidth: 2,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 8,
  },
  infoContainer: {
    paddingTop: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  detailsText: {
    fontFamily: "Roboto-Thin",
    fontSize: 16,
    marginLeft: 8,
    color: "#333",
  },
  resolvedText: {
    color: "#28a745",
    fontWeight: "bold",
  },
  unresolvedText: {
    color: "#dc3545",
    fontWeight: "bold",
  },
});

export default ReportCardStyles;
