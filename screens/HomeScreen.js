import { View, Text, Button, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import { logout } from "../redux/userSlice";
import Header from "../components/home/Header";
import StorySection from "../components/home/StorySection";
import Post from "../components/home/Post";
import { DUMMY_POSTS } from "../data/dummyData";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const logoutHandler = () => dispatch(logout());

  return (
    <>
      {/* <SafeAreaView style={{ flex: 1 }}> */}
      <Header />
      <ScrollView>
        <StorySection />
        {DUMMY_POSTS.map((data, index) => (
          <Post key={index} data={data} />
        ))}
      </ScrollView>
      {/* <Button title="Logout" onPress={logoutHandler} /> */}
      {/* </SafeAreaView> */}
    </>
  );
};

export default HomeScreen;
