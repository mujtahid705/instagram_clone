import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useSelector } from "react-redux";

const screenWidth = Dimensions.get("window").width;
const Post = ({ data }) => {
  const currentUser = useSelector((state) => state.user.currentUser);

  return (
    <View>
      <View style={styles.header}>
        <View style={styles.nameContainer}>
          <Image source={data.dp} style={styles.dpImg} />

          <View>
            <Text style={{ fontWeight: "bold" }}>{data.name}</Text>
            <Text style={{ fontSize: 12 }}>{data.location}</Text>
          </View>
        </View>

        <Entypo name="dots-three-horizontal" size={18} color="black" />
      </View>

      <Image source={data.image} style={styles.postImg} />

      <View style={styles.like_com_shar}>
        <View style={styles.interactions}>
          <View style={styles.icon_container}>
            <AntDesign name="hearto" size={24} color="black" />
            <Text style={styles.likeNum}>{data.likes[0]}</Text>
          </View>

          <View style={styles.icon_container}>
            <FontAwesome6 name="comment" size={24} color="black" />
            <Text style={styles.likeNum}>{data.comments}</Text>
          </View>

          <View style={styles.icon_container}>
            <Feather name="send" size={24} color="black" />
            <Text style={styles.likeNum}>{data.shares}</Text>
          </View>
        </View>

        <View>
          <FontAwesome name="bookmark-o" size={24} color="black" />
        </View>
      </View>

      <View style={{ flexDirection: "row", gap: 5, paddingHorizontal: 10 }}>
        <Text style={{ fontWeight: "bold" }}>{data.name}</Text>
        <Text>{data.caption}</Text>
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
        {data.time} ago
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
    // resizeMode: "contain",
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
