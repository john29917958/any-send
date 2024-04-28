import { StyleSheet } from "react-native";
import { Appbar, FAB, useTheme } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const BOTTOM_TOOLBAR_HEIGHT = 80;
const MEDIUM_FAB_HEIGHT = 56;

const Toolbar = () => {
  const { bottom } = useSafeAreaInsets();
  const theme = useTheme();

  return (
    <Appbar
      style={[
        styles.bottomToolbar,
        {
          height: BOTTOM_TOOLBAR_HEIGHT + bottom,
        },
      ]}
      safeAreaInsets={{ bottom }}
    >
      <Appbar.Action
        icon="magnify"
        size={35}
        color={theme.colors.secondary}
        onPress={() => {
          console.log("Search button clicked");
        }}
      />
      <Appbar.Action
        icon="upload"
        size={35}
        color={theme.colors.secondary}
        onPress={() => {
          console.log("Upload button clicked");
        }}
      />
      <Appbar.Action
        icon="folder-plus"
        size={35}
        color={theme.colors.secondary}
        onPress={() => {
          console.log("Add folder button clicked");
        }}
      />
    </Appbar>
  );
};

const styles = StyleSheet.create({
  bottomToolbar: {
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default Toolbar;
