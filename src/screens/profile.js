import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";

const Profile = () => {
  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <View style={styles.container}>
        {" "}
        <PowerSettingsNewIcon fontSize="large" style={{ color: "#ffffff" }} />
        <Text>LIVE FOR FOOD</Text>
      </View>
      <View style={styles.profile}>
        <Text style={styles.text}>
          ACCOUNT
          <br />
          <span style={{ fontSize: "12px", letterSpacing: 0 }}>
            Login/Create Account quickly to manage orders{" "}
          </span>
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text2}>
            <span
              style={{
                color: "#ffffff",
                fontFamily: "Josefin Sans",
                letterSpacing: 4,
              }}
            >
              Login
            </span>
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            marginVertical: "20px",
            fontFamily: "Josefin Sans",
            fontSize: "15px",
          }}
        >
          Don't have an account?{" "}
          <span style={{ color: "#00e676" }}>Signup Here</span>
        </Text>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    height: "55%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: `url(${"https://www.aafoodservice.com/wp-content/themes/custom-theme/img/slider-v1704.jpg"})`,
    backgroundRepeat: "no-repeat",
    // backgroundSize: "100% 50%",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  profile: {
    alignItems: "center",
    backgroundColor: "#ffffff",
    flexDirection: "column",
    height: "45%",
    width: "100%",
  },
  logo: {
    // marginHorizontal: "auto",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: "auto",
    marginHorizontal: "auto",
    height: "70px",
    width: "70px",
    borderRadius: "175px",
    backgroundColor: "#424242",
  },
  text2: {
    pointer: "courser",
    marginVertical: "auto",
    marginHorizontal: "auto",
    letterSpacing: 3,
    fontSize: "15px",
    fontWeight: "bold",
  },
  button: {
    height: "15%",
    width: "80%",
    textAlign: "center",
    borderRadius: "10px",
    backgroundColor: "#ff6d00",
    boxShadow: "3px 4px 6px #9d9999, -3px -4px 6px #ffffff",
    textTransform: "uppercase",
  },
  text: {
    pointer: "courser",
    marginVertical: "20px",
    marginHorizontal: "auto",
    letterSpacing: 3,
    fontSize: "20px",
    fontWeight: "bold",
    fontFamily: "Josefin Sans",
  },
});
