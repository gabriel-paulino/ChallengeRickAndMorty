import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

export default StyleSheet.create({
  card: {
    height: height / 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginRight: 25,
  },
  image: {
    width: 150,
    height: 150,
  },
  imageDescriptionContainer: {
    width: width / 2,
    flexDirection: "column",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    textAlign: "center",
  },
  favoritesContainer:{
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 25,
    marginHorizontal: 10
  },
  starIconContainer:{
    alignItems: "center",
    width: 27,
    borderRadius: 10,
  }
});
