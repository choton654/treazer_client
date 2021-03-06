import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <View style={styles.logo}>
          <PowerSettingsNewIcon fontSize="large" style={{ color: "#00796b" }} />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>
            <span style={{ color: "#448aff" }}>Login</span>
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>
            {" "}
            <span style={{ color: "#fb8c00" }}>Sign up</span>
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>
            {" "}
            <span style={{ color: "#43a047" }}>Login</span>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    marginTop: "40PX",
    height: "80%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  profile: {
    alignItems: "center",
    flexDirection: "column",
    height: "100%",
    width: "80%",
    borderRadius: "20px",
    background: "#f6efef",
    boxShadow: "8px 8px 12px #b4aeae, -8px -8px 12px #ffffff",
  },
  logo: {
    // marginHorizontal: "auto",
    justifyContent: "center",
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
    marginVertical: "30px",
    borderRadius: "10px",
    backgroundColor: "linear-gradient(145deg, #d7a2a2, #b58888)",
    boxShadow: "3px 4px 6px #9d9999, -3px -4px 6px #ffffff",
    textTransform: "uppercase",
  },
  text: {
    pointer: "courser",
    marginVertical: "auto",
    marginHorizontal: "auto",
    letterSpacing: 3,
    fontSize: "20px",
    fontWeight: "bold",
    textShadow: "2px 2px 4px #7a6e6e, -2px -2px 4px #ffffff",
    fontFamily: "Josefin Sans",
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
