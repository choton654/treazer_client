import React from "react";
import { StyleSheet, View, Text } from "react-native";
// import { Text } from "galio-framework";
const Profile = () => {
  return (
    <View style={styles.container}>
      <Text>Hello world</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    textAlign: "center",
  },
});
