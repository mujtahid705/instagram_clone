import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const PERSONS = [
  {
    id: 1,
    name: "John Doe",
    img: require("../../assets/images/person1.jpg"),
  },
  {
    id: 2,
    name: "John Doe",
    img: require("../../assets/images/person2.jpg"),
  },
  {
    id: 3,
    name: "John Doe",
    img: require("../../assets/images/person3.jpg"),
  },
  {
    id: 4,
    name: "John Doe",
    img: require("../../assets/images/person4.jpg"),
  },
  {
    id: 5,
    name: "John Doe",
    img: require("../../assets/images/person5.jpg"),
  },
];

const StorySection = () => {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <LinearGradient
          colors={["#f09433", "#e6683c", "#dc2743", "#cc2366", "#bc1888"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradientBorder}
        >
          <Image source={item.img} style={styles.img} />
        </LinearGradient>
        <Text style={styles.text}>{item.name}</Text>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={PERSONS}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default StorySection;

const styles = StyleSheet.create({
  itemContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 8,
  },
  img: {
    height: 70,
    width: 70,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "white",
  },
  gradientBorder: {
    padding: 3,
    borderRadius: 50,
  },
  text: {
    fontSize: 12,
    marginTop: 5,
  },
});
