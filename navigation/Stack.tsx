import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, TouchableOpacity } from "react-native";

const Screen = {
  ScreenOne: ({ navigation: { navigate } }) => (
    <TouchableOpacity onPress={() => navigate("Two")}>
      <Text>go to two</Text>
    </TouchableOpacity>
  ),
  ScreenTwo: ({ navigation: { navigate } }) => (
    <TouchableOpacity onPress={() => navigate("Three")}>
      <Text>go to three</Text>
    </TouchableOpacity>
  ),
  ScreenThree: ({ navigation: { navigate } }) => (
    <TouchableOpacity onPress={() => navigate("Tabs", { screen: "Search" })}>
      <Text>go to Search</Text>
    </TouchableOpacity>
  ),
};

const NativeStack = createNativeStackNavigator();

const Stack = () => (
  <NativeStack.Navigator
    screenOptions={{
      headerBackTitleVisible: false,
    }}
  >
    <NativeStack.Screen name="One" component={Screen.ScreenOne} />
    <NativeStack.Screen name="Two" component={Screen.ScreenTwo} />
    <NativeStack.Screen name="Three" component={Screen.ScreenThree} />
  </NativeStack.Navigator>
);

export default Stack;
