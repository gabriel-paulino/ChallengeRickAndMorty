import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

export default StyleSheet.create({
  favoritesContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#E3E3E3",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  personContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  textContainer: {
    width: 0.8 * width,
  },
  text: {
    textAlign: "left",
    fontSize: 16,
  },
});
