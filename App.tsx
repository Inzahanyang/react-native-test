import AppLoading from "expo-app-loading";
import React, { useState } from "react";
import { Image, useColorScheme } from "react-native";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { Asset } from "expo-asset";
import { NavigationContainer } from "@react-navigation/native";
import Root from "./navigation/Root";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styledColor";

const loadFonts = (fonts: any) =>
  fonts.map((font: any) => Font.loadAsync(font));
const loadImages = (images: any) =>
  images.map((image: any) =>
    typeof image === "string" ? Image.prefetch(image) : Asset.loadAsync(image)
  );

export default function App() {
  const [ready, setReady] = useState(false);
  const onFinish = () => setReady(true);
  const startLoading = async () => {
    const fonts = loadFonts([Ionicons.font]);
    const images = loadImages([
      require("./omg.jpeg"),
      "https://reactnative.dev/img/oss_logo.png",
    ]);
    await Promise.all([...fonts, ...images]);
  };
  const isDark = useColorScheme() === "dark";
  if (!ready) {
    return (
      <AppLoading
        onFinish={onFinish}
        onError={console.error}
        startAsync={startLoading}
      />
    );
  }

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <NavigationContainer>
        <Root />
      </NavigationContainer>
    </ThemeProvider>
  );
}
