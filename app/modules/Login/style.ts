import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerSafe: {
    height: "100%",
    width: "100%",
    backgroundColor: "#7ABFD3",
  },
  container: {
    flex: 1,
    top: 40,
  },
  width100: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
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
