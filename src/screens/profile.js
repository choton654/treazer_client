import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
// import { Text } from "galio-framework";
const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <View style={styles.logo}>
          <Image
            style={styles.tinyLogo}
            source={{
              uri:
                "https://thumbs.dreamstime.com/b/shutdown-vector-thin-line-icon-shutdown-icon-website-design-desktop-envelopment-development-premium-pack-195314279.jpg",
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    margin: 0,
    height: "100vh",
    width: "100vw",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  profile: {
    alignItems: "center",
    flexDirection: "column",
    height: "80%",
    width: "80%",
    borderRadius: "20px",
    background: "#f6efef",
    boxShadow: "8px 8px 12px #b4aeae, -8px -8px 12px #ffffff",
  },
  logo: {
    // marginHorizontal: "auto",
    alignItems: "center",
    marginTop: "20px",
    height: "70px",
    width: "70px",
    borderRadius: "175px",
    background: "linear-gradient(145deg, #ddd7d7, #ffffff)",
    boxShadow: "5px 5px 10px #827f7f, -5px -5px 10px #ffffff",
  },
  tinyLogo: {
    borderRadius: "175px",
    width: 70,
    height: 70,
  },
});
