import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const screenWidth = Dimensions.get("window").width;
const Post = () => {
  return (
    <View>
      <View style={styles.header}>
        <View style={styles.nameContainer}>
          <Image
            source={require("../../assets/images/person2.jpg")}
            style={styles.dpImg}
          />

          <View>
            <Text style={{ fontWeight: "bold" }}>fcbarcelona</Text>
            <Text style={{ fontSize: 12 }}>Camp Nou</Text>
          </View>
        </View>

        <Entypo name="dots-three-horizontal" size={18} color="black" />
      </View>

      <Image
        source={require("../../assets/images/post_img.jpg")}
        style={styles.postImg}
      />

      <View style={styles.like_com_shar}>
        <View style={styles.interactions}>
          <View style={styles.icon_container}>
            <FontAwesome6 name="heart" size={24} color="black" />
            <Text style={styles.likeNum}>519K</Text>
          </View>

          <View style={styles.icon_container}>
            <FontAwesome6 name="comment" size={24} color="black" />
            <Text style={styles.likeNum}>7,614</Text>
          </View>

          <View style={styles.icon_container}>
            <Feather name="send" size={24} color="black" />
            <Text style={styles.likeNum}>17.9K</Text>
          </View>
        </View>

        <View>
          <FontAwesome name="bookmark-o" size={24} color="black" />
        </View>
      </View>

      <View style={{ flexDirection: "row", gap: 5, paddingHorizontal: 10 }}>
        <Text style={{ fontWeight: "bold" }}>fcbarcelona</Text>
        <Text>What a view!</Text>
      </View>

      <Text
        style={{
          color: "grey",
          paddingHorizontal: 10,
          fontSize: 12,
          marginTop: 5,
        }}
      >
        View all comments
      </Text>
      <Text
        style={{
          color: "grey",
          paddingHorizontal: 10,
          fontSize: 12,
          marginTop: 5,
        }}
      >
        45 minutes ago
      </Text>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    marginTop: 15,
    marginBottom: 5,
  },
  nameContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  dpImg: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  postImg: {
    width: screenWidth,
    height: screenWidth,
  },
  like_com_shar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5,
    marginHorizontal: 10,
  },
  interactions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  likeNum: {
    fontWeight: "bold",
  },
  icon_container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
});
