import { StyleSheet, View } from "react-native";
import { Icon, IconButton, Text, useTheme } from "react-native-paper";

const iconSize = 27;

const FileSystemItem = (props) => {
  const theme = useTheme();

  return (
    <View
      style={[styles.container, { borderColor: theme.colors.surfaceVariant }]}
    >
      <View style={[styles.subContainer, styles.nameContainer]}>
        <Icon
          source="folder"
          color={theme.colors.outline}
          size={iconSize}
        ></Icon>
        <Text>Folder 01</Text>
      </View>
      <View style={[styles.subContainer, styles.rightContainer]}>
        <Text style={[{ color: theme.colors.surfaceVariant }, styles.sizeText]}>
          10MB
        </Text>
        <IconButton
          icon="download"
          iconColor={theme.colors.secondary}
          size={iconSize}
          onPress={() => {
            console.log("Download button clicked");
          }}
        />
        <IconButton
          icon="dots-vertical"
          iconColor={theme.colors.secondary}
          size={iconSize}
          onPress={() => {
            console.log("More button clicked");
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: 52,
    borderWidth: 1,
    paddingLeft: 14,
    paddingRight: 14,
    marginTop: -1,
  },

  subContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    height: "100%",
  },

  nameContainer: {
    gap: 8,
  },

  rightContainer: {
    justifyContent: "flex-end",
  },

  sizeText: {
    marginRight: 14,
  },
});

export default FileSystemItem;
