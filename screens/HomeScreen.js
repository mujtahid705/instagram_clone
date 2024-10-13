import { View, Text, Button } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import { logout } from "../redux/userSlice";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const logoutHandler = () => dispatch(logout());

  return (
    <SafeAreaView>
      <Text>HomeScreen</Text>
      <Button title="Logout" onPress={logoutHandler} />
    </SafeAreaView>
  );
};

export default HomeScreen;
