import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

const IgButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default IgButton;

const styles = StyleSheet.create({
  btn: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0095F6",
    height: 40,
    borderRadius: 50,
  },
  title: {
    color: "white",
    fontSize: 18,
  },
});
