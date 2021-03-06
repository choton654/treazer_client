import React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
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
        <Pressable style={styles.button}>
          <Text>I'm pressable!</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text>I'm pressable!</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text>I'm pressable!</Text>
        </Pressable>
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
  button: {
    height: "10%",
    width: "80%",
    marginVertical: "40px",
    borderRadius: "10px",
    background: "linear-gradient(145deg, #ffffff, #ddd7d7)",
    boxShadow: "8px 8px 11px #9d9999, -8px -8px 11px #ffffff",
    textTransform: "uppercase",
  },

  // button:after {
  //   content: "";
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   width: 200%;
  //   height: 100%;
  //   opacity: 0;
  //   transform: translateX(-100%);

  //   background: rgba(255, 255, 255, 0.13);
  //   background: linear-gradient(
  //     to right,
  //     rgba(255, 255, 255, 0.13) 0%,
  //     rgba(255, 255, 255, 0.13) 77%,
  //     rgba(255, 255, 255, 0.5) 92%,
  //     rgba(255, 255, 255, 0.3) 100%
  //   );
  // }

  // button:hover:after {
  //   opacity: 1;
  //   top: 0;
  //   left: 0;
  //   transform: translateX(0);
  //   transition-property: transform, opacity;
  //   transition-duration: 0.7s, 0.15s;
  //   transition-timing-function: ease;
  // }

  // button:active:after {
  //   opacity: 0;
  // }
});
