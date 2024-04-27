import { View, StyleSheet } from "react-native";
import { Button, Text, useTheme } from "react-native-paper";
import Level from "./Level";

const LocationPanel = (props) => {
  const fullPath = props.path;
  const tokens = fullPath.split(/[\/\\]+/g);
  const levels = tokens.filter((token) => token);
  const theme = useTheme();

  let elements = [];
  let index = 0;
  for (const level of levels) {
    elements.push(
      <Text key={"slash-" + index} style={styles.element}>
        /
      </Text>
    );
    elements.push(<Level key={"level-" + index} name={level}></Level>);
    index += 1;
  }

  return (
    <View
      style={[
        styles.container,
        { shadowColor: "#000000", backgroundColor: theme.colors.background },
      ]}
    >
      {elements}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderWidth: 0,
    borderColor: "red",
    height: 70,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 15,
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  element: {
    marginLeft: 2,
    marginRight: 2,
  },
});

export default LocationPanel;
