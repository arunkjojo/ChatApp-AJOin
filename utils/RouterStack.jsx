import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignUpScreen from "./../screens/SignUpScreen";
import SignInScreen from "../screens/SignInScreen";
import HomeScreen from "./../screens/HomeScreen";
import ChatScreen from "./../screens/ChatScreen";

const Stack = createStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
};

export const ChatStack = () => {
  return (
    <Stack.Navigator defaultScreenOptions={HomeScreen}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Chat" component={ChatScreen} />
    </Stack.Navigator>
  );
};
