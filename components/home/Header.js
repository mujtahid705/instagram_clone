import { View, Text, Image, StyleSheet } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/ig_logo_text.png")}
        style={styles.img}
      />

      <View style={styles.icons}>
        <Entypo name="heart-outlined" size={30} color="black" />
        <FontAwesome6 name="facebook-messenger" size={24} color="black" />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  img: {
    width: 120,
    height: 60,
    resizeMode: "contain",
  },
  icons: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
  },
});
