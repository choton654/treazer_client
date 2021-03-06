import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { SIZES, COLORS } from "../constants";

const Restaurantlist = ({ item, onSelectCategory, selectedCategory }) => {
  return (
    <TouchableOpacity
      style={{
        padding: SIZES.padding,
        paddingBottom: SIZES.padding * 2,
        backgroundColor: selectedCategory?.id === item.id ? "#616161" : "white",
        borderRadius: SIZES.radius,
        alignItems: "center",
        justifyContent: "center",
        marginRight: SIZES.padding,
        marginLeft: SIZES.padding,
        ...styles.shadow,
        boxShadow: "0px 4px 4px 0px #C9CCD1, 0px 0px 2px #C9CCD1",
      }}
      onPress={() => onSelectCategory(item)}
    >
      <View
        style={{
          width: 50,
          height: 50,
          borderRadius: 25,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor:
            selectedCategory?.id === item.id ? COLORS.white : "#e0e0e0",
          boxShadow:
            selectedCategory?.id === item.id
              ? "3px 3px 3px #212121"
              : "3px 3px 3px #C9CCD1",
        }}
      >
        <Image
          source={item.icon}
          resizeMode="contain"
          style={{
            width: 30,
            height: 30,
          }}
        />
      </View>

      <Text
        style={{
          marginTop: SIZES.padding,
          color: selectedCategory?.id === item.id ? COLORS.white : "black",
          fontWeight: 600,
        }}
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  );
};

export default Restaurantlist;

const styles = StyleSheet.create({});
