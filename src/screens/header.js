import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { icons, SIZES, FONTS } from "../constants";

const Header = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        height: 50,
        backgroundColor: "white",
      }}
    >
      <TouchableOpacity
        style={{
          width: 50,
          paddingLeft: SIZES.padding * 2,
          justifyContent: "center",
        }}
      >
        <Image
          source={icons.nearby}
          resizeMode="contain"
          style={{
            width: 30,
            height: 30,
          }}
        />
      </TouchableOpacity>

      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View
          style={{
            width: "70%",
            height: "100%",
            // backgroundColor: COLORS.lightGray3,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: SIZES.radius,
          }}
        >
          <Text
            style={{
              ...FONTS.h1,
              fontWeight: "800",
              color: "#4A5568",
              fontFamily: `-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol`,
              textShadow: "2px 2px 4px #616161, -2px -2px 4px #fafafa",
              letterSpacing: 5,
            }}
          >
            <i>treazer</i>{" "}
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={{
          width: 50,
          paddingRight: SIZES.padding * 2,
          justifyContent: "center",
        }}
      >
        <Image
          source={icons.nearby}
          resizeMode="contain"
          style={{
            width: 30,
            height: 30,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

// const styles = StyleSheet.create({});
