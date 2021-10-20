import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerSafe: {
    flex: 1,
    backgroundColor: "#7ABFD3",
  },
  container: {
    flex: 1,
    top: 40,
  },
  width100: {
    display: "flex",
    width: "100%",
    height: "100%",
    flexDirection: "row",
  },
  containerParagraph: {
    display: "flex",
    width: "60%",
    height: "65%",
    backgroundColor: "rgba(18,64,81, 0.45)",
    alignItems: "center",
    justifyContent: "center",
  },
  containerArrow: {
    display: "flex",
    width: "40%",
    height: "65%",
    alignItems: "center",
    justifyContent: "center",
  },
  fontBold: {
    color: "#fff",
    fontWeight: "bold",
  },
});
