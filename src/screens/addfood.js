import React from "react";
import { StyleSheet, View, ScrollView, Image, Text } from "react-native";
import { icons } from "../constants";

const Addfood = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        style={{
          width: "100%",
          height: "90%",
          paddingVertical: "auto",
        }}
      >
        <Text
          style={{
            marginVertical: "30px",
            // color: "#757575",
            color: "#ffffff",
            textShadow: "2px 0 #ffffff",
            letterSpacing: "2px",
            fontWeight: "bold",
            fontSize: "25px",
            fontFamily: "Josefin Sans",
          }}
        >
          What you wish to add?
        </Text>
        <View style={styles.listView}>
          <View style={styles.imageView}>
            <Image
              style={{
                width: 30,
                height: 30,
                marginHorizontal: "auto",
                marginVertical: "auto",
              }}
              source={{
                uri: `${icons.hotdog}`,
              }}
            />
          </View>
        </View>
        <View style={styles.listView}>
          <View style={styles.imageView}>
            <Image
              style={{
                width: 30,
                height: 30,
                marginHorizontal: "auto",
                marginVertical: "auto",
              }}
              source={{
                uri: `${icons.fries}`,
              }}
            />
          </View>
        </View>
        <View style={styles.listView}>
          <View style={styles.imageView}>
            <Image
              style={{
                width: 30,
                height: 30,
                marginHorizontal: "auto",
                marginVertical: "auto",
              }}
              source={{
                uri: `${icons.hamburger}`,
              }}
            />
          </View>
        </View>
        <View style={styles.listView}>
          <View style={styles.imageView}>
            <Image
              style={{
                width: 30,
                height: 30,
                marginHorizontal: "auto",
                marginVertical: "auto",
              }}
              source={{
                uri: `${icons.noodle}`,
              }}
            />
          </View>
        </View>
        <View style={styles.listView}>
          <View style={styles.imageView}>
            <Image
              style={{
                width: 30,
                height: 30,
                marginHorizontal: "auto",
                marginVertical: "auto",
              }}
              source={{
                uri: `${icons.pizza}`,
              }}
            />
          </View>
        </View>
        <View style={styles.listView}>
          <View style={styles.imageView}>
            <Image
              style={{
                width: 30,
                height: 30,
                marginHorizontal: "auto",
                marginVertical: "auto",
              }}
              source={{
                uri: `${icons.rice_bowl}`,
              }}
            />
          </View>
        </View>
        <View style={styles.listView}>
          <View style={styles.imageView}>
            <Image
              style={{
                width: 30,
                height: 30,
                marginHorizontal: "auto",
                marginVertical: "auto",
              }}
              source={{
                uri: `${icons.salad}`,
              }}
            />
          </View>
        </View>
        <View style={styles.listView}>
          <View style={styles.imageView}>
            <Image
              style={{
                width: 30,
                height: 30,
                marginHorizontal: "auto",
                marginVertical: "auto",
              }}
              source={{
                uri: `${icons.sushi}`,
              }}
            />
          </View>
        </View>
        <View style={styles.listView}>
          <View style={styles.imageView}>
            <Image
              style={{
                width: 30,
                height: 30,
                marginHorizontal: "auto",
                marginVertical: "auto",
              }}
              source={{
                uri: `${icons.drink}`,
              }}
            />
          </View>
        </View>
        <View style={styles.listView}>
          <View style={styles.imageView}>
            <Image
              style={{
                width: 30,
                height: 30,
                marginHorizontal: "auto",
                marginVertical: "auto",
              }}
              source={{
                uri: `${icons.hotdog}`,
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Addfood;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage: `url(${"https://images.pexels.com/photos/1824353/pexels-photo-1824353.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"})`,
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    margin: "auto",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    textAlign: "center",
    alignItems: "center",
  },
  listView: {
    marginHorizontal: "auto",
    margin: "20px",
    width: "80%",
    height: 60,
    backgroundColor: "#ffffff",
    borderRadius: "50px",
    paddingLeft: "10px",
    paddingTop: "10px",
    boxShadow: "0 4px 8px 0 #424242, 0 6px 20px 0 #212121",
  },
  imageView: {
    alignItems: "center",
    height: "80%",
    width: "20%",
    borderRadius: "20px",
    backgroundColor: "#9e9e9e",
    boxShadow: "0 2px 4px 0 #332525, 0 2px 4px 0 #8b6363",
  },
});
