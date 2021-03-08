import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { icons, SIZES, COLORS, FONTS } from "../constants";

// const categoryData = [
//   {
//     id: 1,
//     name: "Rice",
//     icon: icons.rice_bowl,
//   },
//   {
//     id: 2,
//     name: "Noodles",
//     icon: icons.noodle,
//   },
//   {
//     id: 3,
//     name: "Hot Dogs",
//     icon: icons.hotdog,
//   },
//   {
//     id: 4,
//     name: "Salads",
//     icon: icons.salad,
//   },
//   {
//     id: 5,
//     name: "Burgers",
//     icon: icons.hamburger,
//   },
//   {
//     id: 6,
//     name: "Pizza",
//     icon: icons.pizza,
//   },
//   {
//     id: 7,
//     name: "Snacks",
//     icon: icons.fries,
//   },
//   {
//     id: 8,
//     name: "Sushi",
//     icon: icons.sushi,
//   },
//   {
//     id: 9,
//     name: "Desserts",
//     icon: icons.donut,
//   },
//   {
//     id: 10,
//     name: "Drinks",
//     icon: icons.drink,
//   },
// ];
const Restaurantcard = ({ item }) => {
  // const getCategoryNameById = (id) => {
  //   let category = categoryData.filter((a) => a.id === id);

  //   if (category.length > 0) return category[0].name;

  //   return "";
  // };
  return item.map((item) => (
    <TouchableOpacity
      style={{ marginBottom: SIZES.padding * 2 }}
      // onPress={() =>
      //   navigation.navigate("Restaurant", {
      //     item,
      //     initialCurrentLocation,
      //   })
      // }
    >
      {/* Image */}
      <View
        style={{
          marginBottom: 0,
        }}
      >
        <Image
          source={item.photo}
          resizeMode="cover"
          style={{
            width: "100%",
            height: 200,
            borderTopRightRadius: "40px",
            borderTopLeftRadius: "40px",
            boxShadow: "0 4px 8px 0 #C9CCD1, 0 6px 20px 0 #C9CCD1",
          }}
        />

        <View
          style={{
            position: "absolute",
            flexDirection: "row",
            bottom: 0,
            height: 50,
            width: SIZES.width * 0.3,
            borderBottomColor: "#ffffff",
            backgroundColor: COLORS.white,
            borderTopRightRadius: SIZES.radius,
            borderTopLeftRadius: SIZES.radius,
            alignItems: "center",
            justifyContent: "center",
            ...styles.shadow,
          }}
        >
          {/* <Text style={{ ...FONTS.h4 }}>{item.duration}</Text> */}
          <Image
            source={icons.star}
            style={{
              height: 20,
              width: 20,
              tintColor: COLORS.primary,
              marginRight: 10,
            }}
          />
          <Text style={{ ...FONTS.body3 }}>{item.rating}</Text>
        </View>
      </View>

      {/* Restaurant Info */}
      <View
        style={{
          alignItems: "center",
          width: "100%",
          padding: 10,
          marginTop: 0,
          marginBottom: 10,
          flexDirection: "column",
          marginHorizontal: "auto",
          borderTopColor: "#ffffff",
          borderBottomRightRadius: "17px",
          borderBottomLeftRadius: "17px",
          backgroundColor: "#ffffff",
          boxShadow: "0 4px 8px 0 #C9CCD1",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontFamily: "Josefin Sans",
            marginVertical: 10,
          }}
        >
          {item.name}
        </Text>
      </View>
    </TouchableOpacity>
  ));
};

export default Restaurantcard;

const styles = StyleSheet.create({});
