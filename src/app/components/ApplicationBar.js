import { Appbar, useTheme } from "react-native-paper";

const ApplicationBar = () => {
  const theme = useTheme();
  return (
    <Appbar.Header
      mode="small"
      style={{ backgroundColor: theme.colors.primaryContainer }}
    >
      <Appbar.Content title="A" />
      <Appbar.Action
        icon="account"
        onPress={() => {
          console.log("User icon clicked.");
        }}
      />
    </Appbar.Header>
  );
};

export default ApplicationBar;
