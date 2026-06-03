import { Dimensions, StyleSheet } from "react-native";

import { themas } from "../../global/themes";

export const style = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: themas.color.secondary,
  },

  boxTop: {
    minHeight: Dimensions.get("window").height / 4,
    alignItems: "center",
    justifyContent: "center",
  },

  boxMid: {
    width: "100%",
    paddingHorizontal: 37,
  },

  boxBottom: {
    width: "100%",
    alignItems: "center",
    marginTop: 24,
    gap: 16,
  },

  logo: {
    width: 100,
    height: 100,
  },

  title: {
    fontWeight: "bold",
    marginTop: 24,
    fontSize: 18,
  },

  textBottom: {
    fontSize: 16,
    color: themas.color.gray,
  },
});