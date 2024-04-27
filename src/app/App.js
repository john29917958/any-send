import { StatusBar } from "expo-status-bar";
import { StyleSheet, useColorScheme } from "react-native";
import { MD3LightTheme, MD3DarkTheme, PaperProvider } from "react-native-paper";
import { lightScheme, darkScheme } from "./styles/colorSchemes";
import LocationPanel from "./components/LocationPanel/LocationPanel";
import ApplicationBar from "./components/ApplicationBar";

export default function App() {
  const colorScheme = useColorScheme();
  const appTheme =
    colorScheme === "dark"
      ? { ...MD3DarkTheme /*, colors: darkScheme*/ }
      : { ...MD3LightTheme /*, colors: lightScheme*/ };

  return (
    <PaperProvider theme={appTheme}>
      <ApplicationBar />
      <LocationPanel path="/folder-A/folder-B/" />
      <StatusBar style="auto" />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
