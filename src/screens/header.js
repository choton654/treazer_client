import React from "react";
import { Text, View, Image, TouchableOpacity, TextInput } from "react-native";
import { icons, SIZES, FONTS } from "../constants";
import SearchTwoToneIcon from "@material-ui/icons/SearchTwoTone";
const Header = () => {
  const [value, onChangeText] = React.useState("Search restautants...");
  return (
    <View style={{ flexDirection: "column" }}>
      <View
        style={{
          coureser: "pointer",
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

        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
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
      <View
        style={{
          position: "sticky",
          top: 0,
          width: "100%",
          background: "rgb(255, 255, 255)",
        }}
      >
        <View
          style={{
            marginTop: 10,
            marginHorizontal: "auto",
            flexDirection: "row",
            width: "90%",
            borderRadius: 20,
            justifyContent: "space-evenly",
            alignItems: "center",
            backgroundColor: "#fff9c4",
          }}
        >
          <SearchTwoToneIcon
            fontSize="default"
            style={{ marginHorizontal: "auto", color: "#d84315" }}
          />
          <TextInput
            style={{
              color: "#d84315",
              fontFamily: "Josefin Sans",
              height: 40,
              width: "80%",
              paddingLeft: 10,
              borderRadius: 20,
            }}
            onChangeText={(text) => onChangeText(text)}
            value={value}
          />
        </View>
      </View>
    </View>
  );
};

export default Header;

// const styles = StyleSheet.create({});
