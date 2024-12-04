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
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  infoContainer: {
    paddingTop: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  detailsText: {
    fontFamily: "Roboto-Thin",
    fontSize: 16,
    marginLeft: 8,
    color: "#333",
  },
});

export default ReportCardStyles;
