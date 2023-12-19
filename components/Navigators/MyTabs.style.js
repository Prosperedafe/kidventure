import { StyleSheet } from "react-native";
import { FONT } from "../../constants/theme";


const styles = StyleSheet.create({
    container: {
      flex: 1,
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      paddingBottom: 4,
      paddingTop: 4,
      paddingHorizontal: 16,
    },
    headerTitle: {
      fontSize: 20,
      fontFamily: FONT.FredokaOneRegular,
    },
    tabContainer: {
      // flex: 1,
      alignItems: "center",
      justifyContent: "",
      gap: 4,
    },
    top: {
      height: 4,
      width: "100%",
      borderRadius: "4px",
    },
    tabText: {
      fontSize: 8,
      fontFamily: FONT.DosisSemiBold,
    },
  });

  export default styles;