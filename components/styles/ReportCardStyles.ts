import { StyleSheet } from "react-native";

const ReportCardStyles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    margin: 10,
    borderRadius: 8,
    overflow: "hidden",
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 200,
  },
  infoContainer: {
    padding: 10,
  },
  text: {
    fontFamily: "Jomhuria-Regular",
    fontSize: 18,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
});

export default ReportCardStyles;
