import { StatusBar, useColorScheme } from "react-native";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import themes from "./src/theme";

import { Loading } from "@components/Loading";

import { Routes } from "./src/routes";

export default function App() {
  const deviceTheme = useColorScheme();
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  const theme =
    themes[deviceTheme === "dark" ? "dark" : "light"] || themes.dark;

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle={deviceTheme === "dark" ? "light-content" : "dark-content"}
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  );
}
