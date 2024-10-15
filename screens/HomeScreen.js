import { View, Text, Button, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import { logout } from "../redux/userSlice";
import Header from "../components/home/Header";
import StorySection from "../components/home/StorySection";
import Post from "../components/home/Post";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const logoutHandler = () => dispatch(logout());

  return (
    <>
      {/* <SafeAreaView style={{ flex: 1 }}> */}
      <Header />
      <ScrollView>
        <StorySection />
        <Post />
        <Post />
        <Post />
      </ScrollView>
      {/* <Button title="Logout" onPress={logoutHandler} /> */}
      {/* </SafeAreaView> */}
    </>
  );
};

export default HomeScreen;
