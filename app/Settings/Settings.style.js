import { StyleSheet } from "react-native";
import { COLORS, FONT } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    padding: "5%",
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    paddingBottom: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: FONT.FredokaOneRegular,
    textAlign: "center",
    marginBottom: '0.8rem',
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: COLORS.grayColor,
    borderRadius: 10,
    padding: 8,
    alignItems: "center",
    justifyContent: "space-between",
  },
  smallInputContainer: {
    flex: 1,
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    outline: 0,
  },
  inputText: {
    fontSize: "0.9rem",
    fontFamily: FONT.DosisRegular,
    width: "100%",
    height: "100%",
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '1.2rem',
    gap: 8,
  },
  profileTextContainer: {
    
  },
  profileText1: {
    fontSize: '1.1rem',
    fontFamily: FONT.DosisSemiBold
  },
  profileText2: {
    fontSize: '0.8rem',
    fontFamily: FONT.DosisRegular
  },
  settingsListTitle: {
   
    fontFamily: FONT.DosisMedium,
    fontSize: 12,
    textTransform: 'uppercase',
    marginTop: '1.5rem',
  },
  AllSettings: {
    // flex: 1,
    gap: 8,
    marginTop: '0.6rem',
  },
  full: {
    // flex: 0,
  },
  settingsListContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
    borderColor: '#9D9D9D',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    paddingVertical: 8,
  },
  settingsListText1: {
    fontSize: '1rem',
    fontFamily: FONT.DosisMedium
  },
  settingsListText2: {
    fontSize: '0.8rem',
    fontFamily: FONT.DosisRegular
  },
});

export default styles;
